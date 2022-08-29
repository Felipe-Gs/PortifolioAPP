import { View, Text, TouchableOpacity } from 'react-native'
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import React from 'react'

export default function Habilidade({nome, icone}) {
  return (
    <View>
        <TouchableOpacity 
            style={{justifyContent:"center", alignItems:"center", marginRight:40}}>
            <Text>{nome}</Text>
            <Icon name={icone} size={80}/>
            
        </TouchableOpacity>
    </View>
  )
}