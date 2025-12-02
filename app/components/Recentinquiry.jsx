import { Text, View, StyleSheet } from "react-native";

export default function Recentinquiry() {
  const cases = [
    {
      caseNumber: "#01",
      code: "001-CH-00",
      name: "Ali Khan",
      area: "Gulshan",
      address: "Street 12, Karachi",
      help: "Medical",
    },
    {
      caseNumber: "#02",
      code: "002-CH-01",
      name: "Sara Ahmed",
      area: "Korangi",
      address: "Block 3, Karachi",
      help: "Food",
    },
    {
      caseNumber: "#03",
      code: "003-CH-02",
      name: "Usman Riaz",
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
          <View style={styles.cardHeader}>
            <Text style={styles.caseNumber}>{item.caseNumber}</Text>
            <Text style={styles.code}>{item.code}</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.detail}>
              <Text style={styles.label}>Name: </Text>
              {item.name}
            </Text>
            <Text style={styles.detail}>
              <Text style={styles.label}>Area: </Text>
              {item.area}
            </Text>
            <Text style={styles.detail}>
              <Text style={styles.label}>Address: </Text>
              {item.address}
            </Text>
            <Text style={styles.detail}>
              <Text style={styles.label}>Help: </Text>
              {item.help}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, paddingTop: 10 },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  headingText: { fontSize: 18, fontWeight: "bold", color: "#000" },
  viewAllText: { fontSize: 14, fontWeight: "600", color: "#0071BA" },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 15,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  caseNumber: { fontWeight: "bold", fontSize: 16 },
  code: { fontSize: 14, color: "#555" },
  cardBody: { marginTop: 4 },
  detail: { fontSize: 14, marginBottom: 3 },
  label: { fontWeight: "bold" },
});
