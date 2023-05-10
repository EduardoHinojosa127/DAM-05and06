import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bienvenido a la página
      </Text>
      <TouchableOpacity
        onPress={()=> navigation.navigate("Videojuegos")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ir a página de Videojuegos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.navigate("Tabs")}
        style={[styles.button, styles.buttonMargin]}
      >
        <Text style={styles.buttonText}>Ir a pantalla tabs</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize:30,
    textAlign:'center',
    marginBottom: 50,
    color: '#fff'
  },
  button: {
    backgroundColor:'purple',
    padding: 10,
    width:'50%',
    borderRadius: 10,
  },
  buttonText: {
    fontSize:15,
    textAlign:'center',
    color:'white',
  },
  buttonMargin: {
    marginTop: 10,
  },
});

export default HomeScreen;
