import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../Context/AuthContext';

import AuthStack from './AuthStack';
import TabScreen from './TabScreen';
import AppScreen from './AppScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {

  const {isLoading , userToken} = useContext(AuthContext);

  if( isLoading ) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={'large'} />
    </View>
  )}

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} /* initialRouteName='RootScreen' */> 
        {userToken == null? 
          <Stack.Screen name= 'AuthStack' component={AuthStack} />
        :
          <Stack.Screen name= 'TabScreen' component={TabScreen} /> 
        }
        <Stack.Screen name= 'AppScreen' component={AppScreen} />         
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack

const styles = StyleSheet.create({})