import { StyleSheet, View } from 'react-native';

export const Divider = () => {
  return <View style={styles.divider}></View>;
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 2,
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});
