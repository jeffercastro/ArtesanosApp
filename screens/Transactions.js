import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

const backgroundImage = require('../assets/tarjetaDeCredito.png');

function TransactionCard({ cardNumber, cardHolder, amount, date }) {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <ImageBackground source={backgroundImage} style={styles.cardBackground}></ImageBackground>
    </TouchableOpacity>
  );
}

function Transactions() {
  const transactionsData = [
    { date: '2023-08-18', cardHolder: 'Allan White', amount: '$500.00' },
    { date: '2023-08-17', cardHolder: 'Jane Smith', amount: '$250.00' },
    { date: '2023-08-16', cardHolder: 'John Doe', amount: '$120.00' },
    { date: '2023-08-15', cardHolder: 'Ella Johnson', amount: '$750.00' },
    { date: '2023-08-14', cardHolder: 'Mark Brown', amount: '$320.00' },
    { date: '2023-08-13', cardHolder: 'Allan White', amount: '$480.00' },
    { date: '2023-08-12', cardHolder: 'Jane Smith', amount: '$180.00' },
    { date: '2023-08-11', cardHolder: 'John Doe', amount: '$950.00' },
    { date: '2023-08-10', cardHolder: 'Ella Johnson', amount: '$420.00' },
    { date: '2023-08-09', cardHolder: 'Mark Brown', amount: '$560.00' },
    { date: '2023-08-08', cardHolder: 'Sarah Adams', amount: '$300.00' },
    { date: '2023-08-07', cardHolder: 'David Wilson', amount: '$670.00' },
    { date: '2023-08-06', cardHolder: 'Emily Lee', amount: '$220.00' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mis Tarjetas</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {cards.map((card, index) => (
          <TransactionCard key={index} cardNumber={card.cardNumber} cardHolder={card.cardHolder} />
        ))}
      </ScrollView>
      <Text style={styles.transactionTitle}>Transacciones</Text>
      <View style={styles.transactionContainer}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionAttribute}>Fecha</Text>
          <Text style={styles.transactionAttribute}>Nombre</Text>
          <Text style={styles.transactionAttribute}>Monto</Text>
        </View>
        {transactionsData.map((transaction, index) => (
          <View style={styles.transactionRow} key={index}>
            <Text style={[styles.transactionValue, { fontSize: 16, marginTop: 4 }]}>
              {transaction.date}
            </Text>
            <Text style={[styles.transactionValue, { fontSize: 16, marginTop: 4 }]}>
              {transaction.cardHolder}
            </Text>
            <Text style={[styles.transactionValue, { fontSize: 16, marginTop: 4 }]}>
              {transaction.amount}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const cards = [
  { cardNumber: '1234', cardHolder: 'John Doe' },
  { cardNumber: '5678', cardHolder: 'Jane Smith' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  cardContainer: {
    marginRight: 16,
    width: 300,
    height: 230, 
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch', 
  },
  cardTitle: {
    fontSize: 16,
    marginTop: 8,
    color: 'white',
  },
  cardNumber: {
    fontSize: 16,
    marginTop: 8,
    color: 'white',
  },
  cardHolder: {
    fontSize: 16,
    marginTop: 8,
    color: 'white',
  },
  transactionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  transactionContainer: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
    marginTop: 30,
    alignSelf: 'stretch',

  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionAttribute: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12, // Aumenta el espacio entre los elementos
  },
  transactionValue: {
    color: 'white',
  },
});

export default Transactions;









 




