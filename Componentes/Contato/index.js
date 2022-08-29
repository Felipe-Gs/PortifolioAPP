import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Title, ActivityIndicator  } from "react-native-paper";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import Modals from '../Modal';
import Footer from '../Footer';
import React, { useEffect, useState } from 'react';

export default function Contato({navigation}) {
//https://br.qr-code-generator.com

  const [load, setLoad] = useState(true)
  const ligado = () =>{
    if(visible == true){
      setVisible(false);
      setLoad(false)
    }else{
      setLoad(true)
      setVisible(true)
    }
  }
  const MyComponent = () => (
    <View style={{justifyContent:"center", alignItems:"center", marginTop:400, height:'50%', width:'50%', position:'absolute', marginLeft:'50%', marginRight:'50%' }}>
      <ActivityIndicator animating={load} color={'black'}/>
    </View>
  );

  const imagens = {
    qrgit: require('../imgs/qrgit.png'),
    qrlink: require('../imgs/qrlink.png'),
    qrwhatsapp: require('../imgs/qrwhatsapp.png'),
    qrinstagram: require('../imgs/qrinstagram.png'),
    qrgmail: require('../imgs/qrgmail.png')
  }

  

  const [imgn, setImgn] = useState()

  const [visible, setVisible] = React.useState(false);
  const verificar =()=>{
    if(visible=='false'){
      <Text></Text>
    }else{
      <Text>Fechar</Text>
    }
  }

const handleOpenModal = (img) =>{
  setVisible(true);
  setImgn(img);
}

const IfModal =()=>{
  if(!load){
    const [load, setLoad] = useState(true)
    return <Modals visible={visible} setVisible={setVisible} img={imgn}/>
  }else{
    setTimeout(()=>setLoad(false),1000)  
    return <MyComponent/>
  }
}
 
  return (
    <View style={{marginTop:20}}>
      <View style={{flexDirection:"row", marginTop:40, justifyContent:"center"}}>
        <View style={{flexDirection:"row"}}>

        {visible && <IfModal/>}
        
          <View>
            <Icon
                  onPress={()=>navigation.goBack()}
                  color='grey'
                  size={24}
                  name='arrow-left'
                  style={{marginRight:100}}
                  
              />

          </View>
            <View style={{flexDirection:"row"}}>
              <Icon name='square-opacity'  style={{marginTop:7, marginRight:5}} size={25}/>
              <Title style={{marginRight:100}}>Contato</Title>
            </View>
        </View>
      </View>

      <View style={{padding:20}}>
      <View style={{flexDirection:'row', justifyContent:"center", marginTop:50}}>
        <View style={{justifyContent:"center"}}>
          <TouchableOpacity onPress={()=> {handleOpenModal(imagens.qrwhatsapp), ligado()}} style={{flexDirection:"row", alignItems:"center"}}>
            
            
            <Icon name='whatsapp' size={30}/>
            <Text style={{fontSize:15}}>88993108812</Text>
          </TouchableOpacity>

          </View>
          <TouchableOpacity onPress={()=> {handleOpenModal(imagens.qrinstagram), ligado()}} style={{flexDirection:"row", marginLeft:20, alignItems:"center"}}>
            <Icon name='instagram' size={30}/>
            <Text style={{fontSize:15}}>_lipe_gomes</Text>
          </TouchableOpacity>

        </View>
      <View style={{flexDirection:'row', justifyContent:"center", marginTop:50}}>
          <TouchableOpacity  onPress={()=> {handleOpenModal(imagens.qrlink), ligado()}} style={{flexDirection:"row", alignItems:"center"}}>
            <Icon name='linkedin' size={30}/>
            <Text style={{fontSize:15}}>Felipe-Gs</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={()=> {handleOpenModal(imagens.qrgmail), ligado()}} style={{flexDirection:"row", marginLeft:20, alignItems:"center"}}>
            <Icon name='gmail' size={30}/>
            <Text style={{fontSize:15}}>contatofelipegomes</Text>
          </TouchableOpacity>
      </View>
      {/* <View style={{justifyContent:"center", alignItems:"center", marginTop:40}}>
        <Image source={require('../imgs/contat.png')} style={{width:250, height:250}}/>
      </View> */}
      </View>
      {(!visible == false) && <TouchableOpacity onPress={()=> {setVisible(false), setLoad(true)}} style={{justifyContent: 'center', alignItems:'center', marginTop:320}}>
          <Text>Fechar</Text>
        </TouchableOpacity>}
        
        <View style={{marginTop:'25%'}}>
          <Footer/>
        </View>
        <View>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
  marginBottom:{
      marginBottom:20,
      width:'90%',
      marginLeft:20,
      color:'#ffff'
  },
  texto:{
      width:'90%',
      height:200,
      marginLeft:20,
      color:'#ffff',
  }
})