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
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert("se ha dectado un codigo de tipo " + type +" el cual tiene la siguiente informacion" + data);
    alert(data);
    props.navigation.navigate('Registro');
  }

  if (permisoCamara === null) {
    return (<Text>Solicitando el permiso de la camara.</Text>
    );
  }


  if (permisoCamara === false) {
    return (<Text>Error no hay acceso a la camara.</Text>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, styles.container]}>
        <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom} />
      </BarCodeScanner>
      {scanned && <Button title={'Persione para volver a escanear '} onPress={() => setScanned(false)}></Button>}
    </View>);

}

export default Lector

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  layerTop: {
    flex: 2,
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  focused: {
    flex: 10
  },
  layerRight: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  layerBottom: {
    flex: 2,
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  }
})