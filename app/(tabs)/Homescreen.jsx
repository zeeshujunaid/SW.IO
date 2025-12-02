import { ScrollView, View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Searchbar from "../components/Search";
import Herosection from "../components/Herosection";
import Recentinquiry from "../components/Recentinquiry";

export default function Homescreen() {
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={{ paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.fixedHeader}>
          <Header />
          <Searchbar />
        </View>

        {/* Scrollable content */}
        <Herosection />
        <Recentinquiry />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  fixedHeader: { zIndex: 1 }, // fixed on top
  scrollContainer: { flex: 1 },
});
