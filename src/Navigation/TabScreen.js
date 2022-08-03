import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home_Tab from '../Screens/Tabs/Home_Tab'
import Like_Tab from '../Screens/Tabs/Like_Tab';
import Message_Tab from '../Screens/Tabs/Message_Tab';
import Order_Tab from '../Screens/Tabs/Order_Tab';
import Account_Tab from '../Screens/Tabs/Account_Tab';


const Tabs = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tabs.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'orange',
        shifting: false,
        tabBarStyle: {
          backgroundColor: '#FFFAFA',
          borderTopWidth: 1.5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 'bold',
          fontFamily: 'Roboto',
        },
    }}>
      <Tabs.Screen name='Trang chủ' component={Home_Tab}  
        options={{
          tabBarIcon: () => (
              <Image 
              source={{uri: 'https://img.icons8.com/material/344/home--v5.png'}}
              style={{ tintColor:'gray', marginTop: 5, resizeMode:'contain', width: 25, height: 25}}
              />)
        }}/>
      <Tabs.Screen name='Yêu thích' component={Like_Tab} 
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: { 
            textAlign:"center",
            fontSize: 20,
            fontFamily: 'Roboto',
            fontWeight: 'bold'
          },
          headerStyle: {
            height: 50,
            backgroundColor: '#FFFAFA',
          },
          tabBarIcon: () => (
              <Image 
              source={{uri: 'https://img.icons8.com/material/344/like--v1.png'}}
              style={{ tintColor:'gray', marginTop: 5, resizeMode:'contain', width: 25, height: 25}}
              />)
        }}/>
        <Tabs.Screen name='Đặt chỗ của tôi' component={Order_Tab} initialParams={{infoRoomOder: null,
                                                                                 dateOder : null,
                                                                                 dateReturnOder : null}}
          options={{
            tabBarIcon: () => (
                <Image 
                source={{uri: 'https://img.icons8.com/material-rounded/344/briefcase.png'}}
                style={{ tintColor:'gray', marginTop: 5, resizeMode:'contain', width: 25, height: 25}}
                />)
        }}/>
        <Tabs.Screen name='Tin nhắn' component={Message_Tab} 
         options={{
          tabBarIcon: () => (
              <Image 
              source={{uri: 'https://img.icons8.com/material/344/sms--v1.png'}}
              style={{ tintColor:'gray', marginTop: 5, resizeMode:'contain', width: 25, height: 25}}
              />)
          }}
        />
        <Tabs.Screen name='Tài khoản' component={Account_Tab} 
         options={{
          tabBarIcon: () => (
              <Image 
              source={{uri: 'https://img.icons8.com/material/344/happy--v1.png'}}
              style={{ tintColor:'gray', marginTop: 5, resizeMode:'contain', width: 25, height: 25}}
              />)
          }}
        />
    </Tabs.Navigator>
  )
}

export default TabScreen

const styles = StyleSheet.create({})