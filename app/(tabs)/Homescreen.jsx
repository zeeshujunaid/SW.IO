import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Searchbar from "../components/Search";
import Herosection from "../components/Herosection";
import Recentinquiry from "../components/Recentinquiry";

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <View style={styles.fixedHeader}>
        <Header />
        <Searchbar />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Herosection />
        <Recentinquiry />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  fixedHeader: {
    zIndex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 90, 
  },
});
