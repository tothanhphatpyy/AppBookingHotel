import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/SignIn_SignUp/Login';
import RegistrationPhone from '../Screens/SignIn_SignUp/RegistrationPhone'
import RegistrationOTPPhone from '../Screens/SignIn_SignUp/RegistrationOTPPhone';
import RegistrationInfoUser from '../Screens/SignIn_SignUp/RegistrationInfoUser';

const RootStack = createNativeStackNavigator();


const AuthStack = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name= 'Đăng nhập' component={Login} />
      <RootStack.Screen name='Đăng kí SĐT' component={RegistrationPhone} />
      <RootStack.Screen name= 'Đăng kí SĐT OTP' component={RegistrationOTPPhone}/> 
      <RootStack.Screen name= 'Đăng kí thông tin User' component={RegistrationInfoUser}/>
    </RootStack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})