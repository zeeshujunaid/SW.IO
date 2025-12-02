import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 20,
          right: 20,
          height: 80,
          paddingHorizontal: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#rgba(0, 113, 186, 1)",
          // shadowColor: "#000",
          // shadowOffset: { width: 0, height: 5 },
          // shadowOpacity: 0.1,
          // shadowRadius: 10,
          // elevation: 10,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="Homescreen"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 85,
                height: 70,
                borderRadius: 40,
                paddingBottom: 10,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                backgroundColor: focused ? "#fff" : "transparent",
                justifyContent: "center",
                alignItems: "center",
                marginTop: focused ? 0 : 40,
                marginBottom: focused ? -12 : 0, // <-- outer view ko thoda neeche/uppar shift
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 45,
                  backgroundColor: focused ? "#0071BA" : "transparent",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="home-outline"
                  size={28}
                  color="#fff"
                />
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Inquirylist"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 85,
                height: 70,
                borderRadius: 40,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                backgroundColor: focused ? "#fff" : "transparent",
                justifyContent: "center",
                marginTop: focused ? 0 : 40,
                alignItems: "center",
                marginBottom: focused ? -12 : 0, // <-- outer view ko thoda neeche/uppar shift
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 45,
                  backgroundColor: focused
                    ? "#0071BA" // blue inner circle
                    : "transparent",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="pen" size={24} color="#fff" />
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Activity"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 85,
                height: 70,
                borderRadius: 40,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                backgroundColor: focused ? "#fff" : "transparent",
                justifyContent: "center",
                marginTop: focused ? 0 : 40,
                alignItems: "center",
                marginBottom: focused ? -12 : 0, // <-- outer view ko thoda neeche/uppar shift
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 45,
                  backgroundColor: focused
                    ? "#0071BA" // blue inner circle
                    : "transparent",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="time-outline" size={24} color="#fff" />
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 85,
                height: 70,
                borderRadius: 40,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                backgroundColor: focused ? "#fff" : "transparent",
                justifyContent: "center",
                marginTop: focused ? 0 : 40,
                alignItems: "center",
                marginBottom: focused ? -12 : 0, // <-- outer view ko thoda neeche/uppar shift
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 45,
                  backgroundColor: focused
                    ? "#0071BA" // blue inner circle
                    : "transparent",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name="user" size={24} color={color} />
              </View>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
