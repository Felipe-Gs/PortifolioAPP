import { View, Image } from 'react-native';
import { Modal, Text, Button, Provider, ActivityIndicator } from 'react-native-paper';
import React, {useState, useEffect} from 'react'



export default function Modals({visible, setVisible, img, spin }) {

 

  return (
    <View style={{justifyContent:"center", alignItems:'center'}}>
    <Modal visible={visible} onDismiss={()=>{setVisible(false)}} style={{width:330, height:300, backgroundColor:'white', alignItems:'center',justifyContent:'center',alignSelf: 'center',marginTop:240, borderRadius:10}}>  
      
      <Image source={img} style={{width:300, height:300, marginTop:5}}/> 
    </Modal>
    </View>
  )
}