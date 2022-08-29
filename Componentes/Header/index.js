import { View, Text,  StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { TextInput, Button, Title } from "react-native-paper";
import Skills from '../Skills';
import React, { useState } from 'react'



export default function Header({navigation}) {
  const nome = '</ Felipe Gomes>'
  const [shi, setShi] = useState(true)

  return (
    <View style={styles.container}>
        <Title style={styles.title}>{nome}</Title>
        <View style={styles.opcoes}>
        {/* <Button icon={'menu'} size={30} onPress={()=>navigation.navigate('Skills')}></Button> */}
        <View style={{flexDirection:'row'}}>
          <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Skills')}>
              <Text>Skills</Text>
            </TouchableOpacity>      
          </View>
          <View style={{marginLeft:20}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Contato')}>
              <Text>Contato</Text>
            </TouchableOpacity>      
          </View>
          <View style={{marginLeft:20}}>
            
          </View>
        </View>
        </View>

    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'15%',
        flexDirection:"row",
        alignItems:"center", 
        justifyContent:"space-around",
    },
    title:{
      color:"black"  
    },
    opcoes:{
        flexDirection:"row",
        justifyContent:"space-between",
        
    }
})