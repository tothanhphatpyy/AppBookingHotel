import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


const LoginEmail = () => {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    configGoogleSignin();
  }, [])

  const configGoogleSignin = () => {
    GoogleSignin.configure({
      webClientId: '1080668147114-1vjrh88fntfu8hmqh3v40oalhr91n3sj.apps.googleusercontent.com',
    });
  }
  const onGoogleButtonPress = async() => {

      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const result = await GoogleSignin.signIn();
      console.log(result);
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(result.idToken);
  
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);

  }
  return (
    <View style={{alignItems: 'center', marginTop: 30}}>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink', padding: 15}}
        onPress={() => onGoogleButtonPress()}>
        <Text style={{color: 'black'}}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink', padding: 15, marginTop: 30}}
        onPress= {() => GoogleSignin.signOut()}>
        <Text style={{color: 'black'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginEmail

const styles = StyleSheet.create({})