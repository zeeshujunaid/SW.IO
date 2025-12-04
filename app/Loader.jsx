import { Image, View, StyleSheet, Animated, Easing } from "react-native";
import { useEffect, useRef, useContext, useState } from "react";
import { useRouter } from "expo-router";
import { baseurl } from "../services/config";
import { InquiryContext } from "./context/Inquirycontext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Logoanimation() {
  const router = useRouter();
  const { setInquiries, setLoading, setError } = useContext(InquiryContext);

  const slideAnim = useRef(new Animated.Value(200)).current;
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const token = await AsyncStorage.getItem("token");
        if (!token) throw new Error("Token not found");

        const response = await fetch(`${baseurl}/api/inquiry?limit=1000`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch inquiries");

        const data = await response.json();
        setInquiries(data?.data || []);
        setLoading(false);
        setDataLoaded(true);
      } catch (err) {
        console.log("Error fetching inquiries:", err);
        setError(err);
        setLoading(false);
      }
    };

    Animated.timing(slideAnim, {
      toValue: -39,
      duration: 800,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();

    fetchData();
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      router.replace("/(tabs)/Homescreen");
    }
  }, [dataLoaded]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/saylanigreen.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Animated.Image
        source={require("../assets/images/saylaniblue.png")}
        style={[styles.logoBlue, { marginLeft: slideAnim }]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  logo: {
    width: 180,
    height: 180,
  },
  logoBlue: {
    width: 180,
    height: 180,
  },
});
