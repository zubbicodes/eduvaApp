import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { theme } from './theme/design';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    // Hide the splash screen after the layout is ready
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack 
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerBlurEffect: 'light',
        headerLargeTitle: true,
        headerLargeTitleStyle: theme.typography.largeTitle,
        headerStyle: {
          backgroundColor: 'transparent',
        },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="profile" />
      <Stack.Screen 
        name="internships" 
        options={{
          title: 'Internships',
          presentation: 'card',
        }}
      />
      <Stack.Screen name="govt-schemes" />
    </Stack>
  );
}
