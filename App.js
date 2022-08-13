import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import Lector from './vistas/Lector';
import Menu from './vistas/Menu';
import Registro from './vistas/Registro';
export default function App() {

  const Stack = createNativeStackNavigator();



  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Menu' component={Menu} options={{ title: "Menu", headerStyle: {
              backgroundColor: '#BD83BD' 
           } , headerTintColor: '#fff' }  } />
        <Stack.Screen name='Lector' component={Lector} options={{ title: "QR"  , headerStyle: {
              backgroundColor: '#BD83BD' 
           } , headerTintColor: '#fff'}} />
        
        <Stack.Screen name='Registro' component={Registro} options={{ title: "Registro" , headerStyle: {
              backgroundColor: '#BD83BD' 
           } , headerTintColor: '#fff'}} />
      </Stack.Navigator>

    )

  }
  
  return (
    <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
