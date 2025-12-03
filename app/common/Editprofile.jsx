import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Foundation from "@expo/vector-icons/Foundation";
import Header from "../components/Backheader";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Editprofile() {
  const router = useRouter();
  const params = useLocalSearchParams(); // correct hook
  const [userData, setUserData] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (params.user) {
      const parsed = JSON.parse(params.user);
      setUserData(parsed);
      setName(parsed.userName);
      setEmail(parsed.email);
      setCnic(parsed.cnicNo);
      setAddress(parsed.address);
    }
  }, [params.user]);

  const handleSave = async () => {
    try {
      const updatedUser = {
        ...userData,
        userName: name,
        email,
        cnicNo: cnic,
        address,
      };

      const storedData = await AsyncStorage.getItem("userdata");
      const parsed = JSON.parse(storedData);
      parsed.data.user = updatedUser;

      await AsyncStorage.setItem("userdata", JSON.stringify(parsed));

      router.back(); // back to Profile
    } catch (err) {
      console.log("Error updating user data:", err);
    }
  };

  if (!userData) return null; // wait for data

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <Header />

      {/* Profile Image */}
      <View style={styles.profileWrapper}>
        <View style={styles.profileRow}>
          <Image
            source={require("../../assets/images/saillnew.png")}
            style={styles.profileImage}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.cameraIconWrapper}>
            <Foundation name="camera" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>CNIC</Text>
          <TextInput
            style={styles.input}
            value={cnic}
            onChangeText={setCnic}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            value={address}
            onChangeText={setAddress}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  profileWrapper: { alignSelf: "center", marginTop: 20 },
  profileRow: { flexDirection: "row", alignItems: "flex-end" },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#0071BA",
  },
  cameraIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#0071BA",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -50,
    marginBottom: 5,
  },
  formContainer: { marginTop: 30, paddingHorizontal: 20, gap: 15 },
  inputWrapper: { gap: 6 },
  label: { fontSize: 14, fontWeight: "600", color: "#555" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    backgroundColor: "#fff",
  },
  saveButton: {
    marginTop: 25,
    backgroundColor: "#0071BA",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },
  saveButtonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
