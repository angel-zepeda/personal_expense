import { Colors, type ColorsType } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';

type Sizes = 'sm' | 'md' | 'lg';

interface Props {
  size?: Sizes;
  color?: ColorsType;
  text: string;
  style?: ViewStyle;
}

export const Styledtext = ({ size = 'md', color, text, style }: Props) => {
  console.log(style);
  return (
    <Text
      style={[
        size === 'sm' && styles.sm,
        size === 'md' && styles.md,
        size === 'lg' && styles.lg,

        {
          color: color ? color : Colors.light.text,
          ...style,
        },
      ]}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  sm: {
    fontSize: 12,
    paddingVertical: 5,
  },
  md: {
    fontSize: 16,
    paddingVertical: 5,
  },
  lg: {
    fontSize: 20,
    paddingVertical: 5,
  },
});
