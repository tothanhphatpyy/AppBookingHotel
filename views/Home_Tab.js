import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, Alert, TouchableHighlight, ActivityIndicator, ActivityIndicatorComponent} from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Home_Tab = ( {navigation} ) => {

  const [colorEvent, setColorEvent] = useState(0);
  const [listLocation, setListLocation] = useState([]);
  const [listRoomSuggest, setListRoomSuggest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`http://192.168.1.3:3000/location`);
        setListLocation(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const renderHotel = async (idLocation) => {
      setLoading(true);
      try {
        const {data: response} = await axios.get(`http://192.168.1.3:3000/list-hotel/${idLocation}`);
        setListRoomSuggest(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
  }

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`http://192.168.1.3:3000/list-hotel/62bc561974566b1417c880e2`);
        setListRoomSuggest(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);



  const listVoucher =[
    {
      name: 'Momo',
      image: require('./img/VoucherMoMo.jpg')
    },

    {
      name: 'Zalo',
      image: require('./img/VoucherZalo.png')
    },

    {
      name: 'Airpay',
      image: require('./img/VoucherAirpay.jpg')
    },
  ];
  const listLocationSuggest =[
    {
      image: require('./img/homestay1.jpg'),
      title: 'Vi vu ngoại thành Hà Nội',
      note: 'Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà Nội',
    },

    {
      image: require('./img/homestay2.jpg'),
      title: 'Vũng Tàu Biệt thự hồ bơi',
      note: 'Những biệt thự có hồ bơi dành cho kỳ nghỉ của bạn tại Vũng Tàu',
    },

    {
      image: require('./img/homestay3.jpg'),
      title: 'Sài gòn cần là có ngay',
      note: 'Những căn homestay có 01 phòng ngủ tại Sài Gòn có thể đặt nhanh chóng',
    },

    {
      image: require('./img/homestay4.jpg'),
      title: 'Bể bơi & BBQ',
      note: 'Trải nghiệm đẳng cấp tại những căn homestay có bể bơi đẹp và khu vực BBQ ấm cúng',
    }
  ];
 

  return (
    <View style={styles.container}>
       <StatusBar
        animated={true}
        backgroundColor="black" />
      <ScrollView style={styles.scrollView}>
        <View>
          <Image
            style= {styles.imgLogo}
            source = {require('./img/logo.png')}
          />
              <Text style={styles.textAnswer}>Bạn muốn đi đâu?</Text>
        </View>
        <TouchableOpacity style={styles.search}>
          <Image
              style= {styles.imgIc_search}
              source = {require('./img/ic_search.png')}    
          />
          <Text style={styles.findInput}>Thử tìm kiếm Hà Nội</Text>
        </TouchableOpacity>
        {/* location */}
        <ScrollView style={styles.location} 
          horizontal 
          showsHorizontalScrollIndicator={false}>
            {listLocation.map((item, index) => 
                <TouchableOpacity key={index} style={{ alignItems: 'center', paddingRight: 25}} 
                                  onPress={() => navigation.navigate('Danh sách phòng', {idLocation : item._id, nameLocation: item.name})}>
                  <Image 
                    style={styles.itemImage}
                    source={{uri: item.image}} />
                  <Text
                    numberOfLines={1} 
                    style={{marginTop: 10, color: 'black', fontSize : 12, fontWeight : '500'}}>{item.name.length > 9 ? `${item.name.slice(0,10)}...` : item.name}</Text>
                </TouchableOpacity>
            )} 
        </ScrollView>

        {/* Service */}
        <ScrollView 
          style={{flexDirection: 'row'}}
          horizontal 
          showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={{ 
              width: '40%',
              borderWidth: 1,
              borderColor: '#E2E2E2',
              borderRadius: 10,
              paddingBottom: 10,
            }}>
              <Image 
                style={{height: 100, borderTopLeftRadius: 7, borderTopRightRadius: 7}}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDAGqSd3F8vuVO4VXWmWzdGB1C_JBDfTSxg&usqp=CAU'}} />
              <View style={{paddingLeft: 10}}>
                <Text style={{fontWeight: 'bold', color:'black', paddingVertical: 4, fontSize: 16}}>Homestay</Text>
                <Text numberOfLines={1} style={{fontSize: 13, color: '#484848'}}>Căn hộ dịch vụ đặc biệt dành cho các bạn trẻ</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ 
              width: '40%',
              borderWidth: 1,
              borderColor: '#E2E2E2',
              borderRadius: 10,
              paddingBottom: 10,
              marginLeft: 10,
            }}>
              <Image 
                style={{height: 100, borderTopLeftRadius: 7, borderTopRightRadius: 7}}
                source={{uri: 'https://khuvuichoi.com/wp-content/uploads/2020/10/cong-vien-nuoc-thanh-long-1.jpg'}} />
              <View style={{paddingLeft: 10}}>
                <Text style={{fontWeight: 'bold', color:'black', paddingVertical: 4, fontSize: 16}}>Vé tham quan</Text>
                <Text numberOfLines={1} style={{fontSize: 13,color: '#484848'}}>Mua vé thật dễ dàng</Text>
              </View>
            </TouchableOpacity>
        </ScrollView>

        {/* Sale */}
        <View style={{marginTop: 30,}}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>Ưu đãi độc quyền</Text>
            <Text style={{color: '#707070', marginTop: 5}}>Chỉ có tại Luxstay, hấp dẫn và hữu hạn, book ngay!</Text>
          </View>
          <ScrollView
            style={{ marginTop : 20}}
            horizontal 
            showsHorizontalScrollIndicator={false}>
            {listVoucher.map((item, index) => 
            <TouchableOpacity key={index}
                              onPress={() => navigation.navigate('Voucher')}>
              <Image key={index} style={{flex: 1,resizeMode: 'contain', height: 160, width: 320, borderRadius: 10, marginRight: 10 }}  source={item.image} />
            </TouchableOpacity>
                
            )}
          </ScrollView>
        </View>

        {/* Suggest */}
        <View style={{marginTop: 30,marginRight: 10,}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>Gợi ý từ Luxstay</Text>
          <ScrollView 
            horizontal
            style={{}}
            showsHorizontalScrollIndicator={false}>
              
              {listLocationSuggest.map((item, index) =>   
              <TouchableOpacity 
                key={index} 
                style={{marginTop: 20, marginRight: 10,elevation: 1.5, }}>
              <Image 
                  style={{resizeMode: 'contain', height: 200, width: 310, borderTopLeftRadius: 10,borderTopRightRadius: 10 }}
                  source={item.image} />
              <View style={{ marginLeft: 20}}>
                <Text style={{marginTop: 8,fontWeight: 'bold', color: 'black', fontSize: 17}}>{item.title}</Text>
                <Text style={{marginTop: 2,color: '#484848', maxWidth: 280}}>{item.note}</Text>
              </View>
              </TouchableOpacity>
              )}
             
             
          </ScrollView>
        </View>

        {/* Suggest Location */}
        <View style={{marginRight: 10}}>
          <View style={{marginTop: 30,}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>Trải nghiệm đáng nhớ</Text>
            <Text style={{color: 'gray', marginTop: 5}}>Ở mỗi thành phố xa xôi, giữ lại cho mình một chốn dừng chân ấm áp</Text>
          </View>
          <ScrollView 
            style={{marginTop: 25, flex: 1, paddingVertical:5 }}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {/* <Text style={{backgroundColor: 'pink', textAlign: 'center', paddingVertical: 2, marginRight: 290 }}>Hà Nội</Text> */}
            {listLocation.map((item, index) => 
              <TouchableHighlight key={index}>
              <Text 
                style={{flex: 1, marginRight: 20, borderWidth: 0.5, borderColor: 'gray', fontWeight: 'bold', color: index == colorEvent ? 'white'  : 'black',
                        backgroundColor: index == colorEvent ? 'orange'  : 'white', paddingHorizontal: 15, paddingVertical: 3, textAlign: 'center', fontSize: 13,
                        borderRadius: 15}}
                        onPress={() => {
                          setColorEvent(index);
                          renderHotel(item._id);          
                         }}
                       >
                {item.name}
              </Text>
              </TouchableHighlight>   
            )}  
          </ScrollView>

          {/* SuggetRoom */}
          <View style={{flex: 1}}>
            {loading && (
              <View style={{justifyContent: 'center', marginTop: 30, flexDirection: 'row'}}>
              <Text style={{color: 'black', marginTop: 10}}>Loading...</Text>
              <ActivityIndicator size="large" color="orange" />
              </View>
            )}
            {!loading && ( 
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginRight: 5}}>
                {listRoomSuggest.map((item, index) => 
                  <TouchableOpacity 
                    key={index}
                    onPress={() => navigation.navigate('Thông tin phòng', {idRoomSuggest: item._id})}
                    >              
                      <Image style={{marginTop: 20, height: 100, width: 150, resizeMode: 'contain', borderRadius: 5}} 
                              source= {{uri: `${item.img}`}} />  
                      <TouchableOpacity
                          onPress={() => {}} 
                          style={{position: 'absolute',right: 12, top: 25,}}>
                          {
                            false == false ? <Image key={index} style={{resizeMode:'contain', height: 20, width: 20,}} source={require('./img/heart.png')} />
                            : 
                            <Image key={index} style={{resizeMode:'contain' ,height: 20, width: 20, }} source={require('./img/heart_change.png')}/>     
                          }     
                      </TouchableOpacity>    
                      <View style={{ marginTop: 5,width: 150}}> 
                        <Text numberOfLines={1} style={{fontWeight: 'bold', fontSize: 10, color:'gray'}}>{item.type}</Text>
                        {(item.type =='CĂN HỘ STUDIO 21m²' || item.type =='CĂN HỘ STUDIO 45m²'|| item.type =='BIỆT THỰ 120m²') 
                          ? <Image style={{position: 'absolute', height: 30, width: 35, right: 0, resizeMode: 'contain'}} 
                                 source={{uri : 'https://i.imgur.com/MgnYDVV.png'}} /> 
                          : <Text style={{position: 'absolute'}}></Text>
                        } 
                        {(item.type =='BIỆT THỰ 120m²')?
                          <Text style={{position: 'absolute', fontFamily: 'Roboto', fontSize: 11, 
                                fontWeight: 'bold', color: 'white', height: 20, width: 40, right: -20, top: 5}}>8%
                          </Text>
                          :
                          <Text style={{position: 'absolute', fontFamily: 'Roboto', fontSize: 11, 
                                fontWeight: 'bold', color: 'white', height: 20, width: 40, right: -20, top: 5}}>5%
                          </Text>
                        }
                        <Text numberOfLines={2} style={{marginLeft: 12, marginTop: 5, fontWeight: 'bold', fontSize: 13, color: 'black'}}>{item.nameRoom}</Text>
                        <Image style={{position: 'absolute',resizeMode:'contain' , height: 15, width: 35, left:-13, top: 27}} 
                               source={{uri : 'https://i.imgur.com/YgsvlvC.png'}} />
                        <Text numberOfLines={1} style={{color: '#484848', fontSize: 11, marginLeft: 5}}>
                          {item.numberPeople} khách • {item.numberBedRoom} phòng ngủ • {item.numberBathRoom} phòng tắm
                        </Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginTop: 5}}>
                            <Text numberOfLines={1} style={{fontWeight: 'bold', fontSize: 13, color: 'black'}}>
                              {item.priceMon_Fri}đ̲
                            </Text>
                            {(item.type =='CĂN HỘ STUDIO 21m²' || item.type =='CĂN HỘ STUDIO 45m²'|| item.type =='BIỆT THỰ 120m²')
                              ?<Text numberOfLines={1} style={{textDecorationLine: 'line-through', fontWeight: 'bold', fontSize: 12, color: 'gray', marginLeft: 10}}>
                                {item.priceDiscount}đ̲
                              </Text>
                              : null}
                        </View>
                        <View style={{flexDirection: 'row',marginTop: 5}}>
                          <Image style={{marginRight:2, resizeMode:'contain', height: 15, width: 15}} source={{uri : 'https://i.imgur.com/uKuzGT8.png'}} />
                          <Image style={{marginRight:2, resizeMode:'contain', height: 15, width: 15}} source={{uri : 'https://i.imgur.com/uKuzGT8.png'}} />
                          <Image style={{marginRight:2, resizeMode:'contain', height: 15, width: 15}} source={{uri : 'https://i.imgur.com/uKuzGT8.png'}} />
                          <Image style={{marginRight:2, resizeMode:'contain', height: 15, width: 15}} source={{uri : 'https://i.imgur.com/uKuzGT8.png'}} />
                          <Image style={{marginRight:2, resizeMode:'contain', height: 15, width: 15}} source={{uri : 'https://i.imgur.com/uKuzGT8.png'}} />
                          {(item.type =='BIỆT THỰ 120m²')
                            ?<Text style={{marginLeft: 10 , fontSize: 11, color: '#484848'}}>7</Text>
                            :null}
                          {(item.type =='CĂN HỘ DỊCH VỤ 62m²')?<Text style={{marginLeft: 10 , fontSize: 11, color: '#484848'}}>21</Text> : null}
                          {(item.type =='CĂN HỘ STUDIO 21m²')?<Text style={{marginLeft: 10 , fontSize: 11, color: '#484848'}}>32</Text> : null}
                          {(item.type =='CĂN HỘ STUDIO 45m²')?<Text style={{marginLeft: 10 , fontSize: 11, color: '#484848'}}>28</Text> : null}
                          {(item.type =='CĂN HỘ DỊCH VỤ 35m²')?<Text style={{marginLeft: 10 , fontSize: 11, color: '#484848'}}>45</Text> : null}
                          

                        </View>
                      </View> 
                  </TouchableOpacity>
                )}
            </View>
            )}
          </View>
          <View style={{height: 200}}></View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home_Tab

