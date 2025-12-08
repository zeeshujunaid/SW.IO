import { useEffect, useState, useContext } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "../components/Header";
import Herosection from "../components/Herosection";
import Recentinquiry from "../components/Recentinquiry";
import { InquiryContext } from "../context/Inquirycontext";

export default function Homescreen() {
  const [searchText, setSearchText] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const { loading, fetchInquiries } = useContext(InquiryContext);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await fetchInquiries(); 
    } catch (error) {
      console.log("Refresh error:", error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <View style={styles.container}>
        <View style={styles.fixedHeader}>
          <Header />
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#777" />
            <TextInput
              placeholder="Search by Name,Area,Case Number"
              placeholderTextColor="#777"
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#0071BA"]}
              tintColor="#0071BA"
              title="Refreshing..."
              titleColor="#0071BA"
            />
          }
        >
          <Herosection refreshing={refreshing} />
          <Recentinquiry searchText={searchText} />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  fixedHeader: {
    zIndex: 1,
    backgroundColor: "#fff",
    paddingBottom: 5,
    marginTop: 15,
  },
  searchContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.12)",
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  searchInput: { fontSize: 16, flex: 1, marginLeft: 10, color: "#000" },
  scrollContent: { paddingHorizontal: 10, paddingTop: 10, paddingBottom: 90 },
});
