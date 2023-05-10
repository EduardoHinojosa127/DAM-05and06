import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const StackScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Videojuegos</Text>
      <View style={styles.productContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png' }}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Elden Ring</Text>
          <Text style={styles.productDescription}>
          Elden Ring es un videojuego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. El videojuego surge de una colaboración entre el director y diseñador Hidetaka Miyazaki y el novelista de fantasía George R. R. Martin.
          </Text>
          <Text style={styles.productPrice}>$99.99</Text>
        </View>
      </View>
      <View style={styles.productContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://image.api.playstation.com/cdn/EP0688/CUSA06782_00/4Fn75AWWgOLZiFdxIA6HvSV5wC9c3WGp.png' }}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>ARK</Text>
          <Text style={styles.productDescription}>
          Ark: Survival Evolved es un videojuego de acción-aventura y supervivencia desarrollado por Studio Wildcard, Instinct Games, Efecto Studio y Virtual Basement. Lanzado oficialmente el 29 de agosto de 2017 para Windows, Xbox One, Nintendo Switch, PlayStation 4, IOS y Android.
          </Text>
          <Text style={styles.productPrice}>$149.99</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    width: 700
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StackScreen;
