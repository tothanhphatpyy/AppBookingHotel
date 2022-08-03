import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const Account_Tab = ({navigation}) => {

  const {logout} = useContext(AuthContext);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center',flex: 1}}>
      <TouchableOpacity style={{backgroundColor: 'pink'}}
                        onPress={ () => {logout()} }>
        <Text style={{fontSize: 15, color: 'black', padding: 10}}>Đăng xuất</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Account_Tab

const styles = StyleSheet.create({})