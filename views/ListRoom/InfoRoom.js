import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InfoRoom = ({navigation}) => {

    const info = [
        {
            code: 68886,
            type: 'CĂN HỘ DỊCH VỤ',
            title: 'Amazing Stay - Homestay, 1 Phòng Ngủ, 60m2, View Thành Phố, Ban Công - Dịch Vọng',
            location: 'Cầu Giấy, Hà Nội, VietNam',
            typeRoom: 'Phòng riêng',
            numberBedRoom: 1,
            numberBathRoom: 1,
            numberBed: 1,
            numberPeople: 2,
        }
    ]

    const listImage = [
        {
            img1: 'https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png',
            img2: 'https://cdn.luxstay.com/users/329302/gZYx2s7zKDzsfvTSPeAuSy5H.jpg',
            img3: 'https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png',
        },
        {
            img1: 'https://cdn.luxstay.com/rooms/37700/large/z1524272492025_605d495f57bc2c7b817fafb9bb5abbe8.jpg',
            img2: 'https://cdn.luxstay.com/rooms/37700/large/IMG_2698.jpg',
            img3: 'https://cdn.luxstay.com/rooms/37700/large/IMG_2689.jpg',
        },
    ]

  return (
     <View style={{}}>
         {/* Tab Top */}
         <View 
          style={{backgroundColor: 'white', height: 60, width: '100%', flexDirection: 'row',
                 alignItems: 'center' , borderBottomColor: '#DCDCDC', borderBottomWidth: 1,}}>
            <TouchableOpacity  style={{marginLeft: 10, paddingVertical: 10, paddingHorizontal: 20}}>
                <Image
                    style={{resizeMode: 'contain', width: 30, height: 30, tintColor: 'orange',}} 
                    source= {{uri: 'https://img.icons8.com/material/344/back--v1.png'}}
                />
            </TouchableOpacity>
            <TouchableOpacity  style={{marginLeft: 200,}}>
                <Image 
                    style={{resizeMode: 'contain', width: 30, height: 30, tintColor: 'gray',}} 
                    source= {{uri: 'https://img.icons8.com/material/344/share-rounded.png'}} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 30,}}>
                <Image 
                    style={{resizeMode: 'contain', width: 30, height: 30, tintColor: 'gray'}} 
                    source= {{uri: 'https://img.icons8.com/metro/72/like.png'}} 
                />
            </TouchableOpacity>
         </View>

        <ScrollView>
            <Image source={{uri: 'https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png'}}
                   style={{resizeMode: "cover", width: windowWidth, height: 180}}
            />
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: -20}}>
                <Image source={{uri: 'https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png'}}
                    style={{resizeMode: "center", width: 130, height: 130}} />
                <Image source={{uri: 'https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png'}}
                    style={{resizeMode: "center", width: 130, height: 130}} />
                <Image source={{uri: 'https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png'}}
                    style={{resizeMode: "center", width: 130, height: 130}} />
                </View>
            {info.map((item, index) =>
                <View key={index} style={{marginLeft: 15}}>
                    <Text style={{fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 14}}>{item.type}</Text>
                    <View style={{position: 'absolute', right: 15, top: -20, alignItems: 'center'}}>
                        <Image style={{width: 60, height: 50, tintColor:'#FFE4C4'}} source={{uri: 'https://i.imgur.com/gHwgr3O.png'}}/>
                        <Text style={{position: 'absolute', fontSize: 10, fontWeight: '500', top: 2, color: '#FF6633'}}>Mã chỗ ở</Text>
                        <Text style={{position: 'absolute', fontSize: 10, fontWeight: '500', top: 18, color: '#FF6633'}}>{item.code}</Text>
                    </View>

                    {/* title */}
                    <View style={{marginTop: 10, maxWidth: 270,}}>
                        <Text style={{fontFamily: 'Roboto', fontWeight: 'bold', 
                                    fontSize: 19, color: 'black',}}>{item.title}
                        </Text>
                        <Image style={{resizeMode: 'contain',width: 15, height: 15, tintColor:'#A9A9A9', marginTop: 10,}} 
                               source={{uri: 'https://i.imgur.com/OILahL1.png'}}/>
                        <Text style={{ position: 'absolute', left: 20, top: 80}}>{item.location}</Text>
                    </View>
                    {/* infoRoom */}
                    <View style={{height: 90, backgroundColor: '#E8E8E8', marginTop: 25, marginRight: 15}}>
                        <View style={{marginTop: 10, marginLeft: 20}}>
                            <Image style={{resizeMode: 'contain',width: 15, height: 15, tintColor:'#A9A9A9',}} 
                                source={{uri: 'https://i.imgur.com/QfbNL3x.png'}}/>
                            <Text style={{position: 'absolute', fontSize: 13, color: 'gray', left: 25}}>{item.typeRoom}</Text>
                        </View>
                        <View style={{marginTop: 10, marginLeft: 20}}>
                            <Image style={{resizeMode: 'contain',width: 15, height: 15, tintColor:'#A9A9A9',}} 
                                source={{uri: 'https://i.imgur.com/Vbs6Qof.png'}}/>
                            <Text style={{position: 'absolute', fontSize: 13, color: 'gray', left: 25}}>{`${item.numberBathRoom} phòng tắm`}</Text>
                        </View>
                        <View style={{marginTop: 10, marginLeft: 20}}>
                            <Image style={{resizeMode: 'contain',width: 15, height: 15, tintColor:'#A9A9A9',}} 
                                source={{uri: 'https://i.imgur.com/pl3Yy1K.png'}}/>
                            <Text style={{position: 'absolute', fontSize: 13, color: 'gray', left: 25}}>{`${item.numberPeople} khách (tối đa ${item.numberPeople + 1} khách)`}</Text>
                        </View>
                        <View style={{position: 'absolute', left: 200, flexDirection: 'row', top: 10,}}>
                            <Image style={{resizeMode: 'contain',width: 15, height: 15, tintColor:'#A9A9A9',}} 
                                   source={{uri: 'https://i.imgur.com/vNp0aTC.png'}}/>
                            <Text style={{fontSize: 13, color: 'gray',marginLeft: 5}}>{`${item.numberBedRoom} phòng ngủ`}</Text>
                        </View>
                        <View style={{position: 'absolute', left: 200, flexDirection: 'row', top: 35}}>
                            <Image style={{resizeMode: 'contain',width: 15, height: 15, tintColor:'#A9A9A9',}} 
                                   source={{uri: 'https://i.imgur.com/8Oyx4Vr.png'}}/>
                            <Text style={{fontSize: 13, color: 'gray',marginLeft: 5}}>{`${item.numberBed} giường`}</Text>
                        </View>
                    </View>
                    <View style={{height: 50, marginTop: 30, backgroundColor: 'pink'}}>
                    </View>
                        
                </View>
            )}
        </ScrollView>

       {/*  Tab Bottom */}
         <View style={{ position: 'absolute', height: 80, left: 0, top: windowHeight - 100, width: windowWidth,
                        borderTopWidth: 1.5, borderTopColor: '#DCDCDC', backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontFamily: 'Roboto', fontSize: 21, fontWeight: 'bold', color: 'black', marginLeft: 15,
                        }}>900,000đ
            </Text>
            <Text style={{fontFamily: 'Roboto', marginLeft: 3, }}>x 1 đêm</Text>
            <View style={{marginLeft: 50, justifyContent: 'center'}}>
                <Image 
                    source={{uri: 'https://i.imgur.com/jb8kMOb.png'}}  
                    style={{width: 170, height: 45, borderRadius: 10}}
                />
                <Image 
                    source={{uri: 'https://i.imgur.com/KFwOsZ6.png'}}  
                    style={{position:'absolute', resizeMode: 'contain', height: 20, width: 20, left: 10,}}
                />
                <Text style={{position: 'absolute', left: 35, fontFamily: 'Roboto', fontWeight: 'bold', color:'white',
                              fontSize: 16
                            }}>Đặt phòng nhanh
                </Text>
            </View>
            
         </View>

     </View>
   )
}

export default InfoRoom

const styles = StyleSheet.create({})