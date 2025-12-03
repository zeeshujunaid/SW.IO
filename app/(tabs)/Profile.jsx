import { router } from "expo-router";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Profile() {
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
        source={require("../../assets/images/saillnew.png")}
        style={styles.profileImage}
        resizeMode="contain"
      />

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => router.push("/common/Editprofile")}
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Profile Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>Syed Ateeb Ul Hassan</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>syedateebulhassan@123gmail.com</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>CNIC:</Text>
          <Text style={styles.value}>42101-6521546-3</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Country:</Text>
          <Text style={styles.value}>Pakistan</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.value}>Karachi</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>FA 63/8 Federal Capital Area Karachi</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    width: "100%",
    height: 200,
  },
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
  editButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  detailsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    gap: 12,
  },
  detailRow: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  label: {
    fontWeight: "600",
    color: "#555",
    fontSize: 14,
    flex: 1,
  },
  value: {
    fontWeight: "700",
    color: "#000",
    fontSize: 14,
    flex: 2,
  },
});
