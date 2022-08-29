import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { TextInput, Button, Title, Paragraph } from "react-native-paper";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import React from 'react'

export default function Sobre() {
  return (
    <View style={{ width:'100%', height:'40%', justifyContent:"center"}}>
        <Text style={{textAlign:"center", width:'100%', fontSize:20, fontWeight:'bold', marginTop:20}}>Sobre</Text>
      <View style={styles.viewSoobre}>
        <View style={{flexDirection:"row",}}>
            <View style={{marginTop:20, width:'57%', marginLeft:10}}>
                <Text style={{fontSize:15, fontWeight:"bold"}}>Conheça um pouco sobre mim</Text>
                <Text style={{marginTop:20}}>Gosto de praticar esportes, estudo sobre o ramo de finanças, estou sempre ligado nas novas tecnologias e busco sempre está atualizado no mercado.</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Image style={{width:140, height:140, borderRadius:100}} source={require('../imgs/fotoperfil.jpeg')}/>
                <Text style={{marginTop:15}}>Felipe gomes</Text>
                <View style={styles.viewBotoes}>
                    <TouchableOpacity 
                    onPress={()=> Linking.openURL('https://www.instagram.com/_lipe_gs/')}>
                        <Icon name='instagram' color={'black'} size={26}/>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=> Linking.openURL('https://github.com/Felipe-Gs')}
                        style={{marginLeft:10}}>
                        <Icon name='github' color={'black'} size={26}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=> Linking.openURL('https://www.linkedin.com/in/felipe-gs/')}
                    style={{marginLeft:10}}>
                        <Icon name='linkedin' color={'black'} size={26}/>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
      </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    viewSoobre:{
        flexDirection:'row',
        
    },
    viewBotoes:{
        flexDirection:"row",
        marginTop:10
        
    }
})