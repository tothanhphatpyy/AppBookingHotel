import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const RegistrationInfoUser = ({ navigation }) => {
    return (
        <View style= {styles.container}>
        <Image
          style={styles.logoImage}
          source={require("./img/logo.png")}
       />
    
    
      <View style = {styles.formLogin}>
          <Text style= {styles.textLogin}>Đăng ký thông tin</Text>
          
    
          <View style = {styles.LoginInput}>
    
          <Text style= {styles.textPhone}>Họ tên</Text>
           <TextInput
            style={styles.inputPhone}
            
            placeholderTextColor={'gray'}
            placeholder="Nhập họ tên của bạn"
           />
           <Text style= {styles.textPhone}>Email</Text>
           <TextInput
            style={styles.inputPhone}
            
            placeholderTextColor={'gray'}
            placeholder="Nhập email của bạn"
           />


           <Text style= {styles.textPhone}>Mật khẩu</Text>
           <TextInput
            style={styles.inputPhone}
            
            placeholderTextColor={'gray'}
            placeholder="Nhập mật khẩu 1-6"
            keyboardType="numeric"
            maxLength={6}
            secureTextEntry={true}
           />

            <Image
              style={styles.imgVector}
              source={require("./img/Vector.png")}
            />

           <Text style= {styles.textPhone2}>Nhập lại mật khẩu</Text>
           <TextInput
            style={styles.inputPhone}
            
            placeholderTextColor={'gray'}
            placeholder="Nhập mật khẩu 1-6"
            keyboardType="numeric"
            maxLength={6}
            secureTextEntry={true}
           />

            <Image
              style={styles.imgVector}
              source={require("./img/Vector.png")}
            />
           
    
              <TouchableOpacity>
                <Text style= {styles.btnRegis}
                onPress ={ () => navigation.navigate('Màn hình chính')}
                >ĐĂNG KÝ</Text>
              </TouchableOpacity>
              
          </View>
      </View>
      </View>
      )
}

export default RegistrationInfoUser

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
        marginTop: '3%',
        marginLeft: '10%',
        fontSize: 20,
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
    
    imgVector :{
  
      marginTop: '-7%',
      marginLeft: '80%',
      resizeMode: 'contain',
         
    },
    textPhone2:{
        fontFamily: 'Roboto',
        marginTop: '7%',
        marginLeft: '10%',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    
    
    btnRegis: {
      marginHorizontal: '10%',
      marginTop : '8%',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'red',
      paddingVertical: '3%',
      borderRadius: 6,
    },
})