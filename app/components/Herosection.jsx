import { Text, View, Image, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function Herosection() {
  return (
    <View style={styles.container}>
      {/* Top Card */}
      <View style={styles.topCard}>
        <View style={styles.topCardHeader}>
          <View style={styles.topCardIcon}>
            <Feather name="users" size={24} color="#527EDB" />
          </View>
          <Text style={styles.topCardTitle}>Total Inquire</Text>
        </View>

        <Text style={styles.topCardNumber}>100</Text>

        <View style={styles.topCardFooter}>
          <Text style={styles.topCardPercentage}>+24%</Text>
          <Text style={styles.topCardVs}>vs last week</Text>
        </View>
      </View>

      {/* Bottom Row Cards */}
      <View style={styles.bottomRow}>
        {/* Completed Card */}
        <View style={styles.bottomCard}>
          <View style={styles.bottomCardHeader}>
            <View style={styles.completedIcon}>
              <Feather name="users" size={24} color="#89C441" />
            </View>
            <Text style={styles.bottomCardTitle}>Completed</Text>
          </View>

          <Text style={styles.bottomCardNumber}>100</Text>

          <View style={styles.bottomCardFooter}>
            <Text style={styles.bottomCardPercentage}>+24%</Text>
            <Text style={styles.bottomCardVs}>vs last week</Text>
          </View>
        </View>

        {/* Pending Card */}
        <View style={styles.bottomCard}>
          <View style={styles.bottomCardHeader}>
            <Image
              source={require("../../assets/images/Featuredicon.png")}
              style={styles.pendingIcon}
            />
            <Text style={styles.bottomCardTitle}>Pending</Text>
          </View>

          <Text style={styles.bottomCardNumber}>25%</Text>

          <View style={styles.bottomCardFooter}>
            <Text style={styles.pendingPercentage}>+24%</Text>
            <Text style={styles.bottomCardVs}>vs last week</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    gap: 12,
  },

  // Top Card
  topCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderWidth: 1,
    borderColor: "#00000020",
    borderRadius: 12,
  },
  topCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  topCardIcon: {
    backgroundColor: "rgba(238, 242, 251, 1)",
    padding: 8,
    borderRadius: 50,
  },
  topCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  topCardNumber: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 8,
    color: "#000",
  },
  topCardFooter: {
    flexDirection: "row",
    gap: 6,
    marginTop: 6,
    alignItems: "center",
  },
  topCardPercentage: {
    color: "#0071BA",
    fontWeight: "600",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.12)",
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  topCardVs: {
    color: "#666",
  },

  // Bottom Row
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  bottomCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderWidth: 1,
    borderColor: "#00000020",
    borderRadius: 12,
  },
  bottomCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  completedIcon: {
    backgroundColor: "rgba(137, 196, 65, 0.1)",
    padding: 8,
    borderRadius: 50,
  },
  pendingIcon: {
    height: 50,
    width: 50,
  },
  bottomCardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    flex: 1,
  },
  bottomCardNumber: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 8,
    color: "#000",
  },
  bottomCardFooter: {
    flexDirection: "row",
    gap: 6,
    marginTop: 6,
    alignItems: "center",
  },
  bottomCardPercentage: {
    color: "#0071BA",
    fontWeight: "600",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.12)",
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  pendingPercentage: {
    color: "rgba(253, 126, 20, 1)",
    fontWeight: "600",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.12)",
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  bottomCardVs: {
    color: "#666",
  },
});
