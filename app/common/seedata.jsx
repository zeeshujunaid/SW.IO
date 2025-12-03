import { View, Text } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseurl } from "../../services/config";

export default function CheckStats() {
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) throw new Error("Token not found");

        const response = await fetch(`${baseurl}/api/dashboard/stats`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error("Failed to fetch stats");

        const data = await response.json();
        console.log("Stats API Response:", data);
      } catch (err) {
        console.log("Error fetching stats:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Check console for stats API response</Text>
    </View>
  );
}
