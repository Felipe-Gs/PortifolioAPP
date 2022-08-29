import { View, Text, ScrollView } from 'react-native'
import { TextInput, Button, Title, Paragraph } from "react-native-paper";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import net  from '../imgs/net.png';
import React from 'react'
import ProjetosScroll from '../ProjetosScroll'

export default function Projetos({navigation}) {
    const imagens = {
        netflix: require('../imgs/net.png'),
        pae: require('../imgs/pae.jpeg'),
        netflix2: require('../imgs/net.png'),
        chat: require('../imgs/chat.png'),
        portifolio: require('../imgs/portifolio.png'),
        hotel: require('../imgs/hotel.png'),
        dio: require('../imgs/dio.jpg')
    }
  return (
    <>
        <View style={{flexDirection:"row", marginTop:40}}>
            <Icon style={{marginRight:5, marginTop:5}} name='square-opacity' size={25}/>
            <Title>Projetos</Title> 

        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ProjetosScroll 
                imagee={imagens.pae}
                title='PAE UFC Russas'
                paragraph='Projeto da faculdade onde sou desenvolvedor front end React Native, feito com o intuito de ajudar a comunidade academica Russana'
                link='https://github.com/PAE-UFC-Russas'
            />
            <ProjetosScroll 
                imagee={imagens.netflix}
                title='Clone Netflix' 
                paragraph='Projeto feito com React Native, afim de melhorar as habilidades na linguagem'
                link='https://github.com/Felipe-Gs/Clone_Netflix_ReactNative'
                
                />
            <ProjetosScroll 
                imagee={imagens.chat}
                title='Chat Bot' 
                paragraph='chat bot do telegram, Projeto feito com Python, totalmente funcional com interação em tempo real com a api'
                link='https://github.com/Felipe-Gs/ChatBoot'
                />
            <ProjetosScroll 
                imagee={imagens.hotel}
                title='Sistema de cadastro' 
                paragraph='Front end do Projeto feito com React JS, trabalho pratico da disciplina de banco de dados, back end está em outro repositorio'
                link='https://github.com/Felipe-Gs/bancodedados'
            />
            <ProjetosScroll 
                imagee={imagens.dio}
                title='Projetos DIO' 
                paragraph='Desafios da plataforma Digital Innovation One, onde adquiri muito conhecimento nos desafios de programação'
                link='https://github.com/Felipe-Gs/Projetos-DIO'
            />
            <ProjetosScroll 
                imagee={imagens.portifolio}
                title='Primeiro Portifolio' 
                paragraph='Primeiro projeto Portifolio pessoal em  React JS, nesse projeto treinei meus conhecimentos iniciais em ReactJS'
                link='https://github.com/Felipe-Gs/Portifolio-Pessoal'
            />
        </ScrollView>
    </>
  )
}