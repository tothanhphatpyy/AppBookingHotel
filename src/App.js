import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { AuthProvider } from './Context/AuthContext';
import AppStack from './Navigation/AppStack';


const App = () => {
  return (
    <AuthProvider>
      <AppStack />
    </AuthProvider>  
  )
}

export default App

const styles = StyleSheet.create({})