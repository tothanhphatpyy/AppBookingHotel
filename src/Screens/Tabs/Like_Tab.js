import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect} from 'react'

const Like_Tab = () => {

  useEffect(() => {
    console.log('render');
  }, [])

  return (
    <View>
     {/*  Tab top */}
      <View style={{backgroundColor: '#F8F8F8',height: 50, width: '100%',
                borderBottomColor: '#DCDCDC', borderBottomWidth: 1,}}>
        <View style={{alignItems: 'center', flexDirection: 'row',justifyContent: 'center', height: 50}}>
            <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>Phòng đã đặt</Text>
        </View>
      </View>

      {/* Body */}
      <ScrollView style={{marginTop: 10, marginHorizontal: 20}}>
        <TouchableOpacity style={{backgroundColor: 'white', width: '100%', height: '25%', borderRadius: 15,
                                  shadowColor: "#000",
                                  shadowOffset: {
                                    width: 0,
                                    height: 6,
                                  },
                                  shadowOpacity: 0.37,
                                  shadowRadius: 7.49,
                                  elevation: 12, }}>

        </TouchableOpacity>
        <View style={{height: 1000}}></View>
      </ScrollView>
    </View>
  )
}

export default Like_Tab

const styles = StyleSheet.create({})