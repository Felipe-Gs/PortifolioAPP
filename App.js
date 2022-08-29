import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,  } from 'react-native';
import Sobre from './Componentes/Sobre';
import Home from './Componentes/Home';
import Skills from './Componentes/Skills';
import Routes from './Routes';



export default function App() {
  return (
    <View style={{flex:1}}>
        <Routes/> 
    </View>
    
  );
}

const styles = StyleSheet.create({
  
});
