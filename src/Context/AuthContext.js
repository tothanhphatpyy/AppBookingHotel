import { StyleSheet, Text, View } from 'react-native'
import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { BASE_URL } from '../config';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);


/*   useEffect(() =>{
    AsyncStorage.clear();
  },[]); */


  useEffect(() => {
    isLoggedIn();
  },[]);

  const login = (userName, passWord) => {
    setIsLoading(true);
    axios.post(`http://192.168.1.3:3000/login` ,{
      username: userName,
      password: passWord,
    })
    .then(res =>{
      setUserInfo(res.data);
      setUserToken(res.data.accessToken);
      AsyncStorage.setItem('userInfo', JSON.stringify(res.data));
      AsyncStorage.setItem('userToken', res.data.accessToken);

    })
    .catch(e =>{
      console.log(`Login error: ${e.message}`);
    })
    setIsLoading(false);
  }

  const logout =() => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  }

  const isLoggedIn = async() => {
    try {
      setIsLoading(true);
      let user = JSON.parse(await AsyncStorage.getItem('userInfo'));
      let token = await AsyncStorage.getItem('userToken');

      if( user ){
        delete user.accessToken;
        setUserInfo(user);
        setUserToken(token);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(`isLoggedIn: ${e.message}`);
    }
  }
  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo}}>
      {children}
    </AuthContext.Provider>
  )
}

const styles = StyleSheet.create({})