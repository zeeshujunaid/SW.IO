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
import AsyncStorage from "@react-native-async-storage/async-storage"; // <- AsyncStorage import
import { baseurl } from "../services/config";

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handellogin = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter a valid email address",
      });
      setEmail("");
      setError("email");
      return;
    }

    if (!password || password.length < 6) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Password must be at least 6 characters",
      });
      setPassword("");
      setError("password");
      return;
    }

    // API call
    try {
      const response = await fetch(`${baseurl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);
      await AsyncStorage.setItem("userdata", JSON.stringify(data));
      if (!response.ok) {
        Toast.show({
          type: "error",
          text1: "Login Failed",
          text2: data.message || "Invalid credentials",
        });
        return;
      }

      // Login ke baad
      const token = data?.data?.accessToken;
      const id = data?.data?.user?._id; // <- correct path

      if (token && id) {
        await AsyncStorage.setItem("token", token);
        await AsyncStorage.setItem("id", id);
        console.log("Token and id saved successfully", token, id);
      } else {
        console.log("Token not found in response");
      }
      Toast.show({
        type: "success",
        text1: "Login Success",
      });

      router.replace("/Loader");
    } catch (err) {
      console.log("Login error:", err);
      Toast.show({
        type: "error",
        text1: "Login Error",
        text2: "Something went wrong. Try again.",
      });
    }

    // setEmail("");
    // setPassword("");
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
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="example@gmail.com"
                placeholderTextColor="#909090"
                style={styles.input}
                keyboardType="email-address"
              />
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="********"
                placeholderTextColor="#909090"
                style={styles.input}
                secureTextEntry
              />
            </View>

            {error === "email" && (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>
                  Please enter a valid email address
                </Text>
              </View>
            )}
            {error === "password" && (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>
                  Password must be at least 6 characters
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
    backgroundColor: "#fff",
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
  input: {
    flex: 1,
    color: "#000",
    fontSize: 15,
    marginLeft: 10,
  },
  errorBox: {
    height: 50,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#FEF2F2",
    justifyContent: "center",
    marginBottom: 10,
  },
  errorText: {
    color: "#EF4444",
    paddingLeft: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#89C441",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
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
