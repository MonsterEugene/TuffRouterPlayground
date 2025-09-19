import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Brainrotcore() {
  return (
    <View style={styles.container}>
      <Text>brainrot</Text>
      <Link href="/">sig</Link>
      <Link href="javascriptpage">ma</Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b61b70ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});