import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/SignIn_SignUp/Login';
import RegistrationPhone from '../Screens/SignIn_SignUp/RegistrationPhone'
import RegistrationOTPPhone from '../Screens/SignIn_SignUp/RegistrationOTPPhone';
import RegistrationInfoUser from '../Screens/SignIn_SignUp/RegistrationInfoUser';
import ConfirmPasswordForgot from '../Screens/SignIn_SignUp/ConfirmPasswordForgot';
import Notication from '../notication/Notication';
import LoginEmail from '../Screens/SignIn_SignUp/LoginEmail';

const RootStack = createNativeStackNavigator();


const AuthStack = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}} initialRouteName='LoginEmail'>
      <RootStack.Screen name= 'Đăng nhập' component={Login} />
      <RootStack.Screen name='Đăng kí SĐT' component={RegistrationPhone} />
      <RootStack.Screen name= 'Đăng kí SĐT OTP' component={RegistrationOTPPhone}/> 
      <RootStack.Screen name= 'Đăng kí thông tin User' component={RegistrationInfoUser}/>
      <RootStack.Screen name= 'Xác nhận mật khẩu' component={ConfirmPasswordForgot}/>
      <RootStack.Screen name= 'Notication' component={Notication}/>
      <RootStack.Screen name= 'LoginEmail' component={LoginEmail}/>
    </RootStack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})