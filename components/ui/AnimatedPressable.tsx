import React from 'react';
import { Pressable, Animated, StyleSheet } from 'react-native';
import { theme } from '../../app/theme/design';

export function AnimatedPressable({ children, style, onPress, ...props }) {
  const animated = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animated, {
      toValue: 0.95,
      ...theme.animation.spring,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animated, {
      toValue: 1,
      ...theme.animation.spring,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      {...props}
    >
      <Animated.View
        style={[
          style,
          {
            transform: [{ scale: animated }],
          },
        ]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
} 