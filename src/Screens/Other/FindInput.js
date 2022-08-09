import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const FindInput = ({ navigation, route}) => {
  
  const [searchText, setSearchText] = useState(null); 
  const [resultFind, setResultFind] = useState(null);

  const listLocation = route.params.listLocation;

  useEffect(() => {
    /* setStringValue = async () => {
      try {
        await AsyncStorage.setItem('key', JSON.stringify(listLocation))
      } catch(e) {
        // save error
      }
      console.log('Done.')
    }
    setStringValue(); */

    getMyStringValue = async () => {
      try {
        //let result = JSON.parse(await AsyncStorage.getItem('key')); chuyển dạng string sắp xếp từ a-z
        let result = await AsyncStorage.getItem('key');
        setResultFind(result);
      } catch(e) {
        // read error
      }
      //console.log('Done');
    }
    getMyStringValue();
  },[]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        //searchText? console.log('yes') : console.log('no'); 
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        console.log(searchText);
        searchText? console.log('yes') : console.log('no'); 
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [searchText]);


  return (
    <View style={{marginLeft: 20}}>
        <View elevation={2} style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', marginRight: 20, backgroundColor: '#E8E8E8', borderRadius: 10}}>
            <TouchableOpacity onPress= {() => navigation.goBack()}>
            <Image
                style= {{width: 20, height: 24, resizeMode: 'contain', tintColor: 'gray', marginLeft: 20,}}
                source = {{uri: 'https://i.imgur.com/uMBhak9.png'}}/>
            </TouchableOpacity>
            <TextInput 
              placeholder='Thử tìm kiếm `Hà Nội`'
              placeholderTextColor={'gray'}
              style={{ marginLeft: 20, color: 'black'}}
              onChangeText={setSearchText}
              autoFocus={true}
            />
        </View>

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
    </View>
  )
}

export default FindInput

const styles = StyleSheet.create({})