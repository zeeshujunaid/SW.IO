import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

export default function BackHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.middleSection}>
        <Image
          source={require("../../assets/images/saylanilogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.rightSection}>
        <View style={styles.notification}>
          <Ionicons name="notifications-outline" size={20} color="black" />
        </View>

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
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    gap: 10,
  },

  leftSection: {
    width: "10%",
    justifyContent: "center",
  },

  middleSection: {
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  logo: {
    width: "100%",
    height: 50,
  },

  rightSection: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  notification: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.12)",
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
});
