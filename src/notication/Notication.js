import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import { LoginButton, AccessToken, Profile, LoginManager } from 'react-native-fbsdk-next';

async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

async function getToken(){
    const deviceToken = await messaging().getToken();
    console.log('Device token:', deviceToken);
} 

const Notication = () => {

  const [userData, setUserData] = useState('');
  const facebookLogin = async() => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  useEffect(() => {
    const notificationHandler = async() => {
        await requestUserPermission();
        await getToken();

        // Lam gi sau khi bam vao thong bao
        messaging().onNotificationOpenedApp(remoteMessage => {
            Alert.alert('Open notification');
            console.log(remoteMessage);
        })

        //Gui thong bao
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log("FOREGROUND", remoteMessage);
            Alert.alert('A new FCM message arrived!');
          });
      
        return unsubscribe;
    }
    notificationHandler();
  }, []);

  return (
    <View>
      <Text style={{color: 'black'}}>Notication</Text>
      <View style={{marginTop: 30, alignItems: 'center'}}>
        <TouchableOpacity 
          style={{backgroundColor: 'pink', padding: 20}}
          onPress={() => 
            facebookLogin().then(res => {
              console.log(res);
              setUserData(res.data);
            }).catch(err => console.error(err))
          }>
          <Text style={{color: 'black'}}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Notication

const styles = StyleSheet.create({})