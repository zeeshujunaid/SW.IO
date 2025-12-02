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
import  Header from "../components/Backheader";
export default function Editprofile() {
  return (
    <>
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
            <TextInput style={styles.input} placeholder="Enter Name" />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>CNIC</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter CNIC"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Country</Text>
            <TextInput style={styles.input} placeholder="Enter Country" />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>City</Text>
            <TextInput style={styles.input} placeholder="Enter City" />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Enter Address"
              multiline
            />
          </View>

          {/* Save Button */}
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileWrapper: {
    alignSelf: "center",
    marginTop: 20,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "flex-end", // icon pic ke neeche align ho
  },
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
    marginLeft: -50, // icon pic ke edge ke upar thoda overlap kare
    marginBottom: 5, // neeche se thoda gap
  },
  editButton: {
    marginTop: 15,
    backgroundColor: "#0071BA",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignSelf: "center",
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  formContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    gap: 15,
  },
  inputWrapper: {
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
  },
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
  saveButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
