import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Constants from 'expo-constants';
export default function App() {
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
  alert("se ha dectado un codigo de tipo " + type +" el cual tiene la siguiente informacion" + data);
}

if(permisoCamara === null){
return <Text>Solicitando el permiso de la camara.</Text>;
}


if(permisoCamara === false){
  return <Text>Errpr no hay accesp a la camara.</Text>;
}
  return (
    <View style={styles.container}>
   
   <StatusBar style="auto" />
   <BarCodeScanner onBarCodeScanned={scanned? undefined : handleBarCodeScanned}
     style={StyleSheet.absoluteFillObject}>

   </BarCodeScanner>
   {scanned && <Button title={'Persione para volver a escanear ' }  onPress={()=> setScanned(false)}></Button>}
    </View>
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
