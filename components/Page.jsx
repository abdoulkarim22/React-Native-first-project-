import { View, Text, Button, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function Page() {

    const clicksurle = () => {
     Linking.openURL('tel:80077079')
    }
  return (

    <View>
        <TouchableOpacity style = {styles.button} onPress={clicksurle}  >
            <Text style={styles.text}>Contact Me </Text>
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
})
