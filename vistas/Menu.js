
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from "@rneui/themed";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { createIconSet } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Avatar } from "@rneui/themed";
const Menu = (props) => {
    const glyphMap = { 'icon-name': 1234, test: '∆' };
    const CustomIcon = createIconSet(glyphMap, 'FontName', 'custom-icon-font.ttf');

    return (
        <View style={styles.container}>



            <Button
                title="Open Mutli Action Dialog"
                titleStyle={{ fontWeight: '900' }}
                buttonStyle={{
                    backgroundColor: 'rgba(127, 63, 191, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 60,
                }}
                containerStyle={{
                    width: 250,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                onPress={() => props.navigation.navigate('Lector')}

            > <Avatar size={200} source={{ uri: 'https://cdn2.iconfinder.com/data/icons/scenarium-vol-19/128/019_033_qr_code_scan_smartphone_mobile-256.png' }}
                rounded></Avatar></Button>
            <Text style={styles.fonts} h1>
                Escanea el codigo QR
          </Text>

            
        </View>);


}

export default Menu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },

    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    },
    fonts: {
        marginBottom: 8,
        textAlign: "center"
    },
})