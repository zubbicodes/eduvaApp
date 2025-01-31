import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { AnimatedPressable } from './AnimatedPressable';
import { theme } from '../../app/theme/design';

export function Button({ title, variant = 'filled', onPress, style }) {
  return (
    <AnimatedPressable
      onPress={onPress}
      style={[
        styles.button,
        variant === 'outlined' && styles.buttonOutlined,
        style,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          variant === 'outlined' && styles.buttonTextOutlined,
        ]}
      >
        {title}
      </Text>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOutlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
  },
  buttonTextOutlined: {
    color: theme.colors.primary,
  },
}); 