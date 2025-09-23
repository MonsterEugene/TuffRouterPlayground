import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import LinkButton from '../../components/LinkButton';
// ../ parent direct  vs ./ current direct

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>profile page</Text>
      <LinkButton page ="brainrotcore" sText="sig"/>
      <Link href="javascriptpage">ma</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff1c73ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});