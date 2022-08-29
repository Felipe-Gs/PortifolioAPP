import React from "react";
import Home from "./Componentes/Home";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator, tabBarIcon } from '@react-navigation/material-bottom-tabs';


import Skills from "./Componentes/Skills";
import Contato from "./Componentes/Contato";


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();




export default function Routes(){
    
    return(
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen options={{headerShown: false, }} name='Home'  component={Home}/>
                <Stack.Screen options={{headerShown: false}} name='Skills' component={Skills}/>
                <Stack.Screen options={{headerShown: false}} name='Contato' component={Contato}/>
                {/* // <Stack.Screen options={{headerShown: false}} name='Filme' component={Filme}/>
                // <Stack.Screen options={{headerShown: false}} name='Episodios' component={Episodios}/> */}

            </Stack.Navigator>
        </NavigationContainer>
    )
}