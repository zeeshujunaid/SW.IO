import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function Header() {
  const router = useRouter();

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
        <TouchableOpacity onPress={()=>router.push("/common/seedata")}>
        <View style={styles.notification}>
          <Ionicons name="notifications-outline" size={20} color="black" />
        </View>
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity onPress={() => router.push("/(tabs)/Profile")}>
          <Image
            source={require("../../assets/images/saillnew.png")}
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
    backgroundColor: "#ffffffff",
  },

  leftSection: {
    width: "70%",
  },

  logo: {
    width: "100%",
    marginLeft: 10,
    height: "70%",
  },

  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "30%",
  },

  notification: {
    borderWidth: 1,
    borderColor: "#border: 1px solid rgba(0, 0, 0, 0.12)",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },

  userInfo: {
    flex: 1,
  },

  userName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  },

  userRole: {
    fontSize: 12,
    color: "#555",
  },
});
