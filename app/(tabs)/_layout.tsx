import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { ExpandableTabBar } from '@/components/ui/ExpandableTabBar';

const tabs = [
  {
    title: 'Home',
    icon: 'home',
    route: '/',
  },
  {
    title: 'Scholarships',
    icon: 'school',
    route: '/scholarships',
  },
  {
    title: 'Study',
    icon: 'book',
    route: '/study',
  },
  {
    title: 'Forum',
    icon: 'chatbubbles',
    route: '/forum',
  },
];

export default function TabsLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' }, // Hide default tab bar
        }}>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="scholarships" />
        <Tabs.Screen name="study" />
        <Tabs.Screen name="profile" />
      </Tabs>
      <ExpandableTabBar tabs={tabs} />
    </View>
  );
}
