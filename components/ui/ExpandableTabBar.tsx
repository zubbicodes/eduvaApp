import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

interface TabItem {
  title: string;
  icon: keyof typeof Ionicons.glyphs;
  route: string;
}

interface ExpandableTabBarProps {
  tabs: TabItem[];
}

export function ExpandableTabBar({ tabs }: ExpandableTabBarProps) {
  const [selectedTab, setSelectedTab] = useState<number | null>(null);
  const animatedValues = useRef(tabs.map(() => new Animated.Value(0))).current;

  const handlePress = (index: number, route: string) => {
    setSelectedTab(selectedTab === index ? null : index);
    
    // Animate all tabs
    tabs.forEach((_, i) => {
      Animated.spring(animatedValues[i], {
        toValue: i === index ? 1 : 0,
        useNativeDriver: false,
        tension: 50,
        friction: 7,
      }).start();
    });

    // Navigate to the route
    router.push(route);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {tabs.map((tab, index) => {
          const width = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [50, 130], // Adjust these values for desired width
          });

          const textOpacity = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          });

          return (
            <Animated.View key={tab.title} style={[styles.tab, { width }]}>
              <TouchableOpacity
                style={styles.tabButton}
                onPress={() => handlePress(index, tab.route)}
                activeOpacity={0.7}
              >
                <View style={styles.tabContent}>
                  <Ionicons
                    name={tab.icon}
                    size={24}
                    color={selectedTab === index ? '#6366f1' : '#6b7280'}
                  />
                  <Animated.Text
                    style={[
                      styles.tabText,
                      {
                        opacity: textOpacity,
                        color: selectedTab === index ? '#6366f1' : '#6b7280',
                      },
                    ]}
                    numberOfLines={1}
                  >
                    {tab.title}
                  </Animated.Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 30,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    justifyContent: 'space-around',
  },
  tab: {
    overflow: 'hidden',
  },
  tabButton: {
    borderRadius: 20,
    padding: 8,
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
}); 