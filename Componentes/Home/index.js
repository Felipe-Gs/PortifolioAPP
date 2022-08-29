import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native'
import { TextInput, Button, Title, Paragraph } from "react-native-paper";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import foto from '../imgs/fotoperfil.jpeg';
import Sobre from '../Sobre';
import Header from '../Header';
import Program from '../Lottie/program.json'
import Lottie from 'lottie-react-native';
import React from 'react'

// https://drive.google.com/file/d/10DMJMu3LxJlI5do2kqevNPHbez6hJaAX/view?usp=sharing
//https://drive.google.com/file/d/1f7eY8nlTfTiDCsVemW8eAX7MuJLM8CLo/view?usp=sharing
//https://docs.google.com/uc?export=download&id=1f7eY8nlTfTiDCsVemW8eAX7MuJLM8CLo

export default function Home({navigation}) {
  return (
    <>
    <View style={styles.page}>
        <Header navigation={navigation}/>
        <View style={styles.principal}>
            <View>
                <View style={styles.opcoes2}>
                    <Text style={{fontSize:15}}>Desenvolvedor Front end</Text>
                    <Title>Felipe Gomes</Title>
                <View style={{ justifyContent:"center"}}>
                    <Lottie 
                        style={{
                            width: 200,
                            height: 200,
                          }}
                        autoSize 
                        source={Program} 
                        autoPlay 
                        loop/>
                </View>
            </View>

                <View style={{width:'100%'}}>
                    <Paragraph>
                        Tenho 20 anos, me chamo Felipe Gomes da Silva,curso Engenharia de Software na Universidade Federal do Ceará, busco uma vaga de emprego no ramo de desenvolvimento Front-end
                    </Paragraph>
                </View>
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    <Button mode='contained' width={'90%'} style={{marginTop:15}}
                        onPress={()=> Linking.openURL('https://docs.google.com/uc?export=download&id=1f7eY8nlTfTiDCsVemW8eAX7MuJLM8CLo')}>
                        BAIXAR CURRICULO
                    </Button>
                </View>
            </View>
        </View>
        <Sobre/>
    </View>
    </>
    
  )
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:"#fff",
    },
    principal:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:10, 
        marginLeft:20,
       
       
    },
    opcoes2:{
        
    }
})