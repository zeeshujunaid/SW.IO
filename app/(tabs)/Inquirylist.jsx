import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import baseurl from "../../services/config";
import { useRouter } from "expo-router";
import Header from "../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Inquirylist() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [cases, setCases] = useState([]);
  const [filteredCases, setFilteredCases] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchCases(1, true);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchCases(1, true);
    }, [])
  );

  useEffect(() => {
    const pending = cases.filter((item) => !item.caseId?.isFeedbackProvided);

    if (!searchText) {
      setFilteredCases(pending);
    } else {
      const text = searchText.toLowerCase();
      const filtered = pending.filter((item) => {
        const saailName = item.caseId?.saailId?.name || "";
        const area = item.caseId?.saailId?.area || "";
        const caseNo = item.caseId?.caseNo || "";
        const address = item.caseId?.saailId?.address || "";
        const helpfor = item.caseId?.saailId?.helpFor || "";

        return (
          saailName.toLowerCase().includes(text) ||
          area.toLowerCase().includes(text) ||
          caseNo.toLowerCase().includes(text) ||
          address.toLowerCase().includes(text) ||
          helpfor.toLowerCase().includes(text)
        );
      });

      setFilteredCases(filtered);
    }
  }, [searchText, cases]);

  const fetchCases = async (pageNumber = 1, reset = false) => {
    if (loading) return;
    setLoading(true);

    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(
        `${baseurl}/api/inquiry?limit=6&page=${pageNumber}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const resData = await response.json();
      const casesData = Array.isArray(resData.data) ? resData.data : [];

      if (resData.pagination) {
        setHasMore(
          resData.pagination.currentPage < resData.pagination.totalPages
        );
      } else {
        setHasMore(casesData.length > 0);
      }

      if (reset || pageNumber === 1) {
        setCases(casesData);
        setPage(1);
      } else {
        setCases((prev) => [...prev, ...casesData]);
      }
    } catch (error) {
      console.log("API fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (!hasMore || loading) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchCases(nextPage, false);
  };

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Enquiries List</Text>

          <View style={styles.searchWrapper}>
            <Ionicons name="search" size={20} color="#777" />
            <TextInput
              placeholder="Search By Name,Area,Helpfor"
              placeholderTextColor="#777"
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        </View>

        {filteredCases.length === 0 && !loading && (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            No pending enquiries.
          </Text>
        )}

        {filteredCases.map((item, index) => (
          <View
            key={item._id}
            style={[
              styles.card,
              {
                borderColor: item.status === "Completed" ? "green" : "red",
                // color: item.status === "Completed" ? "rgba(252, 223, 223, 0.33)" : "red",
              },
            ]}
          >
            <View style={styles.caseRow}>
              <Text style={styles.caseNumber}>
                Case # {(index + 1).toString().padStart(2, "0")}
              </Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  router.push({
                    pathname: "/common/Inquiryform",
                    params: { caseData: JSON.stringify(item) },
                  })
                }
              >
                <Text style={styles.buttonText}>Add Feedback</Text>
              </TouchableOpacity>
            </View>
            {[
              {
                icon: FontAwesome,
                name: "hashtag",
                label: "Case Number",
                value: item.caseId?.caseNo,
              },
              {
                icon: MaterialCommunityIcons,
                name: "calendar-clock",
                label: "Date",
                value: new Date(item.createdAt).toLocaleDateString(),
              },
              {
                icon: Feather,
                name: "user",
                label: "Saail Name",
                value: item.caseId?.saailId?.name,
              },
              {
                icon: Entypo,
                name: "location-pin",
                label: "Area",
                value: item.caseId?.saailId?.area,
              },
              {
                icon: MaterialCommunityIcons,
                name: "home-map-marker",
                label: "Address",
                value: item.caseId?.saailId?.address,
              },
              {
                icon: MaterialCommunityIcons,
                name: "hand-heart",
                label: "Required Help",
                value: item.caseId?.saailId?.helpFor,
              },
            ].map((field, i) => (
              <View style={styles.row} key={i}>
                <View style={styles.left}>
                  <field.icon name={field.name} size={16} color="#0071BA" />
                  <Text style={styles.label}>{field.label}:</Text>
                </View>
                <Text style={styles.value}>{field.value || "-"}</Text>
              </View>
            ))}
          </View>
        ))}

        {hasMore && (
          <TouchableOpacity style={styles.loadMoreWrapper} onPress={loadMore}>
            <View style={styles.line} />
            {loading ? (
              <ActivityIndicator color="#0071BA" />
            ) : (
              <Text style={styles.loadMoreText}>View More</Text>
            )}
            <View style={styles.line} />
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 15,
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: { marginVertical: 10, gap: 10 },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    paddingLeft: 10,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.12)",
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 12,
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16, color: "#000" },
  caseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  card: {
    borderColor: "#00000020",
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#fff",
  },
  caseNumber: { fontWeight: "800", fontSize: 20 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  left: { flexDirection: "row", alignItems: "center", gap: 6, flex: 1 },
  label: { fontWeight: "600", fontSize: 14, color: "rgba(0, 0, 0, 0.8)" },
  value: {
    fontSize: 14,
    fontWeight: "500",
    color: "red",
    flex: 1,
    textAlign: "right",
  },
  button: {
    backgroundColor: "#0071BA",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 14 },
  loadMoreWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginVertical: 15,
  },
  line: { height: 1, backgroundColor: "#ccc", flex: 1 },
  loadMoreText: {
    color: "#0071BA",
    fontWeight: "700",
    fontSize: 14,
    paddingHorizontal: 5,
  },
});
