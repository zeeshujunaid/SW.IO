import { Text, View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";

export default function Recentinquiry() {
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
      code: "003-CH-02",
      name: "Usman Riaz",
      date: "29-oct-2025",
      area: "Clifton",
      address: "Phase 5, Karachi",
      help: "Shelter",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Recent Inquiries</Text>
        <Text style={styles.viewAllText}>View All</Text>
      </View>

      {cases.map((item) => (
        <View key={item.caseNumber} style={styles.card}>
          <Text style={styles.caseNumber}>{item.caseNumber}</Text>

          <View style={styles.cardBody}>
            <Row
              label="Case Code"
              value={item.code}
              icon={<FontAwesome name="hashtag" size={16} color="#0071BA" />}
            />
            <Row
              label="Date"
              value={item.date}
              icon={
                <MaterialCommunityIcons
                  name="calendar-clock"
                  size={16}
                  color="#0071BA"
                />
              }
            />
            <Row
              label="Name"
              value={item.name}
              icon={<Feather name="user" size={16} color="#0071BA" />}
            />
            <Row
              label="Area"
              value={item.area}
              icon={<Entypo name="location-pin" size={18} color="#0071BA" />}
            />
            <Row
              label="Address"
              value={item.address}
              icon={
                <MaterialCommunityIcons
                  name="home-map-marker"
                  size={18}
                  color="#0071BA"
                />
              }
            />
            <Row
              label="Help"
              value={item.help}
              icon={
                <MaterialCommunityIcons
                  name="hand-heart"
                  size={18}
                  color="#0071BA"
                />
              }
            />
          </View>
        </View>
      ))}
    </View>
  );
}

function Row({ label, value, icon }) {
  return (
    <View style={styles.detailRow}>
      {/* LEFT → icon + label */}
      <View style={styles.leftSide}>
        {icon}
        <Text style={styles.detailLabel}>{label}:</Text>
      </View>

      {/* RIGHT → value */}
      <Text style={styles.valueRight}>{value}</Text>
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

  cardBody: { gap: 14 },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flex: 1,
  },

  detailLabel: {
    fontWeight: "600",
    fontSize: 14,
  },

  valueRight: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
    flex: 1,
    color: "#333",
  },
});
