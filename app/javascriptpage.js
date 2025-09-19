import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

// Possibly: cap letters for components, lowercase for full app

export default function Javascriptpage() {
  return (
    <View style={styles.container}>
      <Text>js</Text>
      <Link href="brainrotcore">sig</Link>
      <Link href="/">ma</Link> 
      {/*use slash to go back to root */}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08acc9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});