import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Order_Tab = ({ navigation, route}) => {
  return (
    <View style={{}}>
    <Text style={{color: 'black'}}>{route.params.nameRoomOder}</Text>
  </View>
  )
}

export default Order_Tab

const styles = StyleSheet.create({})