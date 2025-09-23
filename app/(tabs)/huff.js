import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import LinkButton from '../../components/LinkButton';

export default function Huff() {
  return (
    <View style={styles.container}>
      <Text>huff :() </Text>
      <LinkButton page ="brainrotcore" sText="sig"/>
      <Link href="javascriptpage">ma</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});