import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Order_Tab = ({ navigation, route}) => {

  const [listRoomOder, setListRoomOder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [check, setcheck] = useState(true)
  const [modalAccess, setModalAccess] = useState(false);
  
  const date = route.params.dateOder;
  const dateReturn = route.params.dateReturnOder;

  const checkID = () => {
      if (infoRoomOder == null){
      return false;
    }
    return true;
  }
  /* const checkIDRoom = checkID(); */

 /*  const checkDate =() =>{
    if(date.getDate == dateReturn.getDateReturn && date.getMonth == dateReturn.getMonthReturn && date.getYear == dateReturn.getYearReturn)
      return true;
    return false;
  }
 */
    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get(`http://192.168.1.3:3000/list-hotel-customer/62c0816aa1df677430c0ec7e`);
          setListRoomOder(response);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      }
      fetchData();
    }, []);


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
    <ScrollView style={{ marginHorizontal: 10, marginTop : 10,}}>
      {listRoomOder.map((item, index) => 
       <View key={index} style={{ marginTop : 10, paddingVertical: 20,  backgroundColor: 'white', borderRadius: 10,
       shadowColor: "#000",
       shadowOffset: {
         width: 0,
         height: 6,
       },
       shadowOpacity: 0.37,
       shadowRadius: 7.49,
       
       elevation: 12,}}>
   <View style={{alignItems: 'center', flexDirection: 'row', marginLeft: 10}}>
     <Image 
     style={{ resizeMode: 'cover', width: 80, height : 80, borderRadius: 7, }} 
     source={{uri: item.img}} />
     <View style={{height: 80, marginLeft: 10}}>
     <Text numberOfLines={2} style={{ fontWeight: 'bold', fontSize: 15, color: 'black', width: 220}}>
       {item.nameRoom}</Text>
       <Text style={{ fontSize: 13, color: 'gray' }}>
       {item.numberPeople} khách • {item.numberBedRoom} phòng ngủ • {item.numberBathRoom} phòng tắm
       </Text>
       <Text style={{fontSize: 12, color: 'gray'}}>{item.detailLocation}</Text>
       <Text style={{fontSize: 12, color: 'black', marginTop: 5, fontWeight: '500'}}>Giá: {item.priceMon_Fri}₫ / 1 đêm</Text>
     </View>
   </View>
   {/* <View style={{marginLeft: 10, marginTop : 10, flexDirection: 'row'}}>
     <Text style={{fontSize: 13.5, color: 'black', fontWeight: '500'}}>Ngày đặt phòng : </Text>
     <Text style={{color: 'black', fontWeight: '400', fontSize: 13}}>
     {date.getDay}, {date.getDate}/{date.getMonth +1}/{date.getYear}</Text>
   </View>
   {checkDate()? null 
   : <View style={{marginLeft: 10, marginTop : 5, flexDirection: 'row'}}>
       <Text style={{fontSize: 13.5, color: 'black', fontWeight: '500'}}>Ngày trả phòng : </Text>
       <Text style={{color: 'black', fontWeight: '400', fontSize: 13}}>
         {dateReturn.getDayReturn}, {dateReturn.getDateReturn}/{dateReturn.getMonthReturn +1}/{dateReturn.getYearReturn}</Text>
     </View>
   } */}
   <View style={{flexDirection: 'row',marginTop: 30, justifyContent: 'space-between', marginHorizontal: 20}}>
     <TouchableOpacity
         onPress={ () => {
           setModalAccess(!modalAccess)
           
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

     <TouchableOpacity
         onPress={() => navigation.navigate('Phòng đã đặt', {idRoomSuggest: listRoomOder._id})}>
       <LinearGradient
       colors={['#F08080', 'orange', 'orange']}
       start={{x: 0, y: 0.5}}
       end={{x: 1, y: 1}}
       style={{alignItems: 'center', paddingVertical: 7, paddingHorizontal: 10, borderRadius: 10}}>
       <Text style={{ fontSize: 15, fontWeight:'bold', color: 'white', paddingHorizontal: 20, paddingVertical: 0}}
         >Xem chi tiết</Text>
       </LinearGradient>
     </TouchableOpacity>    
   </View>
 </View>
      )}
     
      
      <Text style={{color: 'black', textAlign: 'center', marginTop: windowHeight/2.5}}>Bạn chưa đặt phòng</Text>
      
      
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
      
      
        
    </ScrollView>
  </View>
  )
}

export default Order_Tab

const styles = StyleSheet.create({})