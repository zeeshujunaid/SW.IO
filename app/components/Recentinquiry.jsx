import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";

export default function Recentinquiry() {
  const router = useRouter();
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
  ];

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Recent Inquiries</Text>
        <TouchableOpacity onPress={()=>router.push("/(tabs)/Inquirylist")}>
        <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {cases.map((item) => (
        <View key={item.caseNumber} style={styles.card}>
          <Text style={styles.caseNumber}>{item.caseNumber}</Text>

          {/* Case Code */}
          <View style={styles.row}>
            <View style={styles.left}>
              <FontAwesome name="hashtag" size={16} color="#0071BA" />
              <Text style={styles.label}>Case Code:</Text>
            </View>
            <Text style={styles.value}>{item.code}</Text>
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
            <Text style={styles.value}>{item.date}</Text>
          </View>

          {/* Name */}
          <View style={styles.row}>
            <View style={styles.left}>
              <Feather name="user" size={16} color="#0071BA" />
              <Text style={styles.label}>Name:</Text>
            </View>
            <Text style={styles.value}>{item.name}</Text>
          </View>

          {/* Area */}
          <View style={styles.row}>
            <View style={styles.left}>
              <Entypo name="location-pin" size={18} color="#0071BA" />
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
                color="#0071BA"
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
                color="#0071BA"
              />
              <Text style={styles.label}>Help:</Text>
            </View>
            <Text style={styles.value}>{item.help}</Text>
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

  caseNumber: {
    fontWeight: "800",
    fontSize: 18,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flex: 1,
  },

  label: {
    fontWeight: "600",
    fontSize: 14,
  },

  value: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    flex: 1,
    textAlign: "right",
  },
});
