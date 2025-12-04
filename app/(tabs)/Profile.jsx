import { router } from "expo-router";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";

export default function Profile() {
  const [userdata, setUserdata] = useState(null);

  // Fetch user data every time screen is focused
  useFocusEffect(
    useCallback(() => {
      const fetchUser = async () => {
        try {
          const value = await AsyncStorage.getItem("userdata");
          if (value !== null) {
            setUserdata(JSON.parse(value));
          }
        } catch (e) {
          console.log("Error reading userdata from AsyncStorage", e);
        }
      };
      fetchUser();
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("../../assets/images/profilebg.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />

      {/* Profile Image */}
      <Image
        source={
          userdata?.data?.user?.image?.fileUrl
            ? { uri: userdata.data.user.image.fileUrl }
            : require("../../assets/images/saillnew.png")
        }
        style={styles.profileImage}
        resizeMode="cover"
      />

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() =>
          router.push({
            pathname: "/common/Editprofile",
            params: { user: JSON.stringify(userdata?.data?.user) },
          })
        }
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* User Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{userdata?.data?.user?.userName}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userdata?.data?.user?.email}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>CNIC:</Text>
          <Text style={styles.value}>{userdata?.data?.user?.cnicNo}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{userdata?.data?.user?.address}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  bgImage: { width: "100%", height: 200 },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: -60,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#rgba(36, 39, 96, 1)",
  },
  editButton: {
    marginTop: 15,
    backgroundColor: "#0071BA",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: "center",
  },
  editButtonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  detailsContainer: { marginTop: 20, paddingHorizontal: 20, gap: 12 },
  detailRow: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  label: { fontWeight: "600", color: "#555", fontSize: 14, flex: 1 },
  value: { fontWeight: "700", color: "#000", fontSize: 14, flex: 2 },
});
