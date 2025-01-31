import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const theme = {
  colors: {
    primary: '#007AFF', // iOS blue
    secondary: '#5856D6',
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#000000',
    subtext: '#8E8E93',
    border: '#C6C6C8',
    separator: '#C6C6C8',
    highlight: '#007AFF20',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 999,
  },
  typography: {
    largeTitle: {
      fontSize: 34,
      lineHeight: 41,
      fontWeight: '700',
    },
    title1: {
      fontSize: 28,
      lineHeight: 34,
      fontWeight: '600',
    },
    title2: {
      fontSize: 22,
      lineHeight: 28,
      fontWeight: '600',
    },
    body: {
      fontSize: 17,
      lineHeight: 22,
      fontWeight: '400',
    },
    caption: {
      fontSize: 13,
      lineHeight: 18,
      fontWeight: '400',
    },
  },
  animation: {
    spring: {
      damping: 500,
      mass: 3,
      stiffness: 1000,
      overshootClamping: true,
    },
    timing: {
      duration: 250,
    },
  },
}; 