import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

// Possibly: cap letters for components, lowercase for full app


export default function Javascriptpage() {
  return (
    <View style={styles.container}>
      <Text>js</Text>
      <Link href="brainrotcore">sig</Link>
      <Link href="/">ma</Link> 
      {/*use slash to go back to root */}
      
      <StatusBar style="auto" />
      
      <View style={styles.container}>
      <VictoryChart width={350} theme={VictoryTheme.clean}>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </View>

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