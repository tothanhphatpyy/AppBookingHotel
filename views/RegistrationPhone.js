import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const RegistrationPhone = ({ navigation }) => {
  return (
    <View style= {styles.container}>
    <Image
      style={styles.logoImage}
      source={require("./img/logo.png")}
   />


  <View style = {styles.formLogin}>
      <Text style= {styles.textLogin}>Nhập số điện thoại</Text>
      

      <View style = {styles.LoginInput}>
          <Text style= {styles.textPhone}>Chúng tôi sẽ gửi mã xác thực về điện thoại</Text>
          <Text style= {[styles.textPhone, styles.textPhone2]}>của bạn</Text>

          <View style= {styles.inputPhone}>

            <TextInput
                style={styles.inputPhone84} 
                placeholderTextColor={'black'}
                placeholder="+84"
                keyboardType="numeric"
              />   
              <TextInput
                style={styles.inputMyPhone} 
                placeholderTextColor={'gray'}
                placeholder="Nhập số điện thoại của bạn"
                keyboardType="numeric"
              />   
          </View>

          <TouchableOpacity>
            <Text style= {styles.btnRegis}
            onPress ={ () => navigation.navigate('Đăng kí SĐT OTP')}
            >TIẾP TỤC</Text>
          </TouchableOpacity>
          
      </View>
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
        fontSize: 28,
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
    textPhone2: {
      marginTop: '-3%',
    },

    inputPhone: {
      flexDirection: 'row',
      marginTop: '-3%',
    },

    inputPhone84 :{
      marginLeft: '10%',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      borderColor : 'gray',
      borderBottomWidth: 1,
    },
    inputMyPhone: {
      fontSize: 16,
      marginLeft: '2%',
      color: 'black',
      borderColor : 'gray',
      borderBottomWidth: 1,
    },

    btnRegis: {
      marginHorizontal: '10%',
      marginTop : '8%',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#FF4500',
      paddingVertical: '3%',
      borderRadius: 6,
      color: 'white'
    },
})