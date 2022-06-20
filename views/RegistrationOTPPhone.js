import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const RegistrationOTPPhone = ({ navigation }) => {
    return (
        <View style= {styles.container}>
        <Image
          style={styles.logoImage}
          source={require("./img/logo.png")}
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
                  />   
              </View>
    
              <TouchableOpacity>
                <Text style= {styles.btnRegis}
                onPress ={ () => navigation.navigate('Đăng kí thông tin User')}
                >TIẾP TỤC</Text>
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