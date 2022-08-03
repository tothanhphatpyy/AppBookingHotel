import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Message_Tab = ({navigation, route}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center',flex: 1, color: 'black'}}>
      <Text>Hiện chưa có tin nhắn nào trong hộp thư của bạn</Text>
    </View>
  )
}

export default Message_Tab

const styles = StyleSheet.create({})