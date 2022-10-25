import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


const LoginEmail = () => {
  useEffect(() => {
    console.log('oke')
    GoogleSignin.configure({
      webClientId: '1080668147114-1vjrh88fntfu8hmqh3v40oalhr91n3sj.apps.googleusercontent.com',
    });
  },[])

  const onGoogleButtonPress = async() => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  return (
    <View style={{alignItems: 'center', marginTop: 30}}>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink', padding: 15}}
        onPress={() => onGoogleButtonPress()
          .then(res => console.log('Signed in with Google!', r))
          .catch( error => console.log(error))
        }>
        <Text style={{color: 'black'}}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink', padding: 15, marginTop: 30}}>
        <Text style={{color: 'black'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginEmail

const styles = StyleSheet.create({})