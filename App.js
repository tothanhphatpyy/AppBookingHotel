import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/Login'
import RegistrationPhone from './views/RegistrationPhone'
import RegistrationOTPPhone from './views/RegistrationOTPPhone';
import RegistrationInfoUser from './views/RegistrationInfoUser';
import Tabs from './views/Tabs';
import InfoRoom from './views/ListRoom/InfoRoom';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Thông tin phòng">
        <Stack.Screen name= "Đăng nhập" component={Login} />
        <Stack.Screen name="Đăng kí SĐT" component={RegistrationPhone} />
        <Stack.Screen name= "Đăng kí SĐT OTP" component={RegistrationOTPPhone}/> 
        <Stack.Screen name= "Đăng kí thông tin User" component={RegistrationInfoUser}/>
        <Stack.Screen name= "Màn hình chính" component={Tabs}  />
        <Stack.Screen name= "Thông tin phòng" component={InfoRoom}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})