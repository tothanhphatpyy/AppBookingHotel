import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from './views/Login'
import RegistrationPhone from './views/RegistrationPhone'
import RegistrationOTPPhone from './views/RegistrationOTPPhone';
import RegistrationInfoUser from './views/RegistrationInfoUser';
import Tabs from './views/Tabs';
import InfoRoom from './views/ListRoom/InfoRoom';
import CheckIn from './views/ListRoom/CheckIn';
import ListRoom from './views/ListRoom/ListRoom';
import DetailRoomOder from './views/ListRoom/DetailRoomOder'
import DetailVoucher from './views/Other/DetailVoucher';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Đăng nhập'>
        <Stack.Screen name= 'Đăng nhập' component={Login} />
        <Stack.Screen name='Đăng kí SĐT' component={RegistrationPhone} />
        <Stack.Screen name= 'Đăng kí SĐT OTP' component={RegistrationOTPPhone}/> 
        <Stack.Screen name= 'Đăng kí thông tin User' component={RegistrationInfoUser}/>
        <Stack.Screen name= 'Màn hình chính' screenOptions={{headerLeft: null}} component={Tabs}  />
        <Stack.Screen name= 'Thông tin phòng' component={InfoRoom}  />
        <Stack.Screen name= 'Đặt phòng' component={CheckIn}  />
        <Stack.Screen name= 'Danh sách phòng' component={ListRoom}  />
        <Stack.Screen name= 'Phòng đã đặt' component={DetailRoomOder}  />
        <Stack.Screen name= 'Voucher' component={DetailVoucher}  />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})