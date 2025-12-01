import { Stack } from 'expo-router';
import Toast from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
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