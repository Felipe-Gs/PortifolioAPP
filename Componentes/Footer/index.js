import { View, Text } from 'react-native'
import { TextInput, Button, Title, Paragraph } from "react-native-paper";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import React from 'react'

export default function Footer() {
  return (
    <View style={{justifyContent:"center", alignItems:"center", position:'absolute', bottom:-50, alignSelf:"center"}}>
      <Text style={{fontWeight:'bold'}}>contatofelipegomes.dev@gmail.com</Text>
      <Text>Palhano Ce</Text>
    </View>
  )
}