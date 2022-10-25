import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';

const RegistrationOTPPhone = ({ navigation, route}) => {

  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusCheck, setStatusCheck] = useState(false);
  const sdt = route.params.sdt;
  const screen = route.params.screenNext;
  useEffect(() => {
    console.log(sdt, screen);
    const signInWithPhoneNumber = async(phoneNumber) => {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    }
    signInWithPhoneNumber(`+84 ${sdt}`)
    
  }, [])


  const confirmCode = async() => {
    setLoading(true);
    try {
      const res = await confirm.confirm(code);
      //console.log(res)
      if(screen == 'sign-in')
        navigation.navigate('Đăng kí thông tin User', {sdt: sdt})
      else
        navigation.navigate('Xác nhận mật khẩu', {sdt: sdt})
    } catch (error) {
      console.log('Invalid code.');
      setStatusCheck(code);
    }
    setLoading(false);
  }

  return (
        <View style= {styles.container}>
        <Image
          style={styles.logoImage}
          source={{uri : 'https://i.imgur.com/T6eMqr7.png'}}
       />
    
    
      <View style = {styles.formLogin}>
          <Text style= {styles.textLogin}>Nhập mã OTP</Text>
          
    
          <View style = {styles.LoginInput}>
              <Text style= {styles.textPhone}>Vui lòng nhập mã để xác minh số điện thoại</Text>
    
              <View style= {styles.inputPhone}>
                <TextInput
                  style={styles.inputMyPhone} 
                  placeholderTextColor={'gray'}
                  textAlign ={'center'}
                  placeholder="Mã có 6 số"
                  keyboardType="numeric"
                  onChangeText={text => setCode(text)}
                />   
              </View>
              {statusCheck==code &&code !== ''? 
                <Text style={{color: 'red', marginTop: 10, marginLeft: '32%'}}>Mã OTP không đúng</Text>
              : null}
    
              <TouchableOpacity 
                style={[styles.btnRegis,{backgroundColor: code.length ==6? '#FF4500': 'pink'}]}
                disabled={code.length == 6? false: true }
                onPress ={ () => confirmCode() }>
                <Text style={styles.textRegis}>TIẾP TỤC</Text>
                {loading && (
                  <ActivityIndicator size="large" color="orange" style={{position: 'absolute', right: 10}}/>
                )}
              </TouchableOpacity>
              
          </View>
      </View>
      </View>
      )
}

export default RegistrationOTPPhone

const styles = StyleSheet.create({
    container: {

        flex: 1,
    },
    logoImage: {
        flex: 1.2,
        backgroundColor: 'white',
        resizeMode: "contain",
        width: '100%',
        height: '100%',
    },


    formLogin: {
        marginTop: '-10%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,   
        flex: 2,
        backgroundColor: '#E0FFFF',
    },

    textLogin: {
        fontFamily: 'Roboto',
        marginTop: '5%',
        marginLeft: '10%',
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
    },
    textPhone: {
        fontFamily: 'Roboto',
        marginTop: '4%',
        marginLeft: '10%',
        fontFamily: 'Roboto',
        fontSize: 15,
        color: 'black',
        marginBottom: '3%',
    },

    inputPhone: {
      flexDirection: 'row',
      marginTop: '-3%',
    },

    inputMyPhone: {
      fontSize: 16,
      marginLeft: '35%',
      color: 'black',
      borderColor : 'gray',
      borderBottomWidth: 1,
    },

    btnRegis: {
      marginHorizontal: '10%',
      marginTop : 20,
      backgroundColor: '#FF4500',
      paddingVertical: '3%',
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center'
    },

    textRegis: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white', 
    }
})