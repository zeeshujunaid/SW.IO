import { View, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Searchbar({ value, onChange }) {
  return (
    <View
      style={{
        paddingTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 25,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          borderColor: "rgba(0, 0, 0, 0.12)",
          borderWidth: 1,
          paddingHorizontal: 12,
          borderRadius: 10,
        }}
      >
        <Ionicons name="search" size={20} color="#777" />
        <TextInput
          placeholder="Search..."
          style={{
            flex: 1,
            fontSize: 16,
            marginLeft: 10,
          }}
          placeholderTextColor="#777"
          value={value} 
          onChangeText={onChange}
        />
      </View>
    </View>
  );
}
