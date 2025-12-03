import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { InquiryContext } from "../context/Inquirycontext";

export default function Recentinquiry({ searchText }) {
  const router = useRouter();
  const { inquiries } = useContext(InquiryContext);


  const cases = (inquiries || []).slice(0, 3);


  const filteredCases = cases.filter((item) => {
    const lower = searchText.toLowerCase();
    return (
      (item.caseId.inquiryPersonName || "").toLowerCase().includes(lower) ||
      (item.caseId.area || "").toLowerCase().includes(lower) ||
      (item.caseId.help || "").toLowerCase().includes(lower)
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Recent Inquiries</Text>
        <TouchableOpacity onPress={() => router.push("/(tabs)/Inquirylist")}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {filteredCases.map((item, index) => (
        <View key={item._id} style={styles.card}>
          <Text style={styles.caseNumber}>
            Case #{(index + 1).toString().padStart(2, "0")}
          </Text>

          <View style={styles.row}>
            <View style={styles.left}>
              <FontAwesome name="hashtag" size={16} color="#0071BA" />
              <Text style={styles.label}>Case Number:</Text>
            </View>
            <Text style={styles.value}>{item.caseId.caseNo}</Text>
          </View>

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
              {new Date(item.caseId.createdAt).toLocaleDateString()}
            </Text>
          </View>

          <View style={styles.row}>
            <View style={styles.left}>
              <Feather name="user" size={16} color="#0071BA" />
              <Text style={styles.label}>Saail Name:</Text>
            </View>
            <Text style={styles.value}>
              {item.caseId?.saailId?.name || "-"}
            </Text>
          </View>

          <View style={styles.row}>
            <View style={styles.left}>
              <Entypo name="location-pin" size={18} color="#0071BA" />
              <Text style={styles.label}>Area:</Text>
            </View>
            <Text style={styles.value}>
              {item.caseId?.saailId?.area || "-"}
            </Text>
          </View>

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

          <View style={styles.row}>
            <View style={styles.left}>
              <MaterialCommunityIcons
                name="hand-heart"
                size={18}
                color="#0071BA"
              />
              <Text style={styles.label}>Help:</Text>
            </View>
            <Text style={styles.value}>
              {item.caseId?.saailId?.helpFor || "-"}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 12, paddingTop: 15 },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  headingText: { fontSize: 18, fontWeight: "bold" },
  viewAllText: { fontSize: 14, fontWeight: "600", color: "#0071BA" },
  card: {
    borderColor: "#00000020",
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#fff",
  },
  caseNumber: { fontWeight: "800", fontSize: 18, marginBottom: 10 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  left: { flexDirection: "row", alignItems: "center", gap: 6, flex: 1 },
  label: { fontWeight: "600", fontSize: 14 },
  value: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    flex: 1,
    textAlign: "right",
  },
});
