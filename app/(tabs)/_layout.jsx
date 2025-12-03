import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import AnimatedTabIcon from "../components/AnimatedTab";

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
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="Homescreen"
        options={{
          tabBarIcon: ({ focused }) => (
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
                marginBottom: focused ? -12 : 0,
              }}
            >
              <AnimatedTabIcon focused={focused}>
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
              </AnimatedTabIcon>
            </View>
          ),
        }}
      />

      {/* INQUIRY */}
      <Tabs.Screen
        name="Inquirylist"
        options={{
          tabBarIcon: ({ focused }) => (
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
                marginBottom: focused ? -12 : 0,
              }}
            >
              <AnimatedTabIcon focused={focused}>
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
                  <FontAwesome5 name="pen" size={24} color="#fff" />
                </View>
              </AnimatedTabIcon>
            </View>
          ),
        }}
      />

      {/* ACTIVITY */}
      <Tabs.Screen
        name="Activity"
        options={{
          tabBarIcon: ({ focused }) => (
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
                marginBottom: focused ? -12 : 0,
              }}
            >
              <AnimatedTabIcon focused={focused}>
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
                  <Ionicons name="time-outline" size={24} color="#fff" />
                </View>
              </AnimatedTabIcon>
            </View>
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused, color }) => (
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
                marginBottom: focused ? -12 : 0,
              }}
            >
              <AnimatedTabIcon focused={focused}>
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
                  <Feather name="user" size={24} color="#fff" />
                </View>
              </AnimatedTabIcon>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
