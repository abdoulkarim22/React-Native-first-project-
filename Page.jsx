import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function Page() {

    const clicksurle = () => {
     alert("oui")
    }
  return (

    <View>
      <Text style = {styles.textPage}>Page</Text>
        <TouchableOpacity style = {styles.button} onPress={clicksurle} >
            <Text style={styles.text}>Click Me </Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor:"#008000",
        color: "white",
        marginVertical:20,
        padding:20,
        borderRadius:10,
    },
    text:{
        color:"#f0ffff",
    },
    textPage: {
        textAlign:"center"
    }
})
