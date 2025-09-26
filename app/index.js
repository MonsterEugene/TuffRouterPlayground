import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { Link } from 'expo-router';
import LinkButton from '../components/LinkButton';
/* so sad ts doesnt work :(
import {Expression, GraphingCalculator, useHelperExpression} from "desmos-react";
*/
/*
function Demo() {
  return (
    <GraphingCalculator
      attributes={{className: "calculator"}}
      fontSize={18} keypad projectorMode
    >
      <Expression id="slider" latex="a=3" />
      <Point />
    </GraphingCalculator>
  );
}

function Point() {
  const a = useHelperExpression({latex: "a"});

  let label;
  if (a > 0)
    label = "positive x-axis"
  else if (a < 0)
    label = "negative x-axis"
  else
    label = "origin";

  return (
    <Expression id="point" latex="(a,0)" label={label} showLabel />
  );
}
*/
import { LineChart } from "react-native-chart-kit";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <LinkButton page="brainrotcore" sText="sig" />
      <Link href="javascriptpage">ma</Link>
      <LinkButton page="huff" sText="f u n"></LinkButton>
      {/* somehow the () in tabs makes it know how to get directly to huff.js*/}
      {/*<Demo></Demo>*/}

      <LineChart data={{
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          }
        ]
      }}
      fromZero 
      width={Dimensions.get("window").width -700} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}
/*
import {Expression, GraphingCalculator, useHelperExpression} from "desmos-react";

function Demo() {
  return (
    <GraphingCalculator
      attributes={{className: "calculator"}}
      fontSize={18} keypad projectorMode
    >
      <Expression id="slider" latex="a=3" />
      <Point />
    </GraphingCalculator>
  );
}

/* useHelperExpression() can only be used inside <GraphingCalculator/>,
which is why this couldn't go in <Demo/> */
/*
function Point() {
  const a = useHelperExpression({latex: "a"});

  let label;
  if (a > 0)
    label = "positive x-axis"
  else if (a < 0)
    label = "negative x-axis"
  else
    label = "origin";

  return (
    <Expression id="point" latex="(a,0)" label={label} showLabel />
  );
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});