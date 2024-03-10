import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Page from './components/Page';
import Content from './components/Content';

export default function App() {
  return (
    <View style={styles.container}>
          <Content/>
      <Text style= {styles.textame} > Abdoul Karim Soumana </Text>
      <StatusBar style="auto" />

      <Text style={styles.textDomaine}>
        mobile  developer junior specialized in React Native and Firebase 
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
  textDomaine:{
    textAlign:"center",
    fontWeight: "bold",
    fontSize:20,
    marginVertical:30,
  },
  textame:{
    fontSize:30,
  }

});
