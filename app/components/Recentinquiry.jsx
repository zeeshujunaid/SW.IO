import { useEffect, useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { InquiryContext } from "../context/Inquirycontext";

export default function Recentinquiry({ searchText, refreshTrigger }) {
  const router = useRouter();
  const { inquiries, loading } = useContext(InquiryContext);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    if (inquiries && inquiries.length) {
      const feedbackCases = inquiries
        .filter((item) => item.status === "Completed")
        .slice(0, 3);

      setCases(feedbackCases);
    } else {
      setCases([]); 
    }
  }, [inquiries]);

  const filteredCases = cases.filter((item) => {
    const lower = searchText.toLowerCase();
    return (
      (item.caseId?.saailId?.name || "").toLowerCase().includes(lower) ||
      (item.caseId?.area || "").toLowerCase().includes(lower) ||
      (item.caseId?.help || "").toLowerCase().includes(lower)
    );
  });

  return (
    <View style={styles.container}>
      {/* Heading always visible */}
      <View style={styles.heading}>
        <Text style={styles.headingText}>Recent Inquiries</Text>
        <TouchableOpacity onPress={() => router.push("/(tabs)/Activity")}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <ActivityIndicator size="large" color="#0071BA" />
        </View>
      )}

      {!loading && filteredCases.length === 0 && (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{ color: "#777" }}>
            No recent inquiries with feedback.
          </Text>
        </View>
      )}

      {!loading &&
        filteredCases.map((item, index) => (
          <View
            key={item._id}
            style={[
              styles.card,
              { borderColor: item.status === "Completed" ? "green" : "red" },
            ]}
          >
            <Text style={styles.caseNumber}>
              Case #{(index + 1).toString().padStart(2, "0")}
            </Text>

            {/* Case Number */}
            <View style={styles.row}>
              <View style={styles.left}>
                <FontAwesome name="hashtag" size={16} color="#0071BA" />
                <Text style={styles.label}>Case Number:</Text>
              </View>
              <Text
                style={[
                  styles.value,
                  { color: item.status === "Completed" ? "green" : "red" },
                ]}
              >
                {item.caseId?.caseNo || "-"}
              </Text>
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
              <Text
                style={[
                  styles.value,
                  { color: item.status === "Completed" ? "green" : "red" },
                ]}
              >
                {item.caseId?.createdAt
                  ? new Date(item.caseId.createdAt).toLocaleDateString()
                  : "-"}
              </Text>
            </View>

            {/* Saail Name */}
            <View style={styles.row}>
              <View style={styles.left}>
                <Feather name="user" size={16} color="#0071BA" />
                <Text style={styles.label}>Saail Name:</Text>
              </View>
              <Text
                style={[
                  styles.value,
                  { color: item.status === "Completed" ? "green" : "red" },
                ]}
              >
                {item.caseId?.saailId?.name || "-"}
              </Text>
            </View>

            {/* Area */}
            <View style={styles.row}>
              <View style={styles.left}>
                <Entypo name="location-pin" size={18} color="#0071BA" />
                <Text style={styles.label}>Area:</Text>
              </View>
              <Text
                style={[
                  styles.value,
                  { color: item.status === "Completed" ? "green" : "red" },
                ]}
              >
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
              <Text
                style={[
                  styles.value,
                  { color: item.status === "Completed" ? "green" : "red" },
                ]}
              >
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
                <Text style={styles.label}>Help:</Text>
              </View>
              <Text
                style={[
                  styles.value,
                  { color: item.status === "Completed" ? "green" : "red" },
                ]}
              >
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
