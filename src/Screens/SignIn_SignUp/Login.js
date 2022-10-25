import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal, Dimensions } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../Context/AuthContext';
import {BASE_URL} from '../../Config';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {

  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [hide, setHide] = useState(false);
  const [modalAccess, setModalAccess] = useState(false);

  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    console.log(userName, passWord);
    if(userName== '' || passWord == '' || passWord.length !==6)
    setModalAccess(!modalAccess);

    axios.post(`${BASE_URL}/login` ,{username: userName, password : passWord})
    .then(res =>{
        AsyncStorage.setItem('userInfo', JSON.stringify(res.data));
        AsyncStorage.setItem('userToken', res.data.accessToken);
        //navigation.navigate('TabScreen');
        login(res.data.accessToken, res.data);
    })
    .catch(e =>{
      console.log(`Login error: ${e.message}`);
      setModalAccess(!modalAccess);
    }) 
  }

  return (
    <View style= {styles.container}>
      <Animatable.Image
        animation="fadeInDown"
        style={styles.logoImage}
        source={{uri : 'https://i.imgur.com/T6eMqr7.png'}}
      />
      <Animatable.View style={styles.formLogin} animation="fadeInUpBig">
        <Text style= {styles.textLogin}>Đăng Nhập</Text>
        <View style = {styles.LoginInput}>
          <Text style= {styles.textPhone}>Số điện thoại</Text>
          <TextInput
          value={userName}
          style={styles.inputPhone}
          onChangeText={setUserName}
          placeholderTextColor={'gray'}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="numeric"
          />

          <Text style= {styles.textPassword}>Mật khẩu</Text>
          <TextInput
          style={styles.inputPhone}
          onChangeText={setPassWord}
          placeholderTextColor={'gray'}
          placeholder="Nhập mật khẩu 1-6"
          keyboardType="numeric"
          maxLength={6}
          secureTextEntry={!hide}
          />

          <TouchableOpacity style={{ marginTop: '-7%', marginLeft: '80%',}}
                            onPress={() => setHide(!hide)}>
            {hide? 
              <Image
                style={{resizeMode: 'contain', height: 18, width: 18, tintColor: 'gray'}}
                source={{uri : 'https://i.imgur.com/5r5f9y6.png'}}/>
              :
              <Image
                style={{height: 21, width: 20,  tintColor: 'gray'}}
                source={{uri : 'https://i.imgur.com/GBxZHKo.png'}}/>
            }
          </TouchableOpacity>
          
          {(passWord.length) ==6 || passWord == '' ? null 
            :<Text style={{color: 'red', fontSize: 13, marginTop: 10, marginLeft: 40}}>Mật khẩu gồm 6 kí tự</Text> }
          
          <TouchableOpacity 
            onPress={() => navigation.navigate('Đăng kí SĐT', {screenNext : 'forgot-password'})}>
            <Text style= {styles.textForgot}>Quên mật khẩu?</Text>
          </TouchableOpacity>
            

          <TouchableOpacity>
            <Text style= {styles.btnLogin}
              onPress = {() => handleLogin()}
            >ĐĂNG NHẬP</Text>
          </TouchableOpacity>
            

          <View style ={styles.textSignin}>
              <Text style= {styles.textAnswer}>Bạn chưa có tài khoản?</Text>
              <TouchableOpacity>
                <Text 
                style= {styles.textSignnow}
                onPress = {() => navigation.navigate('Đăng kí SĐT', {screenNext : 'Sign-in'}) }
                >Đăng kí ngay</Text>
              </TouchableOpacity>     
          </View>

          <View style ={styles.textotherLogin}>
              <Text style= {styles.textAnswer2}>Hoặc đăng nhập bằng</Text>
          </View>

            <View style ={styles.logoLoginOther}>
              <View style= {styles.img}>
                <TouchableOpacity>
                  <Image
                    style={{resizeMode: 'contain', height: 35, width: 35}}
                    source={{uri : 'https://i.imgur.com/k9Oo1CW.png'}} //logo Apple
                  />
                </TouchableOpacity>
              </View>
              <View style= {[styles.img,styles.imgGG]}>
                <TouchableOpacity>
                  <Image
                      style={{resizeMode: 'contain', height: 35, width: 35}}
                      source={{uri : 'https://i.imgur.com/4JYzqQD.png'}} //logo Google
                    />
                  </TouchableOpacity>
              </View>

              <View style= {[styles.img,styles.imgGG]}>
                <TouchableOpacity>
                  <Image
                      style={{resizeMode: 'contain', height: 35, width: 35}}
                      source={{uri : 'https://i.imgur.com/ID7QQxF.png'}} //logo FB
                    />
                </TouchableOpacity>
              </View> 
            </View>
        </View>
       </Animatable.View>
      <Modal
        animationType= "slide"
        transparent={true}
        visible={modalAccess}
        onRequestClose={() => setModalAccess(!modalAccess)}
        >
        <View style={{overflow: 'hidden'}}>
          <View style={{ backgroundColor: 'white', borderWidth: 1.5, borderColor: '#DCDCDC', borderRadius: 10, 
                          marginHorizontal: 10, height: windowHeight/2.5, marginTop: windowHeight/3, alignItems: 'center' }}>
                <TouchableOpacity style={{position: 'absolute', right: 20,top: 10}}
                                onPress={() => {setModalAccess(!modalAccess)}}>
                <Image source={{uri: 'https://i.imgur.com/dIsk0MM.png'}}
                      style={{resizeMode: 'contain', width: 15, height: 15, }} 
                      />
              </TouchableOpacity>
                <View> 
                  <Text style={{color: 'black', marginTop: 30, fontSize: 20, fontWeight: 'bold', color: '#FF4500', textAlign: 'center'}}>Đăng nhập thất bại!</Text>
                  <Text style={{color: 'black', marginTop: 10,fontSize: 16, fontWeight: 'bold', color: '#FF4500', textAlign: 'center'}}>Vui lòng kiểm tra lại</Text>
                </View>
              <Image source={{uri: 'https://i.imgur.com/mzeg5JT.png'}} 
                      style={{resizeMode: 'contain', width: 150, height: 150, marginTop: 10}}
              />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    logoImage: {
        flex: 1,
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
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },
    textPhone: {
        fontFamily: 'Roboto',
        marginTop: '4%',
        marginLeft: '10%',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },

    inputPhone: {
      color: 'gray',
      marginHorizontal: '10%',
      marginTop: '2%',
      borderColor : 'gray',
      borderBottomWidth: 1,
      borderRadius: 10,
      
    },

    textPassword: {
      fontFamily: 'Roboto',
      marginTop: '3%',
      marginLeft: '10%',
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
      marginBottom: '-2%',
  },
      imgVector :{
        resizeMode: 'contain',
    },

    textForgot: {
      fontFamily: 'Roboto',
      marginTop: 10,
      fontSize: 15,
      fontWeight: 'bold',
      color: '#333333',
      marginLeft: '55%'
    },

    btnLogin: {
      marginHorizontal: '10%',
     /*  maxWidth : '75%',
      marginLeft: '10%', */
      marginTop : '3%',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#FF4500',
      paddingVertical: '3%',
      borderRadius: 6,
      color: 'white'
    },

    textSignin: {
      fontFamily: 'Roboto',
      flexDirection: 'row',
      marginTop: '3%',
      justifyContent: 'center',
    },

    textAnswer: {
      fontFamily: 'Roboto',
      fontSize: 15,
      color: '#333333',
      marginBottom: '3%'
    },

    textSignnow: {
      
      marginLeft: '4%',
      fontFamily: 'Roboto',
      fontSize: 15,
      color: '#333333',
      fontWeight: 'bold',
    },

    textAnswer2 :{
      fontFamily: 'Roboto',
      fontSize: 15,
      color: '#333333',
      textAlign: 'center',
    },

    logoLoginOther :{
      flexDirection: 'row',
    },

    img : {
      marginLeft: '22%',
      marginTop: '4%',
      alignItem : 'center',
      height: '40%',
      width: '12%',
      justifyContent: 'center',
      alignItems: 'center',
      //borderWidth: 3,
      borderBottomWidth: 3,
      borderRightWidth: 3,
      borderColor: '#DCDCDC',
      borderRadius : 25,

    },

    imgGG: {
      marginLeft: '10%',
    }
   
  })