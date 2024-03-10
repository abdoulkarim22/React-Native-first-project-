import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'


export default class Content extends Component {
  render() {
    return (
      <View>

        <Image
         source = {require('../assets/Profile.jpg')}
         style = {styles.image}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 60,
        width:100,
         height:100,
    }
})