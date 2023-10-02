import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const image = { uri: '../assets/fondoLogin.png' };

function Home() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  const navigation = useNavigation();

  const alternarMostrarContraseña = () => {
    setMostrarContraseña(!mostrarContraseña);
  };

  const manejarInicioSesion = () => {
    console.log('Iniciando sesión...');
    navigation.navigate('Inicio');
  };

  return (
    <ImageBackground source={require('../assets/fondoLogin.png')} style={styles.backgroundImage}>
      <View style={styles.contenedor}>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#DB4437' }]}>
            <Icon name="google" size={20} color="white" />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#1877F2' }]}>
            <Icon name="facebook" size={20} color="white" />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.entradaContainer}>
          <Icon name="envelope" size={20} style={styles.entradaIcono} />
          <TextInput
            style={[styles.entrada, styles.entradaBlanca]} // Establecer el fondo blanco
            placeholder="Correo Electrónico"
            value={correo}
            onChangeText={setCorreo}
          />
        </View>
        <View style={styles.entradaContainer}>
          <Icon name="lock" size={20} style={styles.entradaIcono} />
          <TextInput
            style={[styles.entrada, styles.entradaContraseña, styles.entradaBlanca]} // Establecer el fondo blanco
            placeholder="Contraseña"
            value={contraseña}
            secureTextEntry={!mostrarContraseña}
            onChangeText={setContraseña}
          />
          <TouchableOpacity
            style={styles.iconoMostrarContraseña}
            onPress={alternarMostrarContraseña}
          >
            <Icon name={mostrarContraseña ? 'eye-slash' : 'eye'} size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.botonInicioSesion}
          onPress={manejarInicioSesion}
        >
          <Text style={styles.botonInicioSesionTexto}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 25,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
  },
  socialButtonText: {
    color: 'white',
    marginLeft: 5,
  },
  entradaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  entrada: {
    flex: 1,
    height: 40,
    backgroundColor: 'white', // Establecer el fondo blanco
  },
  entradaIcono: {
    marginRight: 10,
    color: 'gray',
  },
  entradaContraseña: {
    paddingRight: 40,
  },
  iconoMostrarContraseña: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  botonInicioSesion: {
    marginTop: 20,
    backgroundColor: '#A68966',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  botonInicioSesionTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
  entradaBlanca: {
    backgroundColor: 'white', // Establecer el fondo blanco
  },
});

export default Home;










