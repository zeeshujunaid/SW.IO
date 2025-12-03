import "react-native-reanimated";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

// Import context provider
import InquiryProvider from "./context/Inquirycontext";

export default function RootLayout() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Wrap your app with InquiryProvider */}
      <InquiryProvider>
        <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
          <Stack.Screen name="/index" options={{ headerShown: false }} />
          <Stack.Screen
            name="/(tabs)/Homescreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="/(tabs)/Activity"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="/(tabs)/Inquirylist"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="/(tabs)/Profile"
            options={{ headerShown: false }}
          />
        </Stack>
        <Toast />
      </InquiryProvider>
    </GestureHandlerRootView>
  );
}
