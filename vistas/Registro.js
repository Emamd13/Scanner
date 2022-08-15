

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View,ImageBackground } from 'react-native';
import { Button, Text, Input, Icon, Avatar } from "@rneui/themed";
import { Rating, AirbnbRating } from 'react-native-ratings';

import Ionicons from '@expo/vector-icons/Ionicons';


const Registro = (props) => {
    function ratingCompleted(rating) {
        console.log("Rating is: " + rating)
        alert("Rating is: " + rating)
    }
    const image = { uri: "assets/Fondo.jpg" };


    return (

        <>

            <Text style={styles.subHeader}>Informacion conductor.</Text>
            <View style={styles.container}>
            <ImageBackground source={require('../assets/Fondo.jpg')} resizeMode="cover" style={styles.container}>
                <Avatar size={200} source={{ uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg' }}
                    rounded></Avatar>
                <Text style={styles.fonts} h4>Placa: ALT652L</Text>
                <Text style={styles.fonts} h4>Serie: JLT8386LHSJ89S</Text>
                <Text style={styles.fonts} h4>Conductor: Maria Luisa Martinez Gonzales</Text>
                </ImageBackground>
            </View>
            <Text style={styles.subHeader}>Valoracion.</Text>
            <View style={styles.container}>
                <Input
                    placeholder="Comentarios"
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}

                />


        <AirbnbRating
          count={4}
          ratingColor='#3498db'
           ratingBackgroundColor='#c8c7c8'
          reviews={[
            'Terrible',
            'Malo',
            'Bueno',
            'Excelente',
           
          ]}
          defaultRating={1}
          size={40}
        />
          <Button
              title="Registrar"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
             
            />
            
            </View>
           
        </>
    );



}
const styles = StyleSheet.create({
    subHeader: {
        backgroundColor: "#924092",
        color: "white",
        textAlign: "center",
        paddingVertical: 5,
        marginBottom: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
    view: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    fonts: {

        marginBottom: 8,
        textAlign: "left"
    },
})
export default Registro