import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InfoRoom from '../Screens/BookingRoom/InfoRoom';
import CheckIn from '../Screens/BookingRoom/CheckIn';
import ListRoom from '../Screens/BookingRoom/ListRoomOfLocation';
import DetailRoomOder from '../Screens/BookingRoom/DetailRoomOder';
import DetailVoucher from '../Screens/Vouchers/DetailVoucher';
import FindInput from '../Screens/Other/FindInput';

const ScreenStack = createNativeStackNavigator();

const AppScreen = () => {
  return (
    <ScreenStack.Navigator screenOptions={{headerShown: false}}>
          <ScreenStack.Screen name= 'Thông tin phòng' component={InfoRoom} initialParams={{hideBottom : false}}/>
          <ScreenStack.Screen name= 'Đặt phòng' component={CheckIn}  />
          <ScreenStack.Screen name= 'Danh sách phòng' component={ListRoom}  />
          <ScreenStack.Screen name= 'Phòng đã đặt' component={DetailRoomOder}  />
          <ScreenStack.Screen name= 'Voucher' component={DetailVoucher}  />
          <ScreenStack.Screen name= 'FindInput' component={FindInput}  />

    </ScreenStack.Navigator>
  )
}

export default AppScreen

const styles = StyleSheet.create({})