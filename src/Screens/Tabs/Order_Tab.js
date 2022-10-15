import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../Context/AuthContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Order_Tab = ({ navigation, route}) => {

  const [listRoomOder, setListRoomOder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalAccess, setModalAccess] = useState(false);

  const {loadDataRoomOder, userInfo} = useContext(AuthContext);

  //AsyncStorage.removeItem('historyOder');
  useEffect(() => {
    //console.log('re-render-useEffect');
    const fetchData = async () =>{
      setLoading(true);
      try {
        const historyOder = JSON.parse(await AsyncStorage.getItem('historyOder'));
        setListRoomOder(historyOder);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, [loadDataRoomOder]);

  const validate =(date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}-${newDate.getMonth()+ 1}-${newDate.getFullYear()}`
  }

  const submitButtonCancel = async(i) => {
    const a1 = listRoomOder.slice(0, i);
    const a2 = listRoomOder.slice(i + 1, listRoomOder.length);
    const listRoomOderUpdate = a1.concat(a2);
    await AsyncStorage.setItem('historyOder', JSON.stringify(listRoomOderUpdate));
    setListRoomOder(listRoomOderUpdate);
  }

  return (
    /* Tab top */
    <View style={{}}>
      <View style={{backgroundColor: '#F8F8F8',height: 50, width: '100%',
                borderBottomColor: '#DCDCDC', borderBottomWidth: 1,}}>
        <View style={{alignItems: 'center', flexDirection: 'row',justifyContent: 'center', height: 50}}>
            <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>Phòng đã đặt</Text>
        </View>
      </View>
    {/* Body */}
    {listRoomOder?
    <ScrollView style={{ marginHorizontal: 10, marginTop : 10,}}>
      {listRoomOder.map((item, index) => 
       <TouchableOpacity key={index} style={{ marginTop : 10, paddingVertical: 20,  backgroundColor: 'white', borderRadius: 7, marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,}}
        onPress ={() => navigation.navigate('AppScreen', {screen : 'Thông tin phòng', params: {idRoomSuggest: item.hotel, hideBottom: true}})}>

        <View style={{alignItems: 'center', flexDirection: 'row', marginLeft: 10}}>
          <Image 
          style={{ resizeMode: 'cover', width: 80, height : 80, borderRadius: 7, }} 
          source={{uri: item.infoRoomOder.img}} />
          <View style={{height: 80, marginLeft: 10}}>
            <Text numberOfLines={2} style={{ fontWeight: 'bold', fontSize: 14.5, color: 'black', width: 220}}>
            {item.infoRoomOder.nameRoom}</Text>
            <Text style={{ fontSize: 13, color: 'gray', marginTop: 5}}>
            {item.infoRoomOder.typeRoom} • {item.infoRoomOder.numberBedRoom} phòng ngủ • {item.infoRoomOder.numberBathRoom} phòng tắm</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>{item.infoRoomOder.detailLocation}</Text>
          </View>
        </View>
        <View elevation={4} style={{ backgroundColor: '#F0F0F0', marginTop: 20, borderRadius: 10, marginLeft: 10, marginRight: 30}}>
          <View style={{ marginTop: 10, flexDirection: 'row', marginLeft: 10}}>
            <Text style={{fontSize: 13.5, color: 'black', fontWeight: '500'}}>Ngày nhận phòng : </Text>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 13}}>{item.getDay}, </Text>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 13}}>{validate(item.dateOder)}</Text>
          </View>
          <View style={{ marginTop: 10, flexDirection: 'row', marginLeft: 10}}>
            <Text style={{fontSize: 13.5, color: 'black', fontWeight: '500'}}>Ngày trả phòng : </Text>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 13}}>{item.getDayReturn}, </Text>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 13}}>{validate(item.dateReturn)}</Text>
          </View>
          <View style={{ marginTop: 10, flexDirection: 'row', marginLeft: 10}}>
            <Text style={{fontSize: 13.5, color: 'black', fontWeight: '500'}}>Tổng tiền : </Text>
            <Text style={{color: 'black', fontWeight: '400', fontSize: 13, fontWeight: 'bold'}}>{item.totalPrice}đ </Text>
          </View>
          
          <View style={{ marginTop: 10, flexDirection: 'row',marginLeft: 10}}>
            <Text style={{fontSize: 13.5, color: 'black', fontWeight: '500'}}>Tình trạng thanh toán : </Text>
            {item.status_payment == 0 ? 
            <Text style={{color: 'black', fontSize: 13.5, fontWeight: '400', fontStyle: 'italic', 
                  color: 'red', textDecorationLine: 'underline'}}>Chưa thanh toán</Text>
            :
            <Text style={{color: 'black', fontSize: 14, fontWeight: '400',fontStyle: 'italic', color: 'green'}}>Đã thanh toán</Text>
            }
          </View>

          <View style={{ marginTop: 10, flexDirection: 'row',marginLeft: 10}}>
            <Text style={{fontSize: 13.5, color: 'black', fontWeight: '500'}}>Chủ nhà : </Text>
            {item.status_confirm == 0 ? 
            <Text style={{color: 'black', fontSize: 13.5, fontWeight: '400', fontStyle: 'italic', color: 'green'}}>Đã xác nhận</Text>
            :
            <Text style={{color: 'black', fontSize: 13.5, fontWeight: '400'}}>Chưa xác nhận</Text>
            }
          </View>
          {loading &&
          <View style={{marginLeft: 10}}>
            <View style={{ marginTop: 10, flexDirection: 'row'}}>
              <Text style={{fontSize: 13.5, color: 'black', fontWeight: '500'}}>Số người : </Text>
              <Text style={{color: 'black', fontSize: 13, fontWeight: '400'}}>{item.numberOfPeople} người lớn, {item.numberOfPeople} trẻ em</Text>
            </View>
            <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold', marginTop: 10}}>Thông tin người đặt</Text>
            <View style={{ marginTop: 10, flexDirection: 'row'}}>
              <Text style={{fontSize: 13.5, color: 'black', fontWeight: '500'}}>Họ tên :  </Text>
              <Text style={{color: 'black', fontSize: 13, fontWeight: '400'}}>{userInfo.name}</Text>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row'}}>
              <Text style={{fontSize: 13.5, color: 'black', fontWeight: '500'}}>SĐT :  </Text>
              <Text style={{color: 'black', fontSize: 13, fontWeight: '400'}}>{userInfo.username}</Text>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row'}}>
              <Text style={{fontSize: 13.5, color: 'black', fontWeight: '500'}}>Ngày đặt phòng : </Text>
              <Text style={{color: 'black', fontSize: 13, fontWeight: '400'}}>{validate(item.createdAt)}</Text>
            </View>
         </View>
          }
          <TouchableOpacity onPress={() => setLoading(!loading)}>
            <Text style={{fontSize: 13.5, color: '#FF8C00', textDecorationLine: 'underline', fontWeight: '500', textAlign: 'center',
                          marginLeft: 10, marginTop: 10, marginBottom: 10}}>Hiển thị thêm
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: 'row',marginTop: 30, justifyContent: 'space-between', marginHorizontal: 20}}>
          <TouchableOpacity
              onPress={ () => {
                /* setModalAccess(!modalAccess) */
                submitButtonCancel(index);
              }}>
              <LinearGradient
                colors={['#F08080', '#FF6347', '#FF4500']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 1}}
                style={{alignItems: 'center', paddingVertical: 7, paddingHorizontal: 10, borderRadius: 10}}>
                <Text style={{ fontSize: 15, fontWeight:'bold', color: 'white', paddingHorizontal: 20, paddingVertical: 0}}
                  >Hủy phòng</Text>
              </LinearGradient>
            </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 10}}>
            <LinearGradient
            colors={['#F08080', 'orange', 'orange']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={{alignItems: 'center', paddingVertical: 7, paddingHorizontal: 10, borderRadius: 10}}>
            <Text style={{ fontSize: 15, fontWeight:'bold', color: 'white', paddingHorizontal: 10}}
              >Liên hệ với chủ nhà</Text>
            </LinearGradient>
          </TouchableOpacity>    
        </View>
      </TouchableOpacity>
      )}
      <View style={{height: 200}}></View>
     
    </ScrollView>
    : <Text style={{color: 'black', textAlign: 'center', marginTop: windowHeight/2.5}}>Bạn chưa đặt phòng</Text>
    }
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
              <Text style={{color: 'black', marginTop: 30, fontSize: 20, fontWeight: 'bold', color: '#FF4500', textAlign: 'center'}}>Hủy phòng thành công!</Text>
              <Text style={{color: 'black', marginTop: 10,fontSize: 16, fontWeight: 'bold', color: '#FF4500', textAlign: 'center'}}>Chúc bạn có trải nghiệm thật vui vẻ</Text>
            <Image source={{uri: 'https://i.imgur.com/TnJMVQ7.png'}} 
                   style={{resizeMode: 'contain', width: 150, height: 150, marginTop: 10}}/>
            </View>
          </View>
      </Modal>
  </View>
  )
}

export default Order_Tab

const styles = StyleSheet.create({})