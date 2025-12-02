import { Stack } from 'expo-router';
import Toast from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
export default function RootLayout() {
   useEffect(() => {
     NavigationBar.setVisibilityAsync("hidden"); 
   }, []);
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{ headerShown: false }}
          initialRouteName="index"
        >
          <Stack.Screen name='/index' options={{ headerShown: false }} />
          <Stack.Screen name='/(tabs)/Homescreen' options={{ headerShown: false }} />
        </Stack>
        <Toast />
      </GestureHandlerRootView>
  );
}