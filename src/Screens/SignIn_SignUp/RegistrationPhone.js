import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native'
import React,{useState} from 'react'
import axios from 'axios';
import {BASE_URL} from '../../Config';


const RegistrationPhone = ({ navigation, route }) => {

  const screen = route.params.screenNext;

  const [numberInput, setNumberInput] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [checkSDT, setCheckSDT] = useState({sdt: null, statusScreen: null}); 
  //status_Screen : trạng thái màn hình {true: ForgotPassword, false: Sign_in}

  const checkPhone = () => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const response = await axios.post(`${BASE_URL}/check-user` ,{username: numberInput});
        if(screen == 'forgot-password'){
          if(response.data == null)
            setCheckSDT({sdt: numberInput, statusScreen: screen});
            //console.log('Khong tim thay')
          else navigation.navigate('Đăng kí SĐT OTP', {sdt : numberInput, screenNext : screen});
            //console.log('render view forgot password')
        }
        else{
          if(response.data == null)
            navigation.navigate('Đăng kí SĐT OTP', {sdt: numberInput});
            //console.log('render view sign in')
          else setCheckSDT({sdt: numberInput, statusScreen: screen});
        }
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  };

  return (
    <View style= {styles.container}>
      <Image
        style={styles.logoImage}
        source={{uri : 'https://i.imgur.com/T6eMqr7.png'}}
      />
      <View style = {styles.formLogin}>
        <Text style= {styles.textLogin}>Nhập số điện thoại</Text>
        <View style = {styles.LoginInput}>
          <Text style= {styles.textPhone}>Chúng tôi sẽ gửi mã xác thực về điện thoại của bạn</Text>
          <View style= {styles.inputPhone}>
            <Text style={styles.inputPhone84}>+84</Text>
            <TextInput
              style={styles.inputMyPhone} 
              placeholderTextColor={'gray'}
              placeholder="Nhập số điện thoại của bạn"
              keyboardType="numeric"
              onChangeText={setNumberInput}
            />   
          </View>
          {numberInput.length !==10 ?
           <Text style={{color: 'red', marginTop: 5, marginLeft: 40}}>Số điện thoại gồm 10 số</Text>
          : 
          null
          }
          {checkSDT.sdt == numberInput && checkSDT.statusScreen == 'sign-in'?
           <Text style={{color: 'red', marginTop: 5, marginLeft: 40}}>Số điện thoại đã được sử dụng</Text>
          : 
            null
          }
          {checkSDT.sdt == numberInput && checkSDT.statusScreen == 'forgot-password'?
           <Text style={{color: 'red', marginTop: 5, marginLeft: 40}}>Số điện thoại chưa được đăng kí</Text>
          : 
            null
          }
        </View>
        
        <TouchableOpacity 
          style={[styles.btnRegis, , {backgroundColor: numberInput.length ==10? '#FF4500': 'pink'}]}
          disabled={numberInput.length == 10? false: true } 
          onPress ={ () => checkPhone() }>
          <Text style= {styles.textRegis}>TIẾP TỤC</Text>
          {loading && (
            <ActivityIndicator size="large" color="orange" style={{position: 'absolute', right: 10}}/>
          )}
        </TouchableOpacity>
      </View>
    </View>

    
  )
}

export default RegistrationPhone

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
        marginHorizontal: '10%',
        fontFamily: 'Roboto',
        fontSize: 15,
        color: 'black',
        marginBottom: '3%',
    },

    inputPhone: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    inputPhone84 :{
      marginTop: 11,
      color: 'black',
      marginLeft: '10%',
      fontWeight: 'bold',
      fontSize: 18,
      borderColor : 'gray',
      borderBottomWidth: 1,
      paddingBottom: 10,
    },
    inputMyPhone: {
      fontSize: 16,
      marginLeft: 10,
      color: 'black',
      borderColor : 'gray',
      borderBottomWidth: 1,
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
    textRegis: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white'
    }
})