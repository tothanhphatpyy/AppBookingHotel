import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import React, { useReducer, useState, useContext} from 'react'
import axios from 'axios';
import {BASE_URL} from '../../Config';



const initialInfoUser = {
  password: '',
  passwordConfirm: '',
  hidePassword: false,
  hidePasswordConfirm: false,
}

const reducer = (state, action) => {
  switch (action.type){
    case 'UPDATE_PASSWORD':
      return { ...state, password: action.value }
    case 'UPDATE_PASSWORDCONFIRM':
      return { ...state, passwordConfirm: action.value }
    case 'HIDE_PASSWORD':
      return { ...state, hidePassword: !action.value }
    case 'HIDE_PASSWORDCONFIRM':
      return { ...state, hidePasswordConfirm: !action.value }
    default:
      return state;
  }
};

const ConfirmPasswordForgot = ({navigation, route}) => {

  const sdt = '0371231234'
  //const sdt = route.params.sdt;
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialInfoUser);

  const handleSubmit = () => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const res = await axios.post(`${BASE_URL}/forgot-password`,
          {
            username: sdt,
            password: state.password,
          });
        console.log(res.data);
        //navigation.navigate('TabScreen');
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style= {styles.container}>
      <Image
          style={styles.logoImage}
          source={{uri :'https://i.imgur.com/T6eMqr7.png'}}
      />
      <View style = {styles.formLogin}>
        <Text style= {styles.textLogin}>Lấy lại mật khẩu</Text>
        <View style = {{marginTop: 10}}>
          <Text style= {styles.textPhone}>Mật khẩu</Text>
          <View style={{justifyContent: 'center'}}>
            <TextInput
              style={styles.inputPhone}
              onChangeText={(text) => {
                dispatch({ type: 'UPDATE_PASSWORD', value: text })
              }}
              placeholderTextColor={'gray'}
              placeholder="Nhập mật khẩu 1-6"
              keyboardType="numeric"
              maxLength={6}
              secureTextEntry={!state.hidePassword}
            />
            <TouchableOpacity style={{position: 'absolute', right: '12%', padding: 10}}
              onPress={() => dispatch({ type: 'HIDE_PASSWORD', value: state.hidePassword})}>
              {state.hidePassword? 
              <Image
                style={{height: 22, width: 20,  tintColor: 'gray'}}
                source={{uri : 'https://i.imgur.com/GBxZHKo.png'}}/>
              :
              <Image
                style={{resizeMode: 'contain', height: 18, width: 18, tintColor: 'gray'}}
                source={{uri : 'https://i.imgur.com/5r5f9y6.png'}}/>
            } 
            </TouchableOpacity>
          </View>

          <Text style= {styles.textPhone2}>Nhập lại mật khẩu</Text>
          <View style={{ justifyContent: 'center'}}>
            <TextInput
              style={styles.inputPhone}
              onChangeText={(text) => {
                dispatch({ type: 'UPDATE_PASSWORDCONFIRM', value: text })
              }}
              placeholderTextColor={'gray'}
              placeholder="Nhập mật khẩu 1-6"
              keyboardType="numeric"
              maxLength={6}
              secureTextEntry={!state.hidePasswordConfirm}
            />
            <TouchableOpacity style={{position: 'absolute', right: '12%', padding: 10}}
              onPress={() => dispatch({ type: 'HIDE_PASSWORDCONFIRM', value: state.hidePasswordConfirm})}>
              {state.hidePasswordConfirm? 
              <Image
                style={{height: 22, width: 20,  tintColor: 'gray'}}
                source={{uri : 'https://i.imgur.com/GBxZHKo.png'}}/>
              :
              <Image
                style={{resizeMode: 'contain', height: 18, width: 18, tintColor: 'gray'}}
                source={{uri : 'https://i.imgur.com/5r5f9y6.png'}}/>
            } 
            </TouchableOpacity>
          </View>
        </View>
        {state.password !== state.passwordConfirm?
          <Text style={{color: 'red', marginLeft: '10%', marginTop: 10}}>Mật khẩu không khớp</Text>
          : null
        }
        <TouchableOpacity 
          style= {[styles.btnRegis,{backgroundColor: state.passwordConfirm.length ==6? '#FF4500': 'pink'}]}
          disabled={state.passwordConfirm.length ==6? false: true}
          onPress ={ () => handleSubmit()}>
          <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>TIẾP TỤC</Text>
          {loading && (
            <ActivityIndicator size="large" color="orange" style={{position: 'absolute', right: 10}}/>
          )}
        </TouchableOpacity> 
      </View>
        
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default ConfirmPasswordForgot

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoImage: {
      flex: 0.7,
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
      backgroundColor: '#F9F9F9',
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
      marginTop: '3%',
      marginLeft: '10%',
      fontSize: 19,
      color: 'black',
      fontWeight: 'bold',
  },

  inputPhone: {
    fontFamily: 'Roboto',
    color: 'gray',
    marginHorizontal: '10%',
    borderColor : 'gray',
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  
  textPhone2:{
      fontFamily: 'Roboto',
      marginTop: '3%',
      marginLeft: '10%',
      fontSize: 19,
      color: 'black',
      fontWeight: 'bold',
  },
  btnRegis: {
    marginHorizontal: '10%',
    marginTop : '8%',
    backgroundColor: '#FF4500',
    paddingVertical: '3%',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
})