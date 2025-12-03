import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import Header from "../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Activity() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const cases = [
    {
      caseNumber: "Case #01",
      code: "001-CH-00",
      name: "Ali Khan",
      date: "29-oct-2025",
      area: "Gulshan",
      address: "Street 12, Karachi",
      help: "Medical",
    },
    {
      caseNumber: "Case #02",
      code: "002-CH-01",
      name: "Sara Ahmed",
      date: "29-oct-2025",
      area: "Korangi",
      address: "Block 3, Karachi",
      help: "Food",
    },
    {
      caseNumber: "Case #03",
      code: "002-CH-02",
      name: "Sara Ahmed",
      date: "29-oct-2025",
      area: "Korangi",
      address: "Block 3, Karachi",
      help: "Food",
    },
    {
      caseNumber: "Case #04",
      code: "002-CH-03",
      name: "Sara Ahmed",
      date: "29-oct-2025",
      area: "Korangi",
      address: "Block 3, Karachi",
      help: "Food",
    },
    {
      caseNumber: "Case #05",
      code: "002-CH-04",
      name: "Sara Ahmed",
      date: "29-oct-2025",
      area: "Korangi",
      address: "Block 3, Karachi",
      help: "Food",
    },
  ];

  // Filter cases based on search text (name, area, help)
  const filteredCases = cases.filter((item) => {
    const lower = searchText.toLowerCase();
    return (
      item.name.toLowerCase().includes(lower) ||
      item.area.toLowerCase().includes(lower) ||
      item.help.toLowerCase().includes(lower)
    );
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <View style={styles.container}>
        <Header />

        <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
          {/* Header & Search */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Orders History</Text>

            <View style={styles.searchWrapper}>
              <Ionicons name="search" size={20} color="#777" />
              <TextInput
                placeholder="Search..."
                placeholderTextColor="#777"
                style={styles.searchInput}
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>
          </View>

          {/* Filtered Cases */}
          {filteredCases.map((item) => (
            <View key={item.caseNumber} style={styles.card}>
              <View style={styles.caseRow}>
                <Text style={styles.caseNumber}>{item.caseNumber}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>View Details</Text>
                </TouchableOpacity>
              </View>

              {/* Case Code */}
              <View style={styles.row}>
                <View style={styles.left}>
                  <FontAwesome name="hashtag" size={16} color="#8dc63f" />
                  <Text style={styles.label}>Case Number:</Text>
                </View>
                <Text style={styles.value}>{item.code}</Text>
              </View>

              {/* Date */}
              <View style={styles.row}>
                <View style={styles.left}>
                  <MaterialCommunityIcons
                    name="calendar-clock"
                    size={16}
                    color="#8dc63f"
                  />
                  <Text style={styles.label}>Date:</Text>
                </View>
                <Text style={styles.value}>{item.date}</Text>
              </View>

              {/* Name */}
              <View style={styles.row}>
                <View style={styles.left}>
                  <Feather name="user" size={16} color="#8dc63f" />
                  <Text style={styles.label}>Saail Name:</Text>
                </View>
                <Text style={styles.value}>{item.name}</Text>
              </View>

              {/* Area */}
              <View style={styles.row}>
                <View style={styles.left}>
                  <Entypo name="location-pin" size={18} color="#8dc63f" />
                  <Text style={styles.label}>Area:</Text>
                </View>
                <Text style={styles.value}>{item.area}</Text>
              </View>

              {/* Address */}
              <View style={styles.row}>
                <View style={styles.left}>
                  <MaterialCommunityIcons
                    name="home-map-marker"
                    size={18}
                    color="#8dc63f"
                  />
                  <Text style={styles.label}>Address:</Text>
                </View>
                <Text style={styles.value}>{item.address}</Text>
              </View>

              {/* Help */}
              <View style={styles.row}>
                <View style={styles.left}>
                  <MaterialCommunityIcons
                    name="hand-heart"
                    size={18}
                    color="#8dc63f"
                  />
                  <Text style={styles.label}>Required Help:</Text>
                </View>
                <Text style={styles.value}>{item.help}</Text>
              </View>

              <TouchableOpacity style={styles.completebutton}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
                >
                  <AntDesign name="check-circle" size={20} color="#fff" />
                  <Text style={styles.buttonText}>Order Completed</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 15,
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: { marginVertical: 15, gap: 10 },
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
  caseNumber: { fontWeight: "800", fontSize: 18 },
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
  button: {
    backgroundColor: "#0071BA",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 14 },
  completebutton: {
    marginTop: 10,
    justifyContent: "space-around",
    alignSelf: "flex-end",
    backgroundColor: "#8dc63f",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
});
