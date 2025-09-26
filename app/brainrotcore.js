import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Line, Svg } from "react-native-svg";

export default function Brainrotcore() {
  return (
    <View style={styles.container}>
      <Text>brainrot</Text>
      <Link href="/">sig</Link>
      <Link href="javascriptpage">ma</Link>

      <Svg height={100} width={100}>
        <Line y1={0} x1={0} x2={100} y2={100} stroke={"red"} strokeWidth={2}/>
        <Line y1={100} y2={0} x1={0} x2={100} stroke={"black"} strokeWidth={2}/>
        <Line y1={50} y2={50} x1={0} x2={50} stroke={"grey"} strokeWidth={2} strokeDasharray={[0,1,2,4]} strokeDashoffset={3}/>
      </Svg>
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