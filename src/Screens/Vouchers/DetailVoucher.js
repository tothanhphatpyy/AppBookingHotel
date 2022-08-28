import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const DetailVoucher = ({ navigation}) => {
  return (
    <View style={{}}>
        <View style={{backgroundColor: '#F8F8F8',height: 40, width: '100%', flexDirection: 'row',
                    alignItems: 'center' , borderBottomColor: '#DCDCDC', borderBottomWidth: 1,}}>
                <TouchableOpacity style={{marginLeft: -5, paddingHorizontal: 20}}
                                onPress={() => navigation.goBack()}>
                    <Image
                        style={{resizeMode: 'contain', width: 30, height: 30, tintColor: 'orange'}} 
                        source= {{uri: 'https://i.imgur.com/0oDjrbE.png'}}/>
                </TouchableOpacity>
        </View>
        <Image
            style={{resizeMode: 'contain', width: '100%', height: 200, marginTop: 0}} 
            source= {{uri: 'https://i.imgur.com/UCGiEV7.jpg'}}/>
        <Text style={{color: 'black', fontSize: 18, textAlign: 'center', fontWeight: 'bold'}}>Xõa hè cực đã cùng MoMo!</Text>
        <View style={{ alignItems: 'center', }}>
            <Text style={{position: 'absolute', color: 'black', fontSize: 14, top: 10, fontWeight: '500', borderRadius: 10,
                        textAlign: 'center', padding: 10, borderColor: '#DCDCDC', borderWidth: 1}}>Thời gian khuyến mãi: 1/7 - 30/7/2022</Text>
        </View>
        <View style={{marginTop: 80, marginLeft: 20, marginRight: 20}}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '400'}}>Hưởng ứng Ngày Không Tiền Mặt năm 2022: MoMo “chiêu đãi” người dùng hàng triệu ưu đãi hấp dẫn</Text>
            <Text style={{color: 'black', fontSize: 14, fontWeight: '400', marginTop: 20}}>Hè nay đã khác hè xưa, bỏ lại bộn bề, ưu phiền ta chu du mọi miền sau 2 năm ròng ở yên. Để những hành trình du lịch trong hè này thêm rộn rã, MoMo tặng bạn combo ưu đãi trị giá đến 2.000.000 đồng. Thực hiện ngay 3 bước để đón một mùa hè bùng nổ:</Text>
            <View style={{flexDirection: 'row', marginTop: 20}}>
                <Image
                    style={{resizeMode: 'contain', width: 15, height: 15,}} 
                    source= {{uri: 'https://i.imgur.com/JIdvJ5K.png'}}/>
                <Text style={{color: 'black', fontSize: 14, fontWeight: '400'}}>Bỏ lại bộn bề, nặng nề cản lối.</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image
                    style={{resizeMode: 'contain', width: 15, height: 15,}} 
                    source= {{uri: 'https://i.imgur.com/JIdvJ5K.png'}}/>
                <Text style={{color: 'black', fontSize: 14, fontWeight: '400'}}>Rủ rê người thân yêu, lên MoMo chớp deal.</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image
                    style={{resizeMode: 'contain', width: 15, height: 15,}} 
                    source= {{uri: 'https://i.imgur.com/JIdvJ5K.png'}}/>
                <Text style={{color: 'black', fontSize: 14, fontWeight: '400'}}>Vi vu thả ga, xõa hè cực đã.</Text>
            </View>
            
        </View>
        
        
    </View>
  )
}

export default DetailVoucher

const styles = StyleSheet.create({})