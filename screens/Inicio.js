import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const image = { uri: '../assets/jarraArcillaInicio.png' };

function Inicio() {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <ScrollView
          contentContainerStyle={styles.upperContent}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.productBox}>
            <Image
              source={require('../assets/platosInicio.jpg')} // Reemplaza con la ruta de tu primera imagen
              style={styles.productImage} // Establece los estilos para la imagen
            />
          </View>
          <View style={styles.productBox}>
            <Image
              source={require('../assets/floreroCardenalInicio.jpg')} // Reemplaza con la ruta de tu segunda imagen
              style={styles.productImage} // Establece los estilos para la imagen
            />
          </View>
          <View style={styles.productBox}>
            <Image
              source={require('../assets/copasParaMezcal.jpg')} // Reemplaza con la ruta de tu tercera imagen
              style={styles.productImage} // Establece los estilos para la imagen
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.textContainer}>
          <MaterialCommunityIcons name="paw" size={80} color="black" />
          <Text style={styles.textLarge}>Find new things</Text>
          <Text style={styles.textSmall}>Valora el artesano</Text>
        </View>
        {/* Otros elementos aquí */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 0.7,
    backgroundColor: 'black',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  upperContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3,
    backgroundColor: 'white',
    padding: 10,
  },
  productBox: {
    width: 200,
    height: 200,
    backgroundColor: 'gray',
    marginHorizontal: 20,
    borderRadius: 20,
  },
  productImage: {
    width: '100%', // Establece el ancho deseado para la imagen
    height: '100%', // Establece la altura deseada para la imagen
    borderRadius: 20, // Establece la forma del borde
  },
  textContainer: {
    alignItems: 'center',
  },
  textLarge: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textSmall: {
    fontSize: 12,
    marginTop: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    height: '100%',
  },
});

export default Inicio;




