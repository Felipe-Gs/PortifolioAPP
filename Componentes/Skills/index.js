import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import { TextInput, Button, Title } from "react-native-paper";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import Contato from '../Contato';
import React from 'react'
import Habilidade from '../Habilidades';
import Footer from '../Footer';
import Projetos from '../Projetos';
import { LinearGradient } from 'expo-linear-gradient';

export default function Skills({navigation}) {
  return (
    <View style={styles.container}>
      
      <View style={{flexDirection:"row"}}>
        <Icon
          onPress={()=>navigation.goBack()}
          color='grey'
          size={24}
          name='arrow-left'
          style={{marginRight:100}}
          
      />

        <View style={{flexDirection:'row'}}>
          <Icon name='square-opacity' style={{marginTop:7, marginRight:5}} size={25}/>
          <Title style={{marginRight:120}}>Skills</Title>
      </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:30, marginLeft:20}}>
        <Habilidade nome='React Native' icone='react'/>
        <Habilidade nome='js' icone='language-javascript'/>
        <Habilidade nome='github' icone='github'/>
        <Habilidade nome='python' icone='language-python'/>
        <Habilidade nome='html5' icone='language-html5'/>
        <Habilidade nome='css3' icone='language-css3'/>
        <Habilidade nome='Typescript' icone='language-typescript'/>
        <Habilidade nome='C' icone='language-c' />
        <Habilidade nome='ReactJS' icone='react'/>
        
      </ScrollView>
      {/* <Button onPress={()=> navigation.navigate('Home')}>Felipe gopme</Button> */}
    {/* <Contato/> */}
    <Projetos/>
    <Footer/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:60,
        justifyContent:'center',
        alignItems:"center"
    }
})