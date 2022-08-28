import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, Keyboard, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../../Config';


const FindInput = ({ navigation, route}) => {
  
  const [searchText, setSearchText] = useState(null); 
  const [resultFind, setResultFind] = useState([]);
  const [loading, setLoading] = useState(false);

  const [listLocationResult, setListLocationResult] = useState(null);
  const [detailLocation, setDetailLocation] = useState(null);
  const [listHotel, setListHotel] = useState(null);
  

  const listLocation = route.params.listLocation;

  useEffect(() => {
    const getData_AsyncStorage = async () => {
      try {
        let result = JSON.parse(await AsyncStorage.getItem('textSearchRecently'));
        if(result == null) setResultFind([]);
        else setResultFind(result);
      } catch(e) {
        console.log(e.message);
      }
    }
    getData_AsyncStorage();
    //AsyncStorage.removeItem('textSearchRecently');
  },[]);

  useEffect(() => {
    setLoading(true);
    setTimeout(async() => {
      try {
        const {data : response} = await axios.post(`${BASE_URL}/search` ,{keyword: searchText})
        setListLocationResult(response.location);
        setDetailLocation(response.detailLocation);
        setListHotel(response.hotel);

      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
      
    }, 2000);
  },[searchText])

  const changeText = (str) => {
    let newStr = str.toLowerCase();
    let newSearchText = searchText.toLowerCase();
    let strHead = str.slice(0,newStr.search(newSearchText)); // lấy đoạn chuỗi trước text value
    let strValue = str.substr(strHead.length ,newSearchText.length); // lấy đoạn text value
    let StrLast = str.slice(strHead.length + strValue.length); // lấy đoạn chuỗi còn lại
    //console.log(newStr.search(newSearchText));
    let strResult = [];
    strResult.push(strHead,strValue,StrLast)
    return strResult;
  }



  

/*   const setData =() => {
    setLoading(true);
    resultFind.push('Day la 3');
    const setData_AsyncStorage = async () => {
      try {
        await AsyncStorage.setItem('textSearchRecently', JSON.stringify(resultFind));
      } catch(e) {
        console.error(error.message);
      }
      setLoading(false);
    }
    setData_AsyncStorage();
  } */

  
  

  const ResultInput = () => {
    return (
      <View>
        {loading ? 
        <View style={{justifyContent: 'center', marginTop: 30, flexDirection: 'row'}}>
          <Text style={{color: 'black', marginTop: 10}}>Loading...</Text>
          <ActivityIndicator size="small" color="orange" />
        </View>
        :
        <View>
        {listLocationResult || detailLocation !== null && listLocationResult || detailLocation !== undefined ?
        <View style={{marginTop: 10, marginRight: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: '#FF4500', fontSize: 20}}>l</Text>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 17, marginLeft: 10}}>Điểm đến</Text>
          </View>
          {listLocationResult.map((item, index ) => 
            <View key={index} style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
              <Image style={{resizeMode: 'contain', width: 15, height: 15}}
                    source={{uri : 'https://i.imgur.com/pDvAxbp.png'}} />
              {/* <Text style={{marginLeft: 10, fontSize: 15}}>{item.name}</Text> */}
              
                <View style={{flexDirection: 'row', marginLeft: 10, }}>
                  {changeText(item.name).map((pre, key) => 
                  <Text key={key} style={{fontSize: 15, fontWeight: pre.toLowerCase() == searchText ? 'bold' : null}}>{pre}</Text>
                  )} 
                </View>
               
            </View>
          )}
          {detailLocation.map((item, index) => 
          <View key={index} style={{marginTop: 10, flexDirection: 'row', alignItems: 'center', marginRight: 20}}>
            <Image style={{resizeMode: 'contain', width: 15, height: 15}}
                  source={{uri : 'https://i.imgur.com/pDvAxbp.png'}} />
            <View style={{flexDirection: 'row', marginLeft: 10, }}>
                  {changeText(item).map((pre, key) => 
                  <Text key={key} style={{fontSize: 15, fontWeight: pre.toLowerCase() == searchText ? 'bold' : null}}>{pre}</Text>
                  )} 
                </View>
          </View>
          )}
        </View> : null}
        
        {listHotel !== undefined ? 
        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: '#FF4500', fontSize: 20}}>l</Text>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 17, marginLeft: 10}}>Chỗ ở</Text>
          </View>
          {listHotel.map((item, index) =>
          <View key={index} style={{marginTop: 10, flexDirection: 'row', marginRight: 10}}>
            <Image style={{resizeMode: 'contain', width: 17, height: 17}}
                  source={{uri : 'https://i.imgur.com/RCWblIW.png'}} />
            {/* <Text style={{marginLeft: 10, fontSize: 15}}>{item.nameRoom}</Text> */}
            <TouchableOpacity style={{marginLeft: 10, maxWidth: '75%'}}>
              <View style={{flexDirection: 'row', }}>
              {changeText(item.nameRoom).map((pre, key) => 
                <Text key={key} style={{fontSize: 15, fontWeight: pre.toLowerCase() == searchText ? 'bold' : null}}>{pre}</Text>
              )} 
              </View>
          </TouchableOpacity>
          </View>
          )}
        </View> : null}
      </View>
      }
      </View>
    )
  }

 

  return (
    <ScrollView style={{marginLeft: 20}} contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
       
      <View elevation={2} style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', marginRight: 20, backgroundColor: '#E8E8E8', borderRadius: 10}}>
          <TouchableOpacity onPress= {() => navigation.goBack()}>
          <Image
              style= {{width: 20, height: 24, resizeMode: 'contain', tintColor: 'gray', marginLeft: 20,}}
              source = {{uri: 'https://i.imgur.com/uMBhak9.png'}}/>
          </TouchableOpacity>
          <TextInput 
            placeholder='Thử tìm kiếm `Hà Nội`'
            placeholderTextColor={'gray'}
            placeholderTextStyle={{fontWeight: 'bold'}}
            style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 14, color: 'gray'}}
            onChangeText={setSearchText}
            autoFocus={true}
          />
      </View>
      {searchText ? <ResultInput />
      :
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Text style={{color: 'orange', fontSize: 20, fontWeight: 'bold'}}>l</Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black', marginLeft: 10}}>Các thành phố nổi tiếng</Text>
        </View>

        <View style={{marginTop: 10}}>
          <ScrollView style={styles.location} 
            horizontal 
            showsHorizontalScrollIndicator={false}>
              {listLocation.map((item, index) => 
                  <TouchableOpacity key={index} style={{ alignItems: 'center', paddingRight: 25}} 
                                    onPress={() => navigation.navigate('AppScreen', {screen: 'Danh sách phòng', params: {idLocation : item._id, nameLocation: item.name}})}>
                    <Image 
                      style={{ width: 50, height: 50, resizeMode: 'contain',}}
                      source={{uri: item.image}} />
                    <Text
                      numberOfLines={1} 
                      style={{marginTop: 10, color: 'black', fontSize : 12, fontWeight : '500'}}>{item.name.length > 9 ? `${item.name.slice(0,10)}...` : item.name}</Text>
                  </TouchableOpacity>
              )} 
          </ScrollView>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Text style={{color: 'orange', fontSize: 20, fontWeight: 'bold'}}>l</Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black', marginLeft: 10}}>Tìm kiếm gần đây</Text>
        </View>

        <View style={{marginTop: 10}}>
          {resultFind? resultFind.map((item, index) =>
            <View key={index}>
              <Text style={{color: 'black'}}>{item}</Text>
            </View> 
          ): null}

          <TouchableOpacity onPress={() => setData()}>
            <Text style={{marginTop: 20, color: 'black'}}>CLICK HEREEEEEE</Text>
          </TouchableOpacity>
          
        </View>
      </View>
      }
      

      
      <View style={{height: 700}}></View>
    </ScrollView>
  )
}

export default FindInput

const styles = StyleSheet.create({})