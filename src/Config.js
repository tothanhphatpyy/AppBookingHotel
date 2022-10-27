import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
//export const BASE_URL = 'http://192.168.1.9:3000';
export const BASE_URL = 'https://booking-hotel-phat.herokuapp.com';

const keystore = 'pYItfzBdqdw/5rBuEFgwvlfnHIk=';
const URI= 'https://pushnotication-8aacb.firebaseapp.com/__/auth/handler';

export const configGoogleSignin = () => {
    GoogleSignin.configure({
      webClientId: '1080668147114-1vjrh88fntfu8hmqh3v40oalhr91n3sj.apps.googleusercontent.com',
    });
}
export const onGoogleButtonPress = async() => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    await GoogleSignin.signOut();
    // Get the users ID token
    const res = await GoogleSignin.signIn();
    //console.log(res);
    AsyncStorage.setItem('userInfo', JSON.stringify(res.user));
    AsyncStorage.setItem('userToken', res.idToken);
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(res.idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}
