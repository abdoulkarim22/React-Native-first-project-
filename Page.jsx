import { View, Text, Button, StyleSheet } from 'react-native';

export default function Page() {

    const clicksurle = () => {
       alert("Codeloccol voleur")
    }
  return (

    <View>
      <Text>Page</Text>
      <Button onPress={clicksurle} color="#841584" title='Click Me' style= {styles.button}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor:"#008000"
    }
})
