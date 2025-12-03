import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { baseurl } from "../../services/config";
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
    fetchCases(1);
  }, []);

  useEffect(() => {
    if (searchText === "") {
      setFilteredCases(cases);
    } else {
      const filtered = cases.filter((item) => {
        const saailName = item.caseId?.saailId?.name || "";
        const area = item.caseId?.saailId?.area || "";
        const caseNo = item.caseId?.caseNo || "";
        const address = item.caseId?.saailId?.address || "";
        const helpfor = item.caseId?.saailId?.helpfor || "";

        const text = searchText.toLowerCase();
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

  const fetchCases = async (pageNumber = 1) => {
    if (loading) return;
    setLoading(true);

    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(
        `${baseurl}/api/inquiry?limit=10&page=${pageNumber}`,
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

      if (pageNumber === 1) setCases(casesData);
      else setCases((prev) => [...prev, ...casesData]);
    } catch (error) {
      console.log("API fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const loadMore = () => {
    if (!hasMore || loading) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchCases(nextPage);
  };

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Enquiries List</Text>

          <View style={styles.searchWrapper}>
            <Ionicons name="search" size={20} color="#777" />
            <TextInput
              placeholder="Search..."
              placeholderTextColor="#777"
              style={styles.searchInput}
              value={searchText}
              onChangeText={handleSearch}
            />
          </View>
        </View>

        {filteredCases.map((item, index) => (
          <View key={item._id} style={styles.card}>
            <View style={styles.caseRow}>
              <Text style={styles.caseNumber}>
                Case # {(index + 1).toString().padStart(2, "0")}
              </Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/common/Inquiryform")}
              >
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
            </View>

            {/* Case Code */}
            <View style={styles.row}>
              <View style={styles.left}>
                <FontAwesome name="hashtag" size={16} color="#0071BA" />
                <Text style={styles.label}>Case Number:</Text>
              </View>
              <Text style={styles.value}>{item.caseId?.caseNo || "-"}</Text>
            </View>

            {/* Date */}
            <View style={styles.row}>
              <View style={styles.left}>
                <MaterialCommunityIcons
                  name="calendar-clock"
                  size={16}
                  color="#0071BA"
                />
                <Text style={styles.label}>Date:</Text>
              </View>
              <Text style={styles.value}>
                {new Date(item.createdAt).toLocaleDateString()}
              </Text>
            </View>

            {/* Name */}
            <View style={styles.row}>
              <View style={styles.left}>
                <Feather name="user" size={16} color="#0071BA" />
                <Text style={styles.label}>Saail Name:</Text>
              </View>
              <Text style={styles.value}>
                {item.caseId?.saailId?.name || "-"}
              </Text>
            </View>

            {/* Area */}
            <View style={styles.row}>
              <View style={styles.left}>
                <Entypo name="location-pin" size={18} color="#0071BA" />
                <Text style={styles.label}>Area:</Text>
              </View>
              <Text style={styles.value}>
                {item.caseId?.saailId?.area || "-"}
              </Text>
            </View>

            {/* Address */}
            <View style={styles.row}>
              <View style={styles.left}>
                <MaterialCommunityIcons
                  name="home-map-marker"
                  size={18}
                  color="#0071BA"
                />
                <Text style={styles.label}>Address:</Text>
              </View>
              <Text style={styles.value}>
                {item.caseId?.saailId?.address || "-"}
              </Text>
            </View>

            {/* Help */}
            <View style={styles.row}>
              <View style={styles.left}>
                <MaterialCommunityIcons
                  name="hand-heart"
                  size={18}
                  color="#0071BA"
                />
                <Text style={styles.label}>Required Help:</Text>
              </View>
              <Text style={styles.value}>
                {item.caseId?.saailId?.helpfor || "-"}
              </Text>
            </View>
          </View>
        ))}

        {/* Load More Button */}
        {hasMore && (
          <TouchableOpacity style={styles.loadMoreBtn} onPress={loadMore}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.loadMoreText}>Load More</Text>
            )}
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
    color: "#333",
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
  loadMoreBtn: {
    backgroundColor: "#0071BA",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: 50,
  },
  loadMoreText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
