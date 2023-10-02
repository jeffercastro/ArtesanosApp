import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

function ProductCard({ name, price, description, imageSource }) {
  return (
    <View style={styles.productCard}>
      <Image source={imageSource} style={styles.productImage} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>Price: ${price}</Text>
      <Text style={styles.productDescription}>{description}</Text>
    </View>
  );
}

function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={styles.userName}>Ben Tennyson</Text>
        </View>
        <Image source={require('../assets/fotoProfile.jpg')} style={styles.profileImage} />
      </View>
      <Text style={styles.balanceText}>$500.00</Text>
      <Text style={styles.availableBalance}>Available Balance</Text>
      <View style={styles.productsContainer}>
        <ProductCard
          name="Molcajete Bowl"
          price={100}
          description="Para los amantes de las salsas, tener un molcajete artesanal en casa hará toda la diferencia. Tendrán un sabor más intenso y será una explosión de sabores creados con el toque de piedra."
          imageSource={require('../assets/product1.jpg')} 
        />
        <ProductCard
          name="Tazón talavera"
          price={200}
          description="La talavera es uno de los elementos más característicos de la cultura mexicana, principalmente en Puebla. Un tazón hecho a mano, será el elemento estrella de la mesa."
          imageSource={require('../assets/product2.jpg')} 
        />
        <ProductCard
          name="Set de Mezcaleros de Talavera Blanca"
          price={300}
          description="Además de la talavera tradicional, también se presenta en tonalidades blanca y negra. Un set de mezcaleros de color blanco será ideal para tener en casa y compartir tu bebida favorita con amigos."
          imageSource={require('../assets/product3.jpg')} 
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    color: 'white',
  },
  balanceText: {
    fontSize: 30,
    marginTop: 20,
    color: 'white',
  },
  availableBalance: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    backgroundColor: '#BF9E75',
    borderRadius: 50,
    marginLeft: 40,
  },
  productsContainer: {
    marginTop: 20,
  },
  productCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    marginBottom: 25,
    width: '100%',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    backgroundColor: '#BF9E75',
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
  productDescription: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Profile;

