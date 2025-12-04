import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Foundation from "@expo/vector-icons/Foundation";
import Header from "../components/Backheader";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseurl from "../../services/config";

export default function Editprofile() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [userData, setUserData] = useState(null);
  console.log("userdata=>",userData);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Pick image from gallery & upload immediately
  const pickImage = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert("Permission denied!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        const selectedUri = result.assets[0].uri;
        setImage(selectedUri); 

        try {
          setUploading(true);
          const token = await AsyncStorage.getItem("token");
          const userId = userData?._id;

          const formData = new FormData();
          formData.append("file", {
            uri: selectedUri,
            type: "image/jpeg",
            name: "photo.jpg",
          });
          formData.append("userId", userId);

          const response = await fetch(`${baseurl}/api/imag/upload-single`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
            body: formData,
          });

          if (!response.ok) {
            const text = await response.text();
            console.log("Upload failed response:", text);
            throw new Error(`Upload failed with status ${response.status}`);
          }

          const resultData = await response.json();
          console.log("Image uploaded:", resultData);

          // Update UI with backend returned path
          if (resultData?.image?.fileUrl) {
            setImage(resultData.image.fileUrl);
          }
        } catch (uploadError) {
          console.log("Image upload failed:", uploadError);
          alert("Image upload failed!");
        } finally {
          setUploading(false);
        }
      }
    } catch (error) {
      console.log("Image pick error:", error);
    }
  };


  // Load user data from params
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

  // Save updated data
  const handleSave = async () => {
    try {
      const updatedUser = {
        ...userData,
        userName: name,
        email,
        cnicNo: cnic,
        address,
        image: image ? { fileUrl: image } : userData.image, 
      };

      // Save to AsyncStorage
      const storedData = await AsyncStorage.getItem("userdata");
      const parsed = JSON.parse(storedData);
      parsed.data.user = updatedUser;
      await AsyncStorage.setItem("userdata", JSON.stringify(parsed));
      const userId = userData?._id;
      console.log(userId);
      
      const token = await AsyncStorage.getItem("token");
      await fetch(`${baseurl}/api/user/${userId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      router.back(); 
    } catch (err) {
      console.log("Error updating user data:", err);
      alert("Failed to save changes!");
    }
  };


  if (!userData) return null;

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
            source={
              image
                ? { uri: image }
                : userData?.image?.fileUrl
                ? { uri: userData.image.fileUrl }
                : require("../../assets/images/saillnew.png")
            }
            style={styles.profileImage}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={styles.cameraIconWrapper}
            onPress={pickImage}
          >
            {uploading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Foundation name="camera" size={24} color="#fff" />
            )}
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
