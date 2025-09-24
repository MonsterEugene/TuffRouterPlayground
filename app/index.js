import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import LinkButton from '../components/LinkButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <LinkButton page ="brainrotcore" sText="sig"/>
      <Link href="javascriptpage">ma</Link>
      <LinkButton page = "huff" sText="f u n"></LinkButton>
      {/* somehow the () in tabs makes it know how to get directly to huff.js*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});