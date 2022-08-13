import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NavigationContainer } from '@react-navigation/native';

const Lector = (props) => {
    const [permisoCamara, setPermisoCamara] = useState(null);
    const [scanned, setScanned] = useState(false);
  
    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setPermisoCamara(status === 'granted')
        })();
      }, []);
    const handleBarCodeScanned = ({type,data}) =>{
      setScanned(true);
     // alert("se ha dectado un codigo de tipo " + type +" el cual tiene la siguiente informacion" + data);
       alert( data);
       props.navigation.navigate('Registro');
    }
    
    if(permisoCamara === null){
    return(  <Text>Solicitando el permiso de la camara.</Text>  
    );
    }
    
    
    if(permisoCamara === false){
      return  (  <Text>Error no hay acceso a la camara.</Text>   
        );
    }

return( 
    <View style={styles.container}>
    <StatusBar style="auto" />
<BarCodeScanner onBarCodeScanned={scanned? undefined : handleBarCodeScanned}
  style={StyleSheet.absoluteFillObject}>

</BarCodeScanner>
{scanned && <Button title={'Persione para volver a escanear ' }  onPress={()=> setScanned(false)}></Button> }
</View>);

}

export default Lector

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
    }
})