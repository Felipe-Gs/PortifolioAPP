import { View, Text, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import { TextInput, Button, Title, Paragraph } from "react-native-paper";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import ima from '../imgs/pae.jpeg';
import React from 'react';

export default function ProjetosScroll({title, paragraph, link, imagee}) {
  return (
    <View style={{ width:300, height:400, alignItems:"center", marginTop:60}}>
      <Image style={{width:150, height:150}} source={imagee}/>

      <Title>{title}</Title>
      <View style={{width:'70%', height:100}}>
        <Paragraph>{paragraph}</Paragraph>
      </View>
      <Button onPress={()=> Linking.openURL(link)}>Ver projeto</Button>
    </View>
  )
}