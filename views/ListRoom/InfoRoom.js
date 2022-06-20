import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InfoRoom = ({navigation}) => {
    const [styleText, setstyleText] = useState(0)
    const [hideText, sethideText] = useState(false)
    const [changeColor, setchangeColor] = useState(false)
    const info = [
        {   
            owner: 'Ngô Phương Mai',
            numberHotel: '3',
            code: 68886,
            type: 'CĂN HỘ DỊCH VỤ',
            nameRoom: 'The Galaxy Home - 1 Phòng Ngủ, 60m2, View Thành Phố, Ban Công - Dịch Vọng',
            location: 'Cầu Giấy, Hà Nội, Việt Nam',
            priceMon_Fri: '900.000',
            priceWeb_Sun: '950.000',
            typeRoom: 'Phòng riêng',
            numberBedRoom: 1,
            numberBathRoom: 1,
            numberBed: 1,
            numberPeople: 2,
            detail: [
                'Vị trí rất đẹp và thuận tiện ở quận Cầu Giấy.',
                'Gần công viên Cầu Giấy, Lotteria, trung tâm mua sắm với môi trường ngoài trời yên.',
                'Bạn hoàn toàn có thể trải nghiệm những dịch vụ cao cấp tại đây.Có nhiều dịch vụ tại chỗ khác nhau như giặt ủi, dịch vụ vệ sinh, Wi-Fi miễn phí tốc độ cao, an ninh 24/7.',
                'Căn hộ đều có tiện nghi sang trọng, điện thoại, kênh truyền hình cáp, TV màn hình phẳng, máy lạnh, khu vực phòng khách, máy giặt, tủ quần áo, giá treo quần áo, máy sấy tóc, phòng tắm, dép, vòi hoa sen, ghế sofa, sàn gỗ, tủ lạnh, lò vi sóng, đồ dùng nhà bếp, bàn ăn, khăn tắm, ga trải giường.',
            ]
        },
        
    ]

    const listImage = [
        {
            img1: 'https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png',
            img2: 'https://cdn.luxstay.com/users/329302/gZYx2s7zKDzsfvTSPeAuSy5H.jpg',
            img3: 'https://cdn.luxstay.com/admins/12/2TR6G7u6ua140zR2NI4yUJdG.png',
        },
    ]

    const listSuggest = [
        {
            name: 'Chi tiết'
        },
        {
            name: 'Đánh giá'
        },
        {
            name: 'Chính sách'
        },
        {
            name: 'Đề xuất'
        },
    ]
    const rules =[
        'Đưa đón sân bay: đưa đón từ sân bay Nội bài tới căn hộ The Galaxy Home chỉ với 400.000đ / chiều / xe 4 chỗ',
        'Không hút thuốc trong căn hộ',
        'Không sử dụng chất kích thích',
        'Không mở tiệc trong căn hộ',
        'Không mang theo vật nuôi',
        'Vui lòng giữ im lặng sau 22h',
        'Vui lòng tắt các thiết bị khi bạn ra khỏi phòng',
    ]

  return (
     <View style={{}}>
         {/* Tab Top */}
         <View 
          style={{backgroundColor: '#F8F8F8',height: 50, width: '100%', flexDirection: 'row',
                 alignItems: 'center' , borderBottomColor: '#DCDCDC', borderBottomWidth: 1,}}>
            <TouchableOpacity style={{marginLeft: -5, paddingVertical: 10, paddingHorizontal: 20}}
                              onPress={() => navigation.goBack()}>
                <Image
                    style={{resizeMode: 'contain', width: 30, height: 30, tintColor: 'orange'}} 
                    source= {{uri: 'https://img.icons8.com/material/344/back--v1.png'}}
                />
            </TouchableOpacity>
            <TouchableOpacity  style={{marginLeft: 180,}}>
                <Image 
                    style={{resizeMode: 'contain', width: 30, height: 30, tintColor: '#484848',}} 
                    source= {{uri: 'https://img.icons8.com/material/344/share-rounded.png'}} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 30,}}
                              onPress ={() => {
                              setchangeColor(!changeColor)
                              }}>
                {changeColor ? 
                     <Image 
                     style={{resizeMode: 'contain', width: 32, height: 32, tintColor: '#FF4500'}} 
                     source= {{uri:'https://i.imgur.com/nqv7cS5.png'}} /> 
                    :
                    <Image 
                    style={{resizeMode: 'contain', width: 30, height: 30, tintColor: '#484848'}} 
                    source= {{uri:'https://img.icons8.com/metro/72/like.png'}} /> 
                }

            </TouchableOpacity>
         </View>

        <ScrollView style={{backgroundColor: '#F9F9F9'}}>
            <Image source={{uri: `${listImage[0].img1}`}}
                style={{resizeMode: "cover", width: windowWidth, height: 180}}
                />
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 0}}>
                <Image source={{uri: 'https://cdn.luxstay.com/users/329302/gZYx2s7zKDzsfvTSPeAuSy5H.jpg'}}
                style={{resizeMode: "contain", width: (windowWidth / 3) - 2, height: 85}} />
                <Image source={{uri: 'https://cdn.luxstay.com/users/329302/W0VeOXy7lNzUTRkl4Zb0CbAr.jpg'}}
                style={{resizeMode: "contain", width: (windowWidth / 3) - 2, height: 85}} />
                <Image source={{uri: 'https://cdn.luxstay.com/users/329302/MQpA9aZKFtBvMNlFv8yS4-FL.jpg'}}
                style={{resizeMode: "contain", width: (windowWidth / 3) - 2, height: 85}} />
            </View>
            {info.map((item, index) =>
                <View key={index} style={{marginLeft: 15}}>
                <Text style={{fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 14}}>{item.type}</Text>
                <View style={{position: 'absolute', right: 15, alignItems: 'center'}}>
                    <Image style={{width: 60, height: 50, tintColor:'#FFE4C4'}} source={{uri: 'https://i.imgur.com/gHwgr3O.png'}}/>
                    <Text style={{position: 'absolute', fontSize: 10, fontWeight: '500', top: 2, color: '#FF6633'}}>Mã chỗ ở</Text>
                    <Text style={{position: 'absolute', fontSize: 10, fontWeight: '500', top: 18, color: '#FF6633'}}>{item.code}</Text>
                </View>

                {/* nameRoom */}
                <View style={{marginTop: 10, maxWidth: 270,}}>
                    <Text style={{fontFamily: 'Roboto', fontWeight: 'bold', 
                                fontSize: 18, color: 'black',}}>{item.nameRoom}
                    </Text>
                    <Image style={{resizeMode: 'contain',width: 15, height: 15, tintColor:'#A9A9A9', marginTop: 10,}} 
                            source={{uri: 'https://i.imgur.com/OILahL1.png'}}/>
                    <Text style={{ position: 'absolute', left: 20, top: 75, color: 'gray'}}>{item.location}</Text>
                </View>
                {/* infoRoom */}
                <View style={{height: 90, backgroundColor: '#F7F7F7', marginTop: 25, marginRight: 15}}>
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
            </View>
            )}
        
            <View style={{marginTop: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 20,
                              borderBottomColor: '#E0E0E0', borderBottomWidth: 0.5}}>
                    {listSuggest.map((item,index) =>
                        <Text key={index} 
                              style={{fontWeight: styleText==index ? 'bold' : 'normal', fontSize: styleText==index ? 15 : 14.5, paddingVertical: 8,
                                      borderBottomColor: styleText==index ? '#FF4500' : 'white', borderBottomWidth: 2, color: styleText==index ? 'black' : 'gray'}}
                              onPress={() => setstyleText(index)}
                        >{item.name}</Text>
                    )}
                </View>

               {/*  Detail */}
                {info.map((item,index) =>
                    <View key={index} style={{marginTop: 30,marginHorizontal: 20}}>
                        <View style={{}}>
                            <Text numberOfLines={hideText? null : 3} style={{ color: 'black', fontFamily: 'Roboto', fontSize: 14.5,}}>
                                {item.detail}
                            </Text>
                            <TouchableOpacity style={{marginTop: 10,}}>
                                <Text style={{color: '#FF4500', fontSize: 14.5,}}
                                    onPress={() =>{
                                        sethideText(!hideText)
                                    }}>
                                    {hideText? 'Thu gọn' : 'Xem thêm'}
                                </Text>
                            </TouchableOpacity>
                            
                        </View>
                        {/* Owner */}
                        <Text style={{marginTop: 30, fontWeight: 'bold', color: 'black',fontSize: 18}}>Chủ nhà</Text>
                        <View style={{marginTop: 20,height: 180, backgroundColor: '#F7F7F7', borderRadius: 10, 
                                        shadowColor: "#696969",
                                        shadowOffset: {
                                            width: 0,
                                            height: 3,
                                        },
                                        shadowOpacity: 0.29,
                                        shadowRadius: 4.65,
                                        elevation: 7,                                 
                                     }}>
                            <Text style={{marginTop: 15, marginLeft: 20,fontWeight: '700', fontSize: 16, color: 'black'}}
                                >{item.owner}
                            </Text> 
                            <Text style={{position: 'absolute', top: 40, left: 20,fontSize: 12, fontWeight: '400',
                                          paddingHorizontal: 10, paddingVertical: 2, backgroundColor: '#E8E8E8', borderRadius: 10, color: '#606060'}}>
                                {`${item.numberHotel} chỗ ở `}
                            </Text>     
                            <View style={{marginTop: 40, marginLeft: 20, flexDirection: 'row'}}>
                                <Text style={{fontSize: 13, color: '#606060'}}>Phản hồi: </Text>
                                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'black'}}>100% </Text>
                                <Text style={{fontSize: 13, marginLeft: 20, color: '#606060'}}>Hủy phòng </Text>
                                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'black'}}>0% </Text>
                            </View>
                            <TouchableOpacity style={{marginTop: 25, backgroundColor: '#E8E8E8',paddingVertical: 10, alignItems: 'center', marginHorizontal: 30, borderRadius: 15}}>  
                                <Text style={{ fontWeight: '600', color: 'black', fontSize: 13,
                                            }}>Xem thêm chỗ ở của {item.owner}
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <Text style={{marginTop: 30, fontWeight: 'bold', color: 'black',fontSize: 18}}>Tiện Nghi</Text>
                        <View style={{marginTop: 20}}>
                            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>Tiện ích</Text>
                            <View style={{}}>
                                <View style={{flexDirection: 'row',marginTop: 20}}>
                                    <Image style={{resizeMode: 'contain', width: 16, height: 20,}} 
                                        source={{uri: 'https://i.imgur.com/e2NdwUR.png'}} /> 
                                    <Text style={{marginLeft: 10,color: 'black'}}>Wifi</Text>
                                </View>
                                <View style={{flexDirection: 'row',marginTop: 20}}>
                                    <Image style={{resizeMode: 'contain', width: 20, height: 20,}} 
                                        source={{uri: 'https://i.imgur.com/Qhu1G6B.png'}} /> 
                                    <Text style={{marginLeft: 10,color: 'black', fontSize: 13}}>Điều hòa</Text>
                                </View>
                                <View style={{flexDirection: 'row',marginTop: 20}}>
                                    <Image style={{resizeMode: 'contain', width: 16, height: 20,}} 
                                        source={{uri: 'https://i.imgur.com/GWVeKKE.png'}} /> 
                                    <Text style={{marginLeft: 10,color: 'black', fontSize: 13}}>Dầu gội</Text>
                                </View>
                                <View style={{flexDirection: 'row',marginTop: 20}}>
                                        <Image style={{resizeMode: 'contain', width: 13, height: 20,}} 
                                            source={{uri: 'https://i.imgur.com/y1PyK5z.png'}} /> 
                                        <Text style={{marginLeft: 10,color: 'black', fontSize: 13}}>Máy giặt</Text>
                                    </View>
                                <View style={{position: 'absolute', left: 200}}>
                                    <View style={{flexDirection: 'row',marginTop: 20}}>
                                        <Image style={{resizeMode: 'contain', width: 16, height: 20,}} 
                                            source={{uri: 'https://i.imgur.com/M67D12Z.png'}} /> 
                                        <Text style={{marginLeft: 10,color: 'black', fontSize: 13}}>Khăn tắm</Text>
                                    </View>
                                    <View style={{flexDirection: 'row',marginTop: 20}}>
                                        <Image style={{resizeMode: 'contain', width: 16, height: 20,}} 
                                            source={{uri: 'https://i.imgur.com/ouKLlGZ.png'}} /> 
                                        <Text style={{marginLeft: 10,color: 'black', fontSize: 13}}>Xà phòng</Text>
                                    </View>
                                    <View style={{flexDirection: 'row',marginTop: 20}}>
                                        <Image style={{resizeMode: 'contain', width: 20, height: 25,}} 
                                            source={{uri: 'https://i.imgur.com/gU8E4Bf.png'}} /> 
                                        <Text style={{marginLeft: 10,color: 'black', fontSize: 13}}>TV</Text>
                                    </View>                    
                                </View>     
                            </View>
                        </View>
                        <Text style={{marginTop: 40, fontWeight: 'bold', color: 'black',fontSize: 18}}>Giá phòng</Text>
                        <View style={{marginTop: 10}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, backgroundColor: '#F7F7F7',
                                          padding: 10, borderRadius: 6
                                        }}>
                                <Text style={{color: 'black', fontWeight: '400', fontSize: 14}}>Thứ Hai - Thứ Năm</Text>
                                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>{`${item.priceMon_Fri} đ`}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, padding: 10 }}>
                                <Text style={{color: 'black', fontWeight: '400', fontSize: 14}}>Thứ Sáu - Chủ Nhật</Text>
                                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>{`${item.priceWeb_Sun} đ`}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, backgroundColor: '#F7F7F7',
                                          padding: 10, borderRadius: 6
                                        }}>
                                <Text style={{color: 'black', fontWeight: '400', fontSize: 14}}>Phí trẻ em tăng thêm</Text>
                                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>125.500đ (sau 2 khách)</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, padding: 10}}>
                                <Text style={{color: 'black', fontWeight: '400', fontSize: 14}}>Thuê theo tháng</Text>
                                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>8.00%</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, backgroundColor: '#F7F7F7',
                                          padding: 10, borderRadius: 6
                                        }}>
                                <Text style={{color: 'black', fontWeight: '400', fontSize: 14}}>Số đêm tối thiểu</Text>
                                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>1 đêm</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, padding: 10}}>
                                <Text style={{color: 'black', fontWeight: '400', fontSize: 14}}>Số đêm tối đa</Text>
                                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>90 đêm</Text>
                            </View>                
                        </View>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black', marginTop: 20
                                    }}>Nội quy chỗ ở
                        </Text>
                        <View style={{marginTop: 10}}>  
                            {rules.map((item, index) => (
                                 <Text key={index} style={{color: 'black', fontFamily: 'Roboto', fontSize: 14, marginTop: 3}}>
                                    {`${item}.`}
                                 </Text>
                            ))}
                        </View>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black', marginTop: 20
                                    }}>Thời gian nhận phòng
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, backgroundColor: '#F7F7F7',
                                        padding: 10, borderRadius: 6
                                    }}>
                            <Text style={{color: 'black', fontWeight: '400', fontSize: 14}}>Ngày đến</Text>
                            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>02:00 pm</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, padding: 10 }}>
                            <Text style={{color: 'black', fontWeight: '400', fontSize: 14}}>Ngày đi</Text>
                            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>12:00 pm</Text>
                        </View>
                        
                    </View>   
                )}
            </View>
            <View style={{height: 200}}></View>
        </ScrollView>

       {/*  Tab Bottom */}
         <View style={{ position: 'absolute', height: 100, left: 0, top: windowHeight - 90, width: windowWidth,
                        borderTopWidth: 1.5, borderTopColor: '#DCDCDC', backgroundColor: 'white', }}>
            {info.map((item, index) =>
                <View key={index} style={{ flexDirection: 'row', marginTop: 10,}}>
                <Text style={{fontFamily: 'Roboto', fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 20, marginTop: 8
                      }}>{item.priceMon_Fri}</Text>
                <Text style={{fontFamily: 'Roboto', marginLeft: 3, marginTop: 13, color: 'gray' }}>x 1 đêm</Text>
                <TouchableOpacity style={{marginLeft: 35, justifyContent: 'center',}}
                              onPress ={() => navigation.navigate('Đặt phòng', {
                                                                                imgRoom: listImage[0].img1,
                                                                                nameRoom: item.nameRoom,
                                                                                numberPerson: item.numberPeople,
                                                                                numberBathRoom: item.numberBathRoom,
                                                                                numberBedRoom: item.numberBedRoom,
                                                                                locationRoom: item.location,
                                                                               }
                              )}>
                    <Image 
                        source={{uri: 'https://i.imgur.com/jb8kMOb.png'}}  
                        style={{resizeMode: 'contain', width: 150, height: 40, borderRadius: 10}}
                    />
                    <Image 
                        source={{uri: 'https://i.imgur.com/KFwOsZ6.png'}}  
                        style={{position:'absolute', resizeMode: 'contain', height: 20, width: 20, left: 5,}}
                    />
                    <Text style={{position: 'absolute', left: 32, fontFamily: 'Roboto', fontWeight: 'bold', color:'white',
                                fontSize: 14
                                }}>Đặt phòng nhanh
                </Text>
                </TouchableOpacity>
                </View>
            )}
         </View>

     </View>
   )
}

export default InfoRoom

const styles = StyleSheet.create({})