import { Colors } from '@/constants/Colors';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 3,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
