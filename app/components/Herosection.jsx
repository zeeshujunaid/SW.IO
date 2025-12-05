import {
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import Feather from "@expo/vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseurl  from "../../services/config";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function Herosection() {
  const [stats, setStats] = useState({ active: 0, approved: 0, pendings: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) throw new Error("Token not found");

        const response = await fetch(`${baseurl}/api/dashboard/inqiry-stats`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error("Failed to fetch stats");


        const data = await response.json();
        if (data.success && data) {
          setStats({
            active: data.data.totalInquiry,
            approved: data.data.complete,
            pendings: data.data.pending,
          });
        }
      } catch (err) {
        console.log("Error fetching stats:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topCard}>
        <View style={styles.topCardHeader}>
          <View style={styles.topCardIcon}>
            <Feather name="users" size={24} color="#527EDB" />
          </View>
          <Text style={styles.topCardTitle}>Total Inquire</Text>
        </View>

        <Text style={styles.topCardNumber}>{stats.active}</Text>

        <View style={styles.topCardFooter}>
          <Text style={styles.topCardPercentage}>+24%</Text>
          <Text style={styles.topCardVs}>vs last week</Text>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.bottomCard}>
          <View style={styles.bottomCardHeader}>
            <View style={styles.completedIcon}>
              <Feather name="users" size={24} color="#89C441" />
            </View>
            <Text style={styles.bottomCardTitle}>Completed</Text>
          </View>

          <Text style={styles.bottomCardNumber}>{stats.approved}</Text>

          <View style={styles.bottomCardFooter}>
            <Text style={styles.bottomCardPercentage}>+24%</Text>
            <Text style={styles.bottomCardVs}>vs last week</Text>
          </View>
        </View>

        <View style={styles.bottomCard}>
          <View style={styles.bottomCardHeader}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 18,
                backgroundColor: "#rgba(253, 126, 20, 0.1)",
                height: 40,
                width: 40,
              }}
            >
              <AntDesign
                name="exclamation-circle"
                size={24}
                color="#rgba(253, 126, 20, 1)"
              />
            </View>
            <Text style={styles.bottomCardTitle}>Pending</Text>
          </View>

          <Text style={styles.bottomCardNumber}>{stats.pendings}</Text>

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
