import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LinkButton({page, sText}) {
  return (
    <View >
      
      <Link style={styles.linky} href={page}>{sText}</Link>

      
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
  linky:{
    color: "blue",
    textDecorationLine: "underline", //wow its underlined
  }
});