import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter, useFocusEffect } from "expo-router";
import { useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Header() {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState(null);

  // Load profile image from AsyncStorage whenever screen is focused
  useFocusEffect(
    useCallback(() => {
      const fetchProfileImage = async () => {
        try {
          const value = await AsyncStorage.getItem("userdata");
          if (value !== null) {
            const userdata = JSON.parse(value);
            const img = userdata?.data?.user?.image?.fileUrl;
            if (img) setProfileImage(img);
          }
        } catch (e) {
          console.log("Error fetching profile image from AsyncStorage", e);
        }
      };
      fetchProfileImage();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={require("../../assets/images/saylanilogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity>
          <View style={styles.notification}>
            <Ionicons name="notifications-outline" size={20} color="black" />
          </View>
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity onPress={() => router.push("/(tabs)/Profile")}>
          <Image
            source={
              profileImage
                ? { uri: profileImage }
                : require("../../assets/images/saillnew.png")
            }
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    flexDirection: "row",
    paddingTop: 20,
    gap: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  leftSection: { width: "70%" },
  logo: { width: "100%", marginLeft: 10, height: "70%" },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "30%",
  },
  notification: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.12)",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  profileImage: { width: 35, height: 35, borderRadius: 20 },
  userInfo: { flex: 1 },
  userName: { fontSize: 14, fontWeight: "700", color: "#000" },
  userRole: { fontSize: 12, color: "#555" },
});
