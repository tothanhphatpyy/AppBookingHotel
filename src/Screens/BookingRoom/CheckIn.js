import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, Modal, TextInput, Switch, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-native-date-picker'
import CountryPicker from 'react-native-country-picker-modal'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CheckIn = ({ navigation , route}) => {

  const [date, setDate] = useState(new Date());
  const [dateReturn, setDateReturn] = useState(date);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [changeImg, setchangeImg] = useState(false);
  const [showCountry, setshowCountry] = useState('VN');
  const [callingCode, setcountryCode] = useState('84');
  const [hideSwitch, sethideSwitch] = useState(false);
  const [modalAccess, setmodalAccess] = useState(false);

  const [numberOfPeople, setnumberOfPeople] = useState(1)
  const [numberOfChildren, setnumberOfChildren] = useState(0)
  const [numberOfInfant, setnumberOfInfant] = useState(0)

  const [infoRoomOder, setInfoRoomOder] = useState([])
  const [loading, setLoading] = useState(true);

  const idRoomOder = route.params.idRoomOder;
  
  
  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`http:///192.168.1.3:3000/list-hotel?hotelID=${idRoomOder}`);
        setInfoRoomOder(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const checkNumberPeople =(number) =>{
    if(number > 1){
      setnumberOfPeople((number) => number -1)
    }
  }
  const checkNumberChildren =(number) =>{
    if(number > 0){
      return number -1
    }
    return 0;
  }
  

  const changeDay =(change) =>{
    if(change ===1 ){
      return change = 'Thứ Hai'
    }
    if(change ===2){
      return change = 'Thứ Ba'
    }
    if(change ==3){
      return change = 'Thứ Tư'
    }
    if(change ==4){
      return change = 'Thứ Năm'
    }
    if(change ==5){
      return change = 'Thứ Sáu'
    }
    if(change ==6){
      return change = 'Thứ Bảy'
    }
    if(change ==0){
      return change = 'Chủ Nhật'
    }
  }
  const getDay = changeDay(date.getDay());
  const getDayReturn = changeDay(dateReturn.getDay());

  const toggleSwitch = () => sethideSwitch(previousState => !previousState);

  const dateOder = {
    getDay : getDay,                                                                             
    getDate : date.getDate(),
    getMonth : date.getMonth(),
    getYear : date.getFullYear(),
  }
  const dateReturnOder = {
      getDayReturn : getDayReturn,                                                                             
      getDateReturn : dateReturn.getDate(),
      getMonthReturn : dateReturn.getMonth(),
      getYearReturn : dateReturn.getFullYear(),
  } 
  return (
   
    <View style={{}}>
      {/* Tab Top */}
        <View
            style={{backgroundColor: '#F8F8F8',height: 80, width: '100%',
                    borderBottomColor: '#DCDCDC', borderBottomWidth: 1,}}>
            <View style={{alignItems: 'center', flexDirection: 'row',justifyContent: 'center', height: 50, marginTop: 5}}>
                <TouchableOpacity style={{position: 'absolute', left: 0, paddingVertical: 10, paddingHorizontal: 20,}}
                                          onPress={() => navigation.goBack()}>
                    <Image
                        style={{resizeMode: 'contain', width: 25, height: 30, left: -5, tintColor: 'orange'}} 
                        source= {{uri: 'https://img.icons8.com/material/344/back--v1.png'}}/>
                </TouchableOpacity>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>Thông tin khách hàng</Text>
            </View>
            <View style={{position: 'absolute', left: 170, top: 12}}>
                <Image style={{ resizeMode: 'contain', width: 180, height:100 }} source={{uri: 'https://i.imgur.com/h0Ew1v2.png'}} />
            </View>
        </View>

        {/* InfoRoom */}
        {loading && (
              <View style={{justifyContent: 'center', marginTop: 30, flexDirection: 'row'}}>
              <Text style={{color: 'black', marginTop: 10}}>Loading...</Text>
              <ActivityIndicator size="large" color="orange" />
              </View>
        )}
        {!loading && ( 
        <ScrollView style={{backgroundColor: '#F8F9F9'}}>
          <View style={{marginTop: 20, marginLeft: 20, marginRight: 20,}}>
            <Image 
              style={{ resizeMode: 'cover', width: 80, height : 80, borderRadius: 7}} 
              source={{uri: infoRoomOder.img}} />
            <Text numberOfLines={1} style={{position: 'absolute', left: 90, fontWeight: 'bold', fontSize: 15, color: 'black', width: windowWidth - 130}}>
              {infoRoomOder.nameRoom}
            </Text>
            <View style={{position: 'absolute', left: 90,}}>
              <Text style={{top: 25, fontSize: 13, color: 'gray' }}>
                {infoRoomOder.numberPeople} khách • {infoRoomOder.numberBedRoom}phòng ngủ • {infoRoomOder.numberBathRoom}phòng tắm
              </Text>
              <Text style={{top: 30, fontSize: 12, color: 'gray'}}>
                {infoRoomOder.detailLocation}
              </Text>
            </View>

            {/* Date Room */}
            <View style={{height: 190, marginTop: 20, backgroundColor:'#F3F3F3', borderRadius: 10}}>
             <Text style={{color:'black', fontWeight: 'bold', marginLeft: 20, marginTop: 10}}>Ngày đặt phòng</Text>
             <TouchableOpacity style={{height: 35, width: 250, marginTop: 10, borderRadius: 7, flexDirection: 'row', alignItems: 'center',
                               backgroundColor:'#EBF5FF',marginLeft: 10,}}
                               onPress ={() => setModalVisible(true)}>
                <Text style={{color:'black', marginLeft:10, fontSize:13}}>{getDay} , </Text>
                <Text style={{color:'black', marginLeft:2, fontSize:13}}>{date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</Text>
                <Image source={{uri: 'https://i.imgur.com/qdSigYs.png'}} 
                       style={{resizeMode: 'contain', width: 15, height: 15, marginLeft: 75, tintColor: '#484848'}} />           
             </TouchableOpacity>
             <Text style={{color: 'gray', textAlign: 'center', fontSize:11}}>Ngày đến 02:00 pm</Text>
              <View style={{marginLeft: 20, marginTop: 10, flexDirection: 'row', alignItems: 'center',}}>
                <TouchableOpacity onPress={() => setchangeImg(!changeImg)}>
                  {changeImg? 
                  <Image source={{uri: 'https://i.imgur.com/5buUh7G.png'}}
                          style={{resizeMode: 'contain', width: 19, height: 20,}} />
                    :
                    <Image source={{uri: 'https://i.imgur.com/1TKsw1G.png'}}
                          style={{resizeMode: 'contain', width: 15, height: 15}} />
                  }
                </TouchableOpacity>
                <Text style={{color:'black', fontWeight: 'bold', marginLeft: 10}}>Ngày trả phòng</Text>
              </View>
              <View style={{marginLeft: 10}}>
                {changeImg? 
                  <View>
                  <TouchableOpacity style={{height: 35, width: 250, marginTop: 10, borderRadius: 7, 
                                    backgroundColor:'#EBF5FF',}}
                                    onPress ={() => {
                                      setModalVisible2(!modalVisible2);
                                    }}> 
                      <View style={{flexDirection: 'row',height: 35, alignItems: 'center'}}>
                        <Text style={{color:'black', marginLeft:10, fontSize:13}}>{getDayReturn} , </Text>
                        <Text style={{color:'black', marginLeft:2, fontSize:13}}>{dateReturn.getDate()}-{dateReturn.getMonth()+1}-{dateReturn.getFullYear()}</Text>
                        <Image source={{uri: 'https://i.imgur.com/qdSigYs.png'}} 
                              style={{resizeMode: 'contain', width: 15, height: 15, marginLeft: 75, tintColor: '#484848'}} />
                      </View> 
                  </TouchableOpacity>
                  <Text style={{color: 'gray', textAlign: 'center', fontSize:11}}>Ngày đi 12:00 pm</Text>
                  </View>
                  :
                  <View>
                    <Text style={{color:'black', marginLeft:10, fontSize:13, marginTop: 10}}>Liên hệ quầy lễ tân để trả phòng</Text>
                  </View>
                  
              }
              </View>
            </View>
            
            {/* Modal */}
            <Modal
              animationType= "slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(!modalVisible)}
              >
                <View style={{overflow: 'hidden'}}>
                  <View style={{ borderTopWidth: 1.5, borderTopColor: '#DCDCDC', backgroundColor: 'white',
                                 height: 200, marginTop: windowHeight-200, alignItems: 'center' }}>
      
                      <DatePicker 
                        date={date} 
                        onDateChange={(dateValue) => {
                          setDate(dateValue)
                          setDateReturn(dateValue)
                        }}
                        mode= "date" 
                        androidVariant = 'nativeAndroid'
                        />
                       <TouchableOpacity style={{position: 'absolute', right: 15,top: 10}}
                                        onPress={() => {setModalVisible(!modalVisible)}}>
                        <Image source={{uri: 'https://i.imgur.com/dIsk0MM.png'}}
                              style={{resizeMode: 'contain', width: 15, height: 15, }} 
                              />
                      </TouchableOpacity>
                  </View>
                  
                </View>
            </Modal>

            <Modal
              animationType= "slide"
              transparent={true}
              visible={modalVisible2}
              onRequestClose={() => setModalVisible2(!modalVisible2)}
              >
                <View style={{overflow: 'hidden'}}>
                  <View style={{ borderTopWidth: 1.5, borderTopColor: '#DCDCDC', backgroundColor: 'white',
                                 height: 200, marginTop: windowHeight-200, alignItems: 'center' }}>
      
                      <DatePicker 
                        date={date} 
                        onDateChange={setDateReturn}
                        mode= "date" 
                        androidVariant = 'nativeAndroid'
                        />
                       <TouchableOpacity style={{position: 'absolute', right: 15,top: 10}}
                                        onPress={() => {setModalVisible2(!modalVisible2)}}>
                        <Image source={{uri: 'https://i.imgur.com/dIsk0MM.png'}}
                               style={{resizeMode: 'contain', width: 15, height: 15, }} 
                              />
                        
                      </TouchableOpacity>
                  </View>
                  
                </View>
            </Modal>
            {/* Infomation */}
            <View style={{ marginTop: 20, borderTopWidth: 1, borderTopColor: '#DCDCDC',}}>

              <View style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color:'black', fontSize: 14}}>Người lớn</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 10}}>
                  {
                    <Text style={{ color: numberOfPeople >1? 'orange' : 'gray', fontSize: 40}}
                          onPress={() => 
                            checkNumberPeople(numberOfPeople)                        
                          }>
                    -</Text>
                  }
                    <Text style={{ color:'black', fontSize: 16, marginLeft: 20}}>{numberOfPeople}</Text>
                    <Text style={{ color:'gray', fontSize: 12, color: 'orange',fontSize: 22,marginLeft: 20,}}
                          onPress={() =>
                            setnumberOfPeople(numberOfPeople +1)}
                          >
                    +</Text>       
                </View>
              </View>
              <View style={{marginTop: 30, backgroundColor:'#F3F3F3', borderRadius: 5}}>
                  <Text style={{padding : 10, color: 'gray', fontSize: 13}}>Chỗ ở sẽ thu thêm phí từ khách thứ 2, tối đa là 3 khách. Phí thêm khách là 0đ/ người</Text>
              </View>

              <View style={{marginTop: 30, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color:'black', fontSize: 14}}>Trẻ em</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 10}}>
                  {
                    <Text style={{ color: numberOfChildren > 0 ? 'orange' : 'gray', fontSize: 40}}
                          onPress={() => 
                            setnumberOfChildren(checkNumberChildren(numberOfChildren))                    
                          }>
                    -</Text>
                  }
                    <Text style={{ color:'black', fontSize: 16, marginLeft: 20}}>{numberOfChildren}</Text>
                    <Text style={{ color:'gray', fontSize: 12, color: 'orange',fontSize: 22,marginLeft: 20,}}
                          onPress={() =>
                            setnumberOfChildren(numberOfChildren +1)}
                          >
                    +</Text>       
                </View>
              </View>
              <View style={{marginTop: 30, backgroundColor:'#F3F3F3', borderRadius: 5}}>
                  <Text style={{padding : 10, color: 'gray', fontSize: 13}}>Chỗ ở sẽ thu thêm phí từ khách thứ 2, tối đa là 3 khách. Phí thêm khách là 125.000đ/ người</Text>
              </View>

              <View style={{marginTop: 30, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color:'black', fontSize: 14}}>Trẻ sơ sinh</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 10}}>
                  {
                    <Text style={{ color: numberOfInfant > 0 ? 'orange' : 'gray', fontSize: 40}}
                          onPress={() => 
                            setnumberOfInfant(checkNumberChildren(numberOfInfant))                    
                          }>
                    -</Text>
                  }
                    <Text style={{ color:'black', fontSize: 16, marginLeft: 20}}>{numberOfInfant}</Text>
                    <Text style={{ color:'gray', fontSize: 12, color: 'orange',fontSize: 22,marginLeft: 20,}}
                          onPress={() =>
                            setnumberOfInfant(numberOfInfant +1)}
                          >
                    +</Text>       
                </View>
              </View>
              <View style={{marginTop: 30, backgroundColor:'#F3F3F3', borderRadius: 5}}>
                  <Text style={{padding : 10, color: 'gray', fontSize: 13}}>Chỗ ở sẽ thu thêm phí từ khách thứ 2, tối đa là 3 khách. Phí thêm khách là 0đ/ người</Text>
              </View>
            </View>
          </View>

          {/*  InFo Customer  */}
          <View style={{marginTop: 30, marginLeft: 20}}>
            <View style={{flexDirection: 'row',paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: '#DCDCDC',  }}>
              <Text style={{color: 'red'}}>*</Text>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>Tên khách hàng</Text>
              <TextInput
                style={{position: 'absolute', left: 150, top: 6, color: 'black'}}
                placeholderTextColor={'gray'}
                placeholder="Nhập tên của bạn          "
              />
            </View>
            <View style={{flexDirection: 'row',paddingVertical: 17, borderBottomWidth: 0.5, borderBottomColor: '#DCDCDC', alignItems: 'center'}}>
              <Text style={{color: 'red'}}>*</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center',}}>
                <CountryPicker
                    withFilter
                    countryCode={showCountry}
                    withFlag
                    withAlphaFilter={false}
                    withCurrencyButton={false}
                    withCallingCode
                    onSelect= {country => {
                      const {cca2, callingCode} = country;
                      setshowCountry(cca2);
                      setcountryCode(callingCode);
                      
                    }}
                    containerButtonStyle= {{paddingRight: 30}}
                  />   
                  <Text style={{position: 'absolute', left: 30, color: 'black', fontSize: 14, fontWeight: 'bold'}}>+{callingCode}</Text>
                  <Text style={{color: 'black', marginTop: 10, fontSize: 7}}>◢</Text>
              </View>
              <View style={{position: 'absolute', left: 150, flexDirection: 'row', alignItems: 'center'}}>        
                <TextInput
                  style={{ color: 'black'}}
                  placeholderTextColor={'gray'}
                  keyboardType="numeric"
                  placeholder="Nhập số điện thoại          "
                />
              </View>          
             
            </View>
            <View style={{flexDirection: 'row',paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: '#DCDCDC',  }}>
              <Text style={{color: 'red'}}>*</Text>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>Địa chỉ Email</Text>
              <TextInput
                style={{position: 'absolute', left: 150, top: 6, color: 'black',}}
                placeholderTextColor={'gray'}
                placeholder="Nhập email của bạn          "
              />
            </View>
            <View style={{flexDirection: 'row',paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: '#DCDCDC',  }}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>Bạn đến từ đâu</Text>
              <TextInput
                style={{position: 'absolute', left: 150, top: 6, color: 'black' }}
                placeholderTextColor={'gray'}
                placeholder="Nhập địa chỉ          "
              />
            </View>
          </View>     

          <View style={{marginTop: 10, height: 5, backgroundColor: '#F3F3F3'}}></View>
          <View style={{marginTop: 10, marginLeft: 20}}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Mã giảm giá</Text>
              <View style={{position: 'absolute', right: 30}}>
              <Switch 
                 trackColor={{ false: "#767577", true: "orange" }}
                 thumbColor={hideSwitch ? "#FF4500" : "#F3F3F3"}
                 onValueChange={toggleSwitch}
                 value={hideSwitch} 
              />
              </View>
              
            </View>
            {hideSwitch? 
            <TextInput
              style={{marginTop: 15, borderTopColor: '#DCDCDC', borderTopWidth: 0.5, color: 'black',}}
              placeholderTextColor={'gray'}
              placeholder="Nhập mã giảm giá              "
            />
            : null}
            <View style={{marginTop: 10, marginLeft: -20, height: 5, backgroundColor: '#F3F3F3'}}></View>
          </View>           



        <TouchableOpacity
          onPress={() => {setmodalAccess(true)
                          }}>
          <LinearGradient
              colors={['#F08080', '#FF6347', '#FF4500']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 1}}
              
              style={{alignItems: 'center', marginHorizontal: 20, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, marginTop: 50}}>
              <Text style={{ fontSize: 15, fontWeight:'bold', color: 'white', paddingHorizontal: 20, paddingVertical: 0}}
                >Đặt phòng</Text>
          </LinearGradient>
        </TouchableOpacity>  
         

        <Modal
              animationType= "slide"
              transparent={true}
              visible={modalAccess}
              onRequestClose={() => setmodalAccess(!modalAccess)}
              >
                <View style={{overflow: 'hidden'}}>
                  <View style={{ backgroundColor: '#F5F5F5', borderWidth: 1.5, borderColor: '#DCDCDC', borderRadius: 10, 
                                 marginHorizontal: 10, height: windowHeight/2, marginTop: windowHeight/3.5, alignItems: 'center' }}>
      
                     
                       <TouchableOpacity style={{position: 'absolute', right: 20,top: 10}}
                                        onPress={() => {setmodalAccess(!modalAccess)}}>
                        <Image source={{uri: 'https://i.imgur.com/dIsk0MM.png'}}
                              style={{resizeMode: 'contain', width: 15, height: 15, }} 
                              />
                      </TouchableOpacity>

                      <Text style={{color: 'black', marginTop: 30, fontSize: 20, fontWeight: 'bold', color: '#FF4500'}}>Đặt phòng thành công!</Text>
                      <Text style={{color: 'black', marginTop: 10,fontSize: 16, fontWeight: 'bold', color: '#FF4500'}}>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi</Text>
                      <Image source={{uri: 'https://i.imgur.com/s1Cyoz4.png'}} 
                             style={{resizeMode: 'contain', width: 150, height: 150, marginTop: 10}}
                      />
                      <TouchableOpacity style={{}}
                                        onPress={() => navigation.navigate('Đặt chỗ của tôi', {
                                                                                               infoRoomOder,
                                                                                               dateOder,
                                                                                               dateReturnOder,
                                                                                              })}>
                        <LinearGradient
                          colors={['#F08080', '#FF6347', '#FF4500']}
                          start={{x: 0, y: 0.5}}
                          end={{x: 1, y: 1}}
                          
                          style={{alignItems: 'center', marginHorizontal: 20, paddingVertical: 10, 
                                  paddingHorizontal: 20, borderRadius: 10, marginTop: 20,}}>
                          <Text style={{ fontSize: 15, fontWeight:'bold', color: 'white', paddingHorizontal: 20, paddingVertical: 0}}
                            >Xem phòng đã đặt</Text>
                        </LinearGradient>      
                      </TouchableOpacity>
                     
                  </View>
                  
                </View>
            </Modal>

        
          
          <View style={{height: 200}}></View>
          
        </ScrollView>
        )}
  
    </View>
  )
}

export default CheckIn

const styles = StyleSheet.create({})