import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";
export default function Index() {
  const router = useRouter();
  const [cnic, setCnic] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handellogin = () => {
    if (!cnic || cnic.length !== 13 || !/^[0-9]+$/.test(cnic)) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter a valid 13-digit CNIC number",
      });
      setCnic("");
      setError("cnic");
      return;
    }
    if (!phone || phone.length !== 11 || !/^[0-9]+$/.test(phone)) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter a valid 11-digit phone number",
      });
      setPhone("");
      setError("phone");
      return;
    }

    router.replace("/auth/Registrationform");
    setCnic("");
    setPhone("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Image
            source={require("../assets/images/saylanilogo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.header}>
            <Text style={styles.title}>Login to your Account</Text>
            <Text style={styles.subtitle}>
              Log in to continue your application and stay updated.
            </Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>CNIC Number</Text>

            <View style={styles.inputContainer}>
              <TextInput
                value={cnic}
                onChangeText={(text) => setCnic(text)}
                placeholder="422101-1234567-1"
                placeholderTextColor="#909090"
                style={styles.input}
                keyboardType="number-pad"
              />
            </View>

            <Text style={styles.label}>Phone Number</Text>

            <View style={styles.inputContainer}>
              <TextInput
                value={phone}
                onChangeText={(text) => setPhone(text)}
                placeholder="0300-1234567"
                placeholderTextColor="#909090"
                style={styles.input}
                keyboardType="number-pad"
              />
            </View>

            {error === "cnic" && (
              <View
                style={{
                  height: 50,
                  width: "100%",
                  borderRadius: 10,
                  backgroundColor: "#FEF2F2",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                <Text style={{ color: "#EF4444", paddingLeft: 10 }}>
                  Please enter a valid 13-digit CNIC number
                </Text>
              </View>
            )}

            {error === "phone" && (
              <View
                style={{
                  height: 50,
                  width: "100%",
                  borderRadius: 10,
                  backgroundColor: "#FEF2F2",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                <Text style={{ color: "#EF4444", paddingLeft: 10 }}>
                  Please enter a valid 11-digit phone number
                </Text>
              </View>
            )}

            <TouchableOpacity onPress={handellogin}>
              <View style={styles.button}>
                <Text
                  style={{ color: "#fff", fontWeight: "700", fontSize: 18 }}
                >
                  Login
                </Text>
              </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.bottomText}>
                Don't have an account?{" "}
                <Text
                  style={styles.signupText}
                  onPress={() => router.push("/(tabs)/Homescreen")}
                >
                  Signup
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 55,
    backgroundColor: "#ffffffff",
  },
  logo: {
    width: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 35,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0071BA",
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
    marginTop: 6,
    textAlign: "center",
    width: "90%",
  },
  form: {
    width: "100%",
  },
  label: {
    fontSize: 15,
    marginBottom: 6,
    fontWeight: "600",
    color: "#0071BA",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#00000034",
    borderRadius: 10,
    marginBottom: 18,
    backgroundColor: "#ffffffad",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#89C441",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "#000",
    fontSize: 15,
    marginLeft: 10,
  },
  bottomText: {
    textAlign: "center",
    marginTop: 20,
    color: "#000000b3",
  },
  signupText: {
    color: "#0071BA",
    fontWeight: "600",
  },
});