const styles = StyleSheet.create({
    container: {
      flex : 1,
      paddingLeft: 15,
      backgroundColor: 'white',
    },

    imgLogo: {
      //aspectRatio: 0.65  , 
      backgroundColor: 'pink',
      resizeMode: 'cover',
      height: 100,
      width: 200,
      marginLeft: -30,
    },

    textAnswer: {
      marginBottom: 10,
      color: 'black',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 22,
      marginTop: 10,
    },
    search: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
      borderColor: 'gray',
      //backgroundColor: 'pink',
      shadowColor: "gray",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },

    imgIc_search: {
      // aspectRatio: 0.3  , 
      width: 24,
      height: 24,
      resizeMode: 'contain',
      tintColor: '#D3D3D3',
      marginLeft: 20,
    },

    findInput:{
      paddingVertical: 17,
      fontFamily: 'Roboto',
      marginLeft: 20,
      fontWeight: 'bold',
      fontSize: 14.5,
      color: 'gray',
    },

    location: {
      marginTop: 10,
      flexDirection: 'row',
      paddingVertical: 20,
    },

    img_list: {
      flex: 1,
      height : 60,
      width: 60,
      marginRight: 25,
   },
    itemImage: {
      flex: 1,
      width: 50, height: 50, resizeMode: 'contain',
    },


    

})