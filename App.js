import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Page from './Page';
import Content from './components/Content';

export default function App() {
  return (
    <View style={styles.container}>
          <Content/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Text style={styles.textName}>
        Abdoul Karim  mobile  developer junior specialized in React Native and Firebase 
      </Text>
      <Page/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textName:{
    color:"red",
    textAlign:"center",
    fontWeight: "bold",
    fontSize:20,
    marginVertical:30,
  }
});
