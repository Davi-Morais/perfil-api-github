import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";

import SearchBar from './componentes/SearchBar';

export default function App() {
  
  
  const [busca, setBusca] = useState('');
  async function BuscarPerfil() {
    await fetch(`https://api.github.com/users/${busca}`, {
      method: "GET",
    })
    .then(res => res.json())
    .then(res => console.log(res.name))
    .catch(error => console.error(error))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pesquisar Perfil GitHub</Text>
      <SearchBar placeholder='Pesquise...' onChangeText={setBusca} onSubmitEditing={BuscarPerfil} />
      <StatusBar style='light' hidden={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31333C',
    alignItems: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 32,
    marginTop: 111,
    paddingHorizontal: 80,
    textAlign: 'center'
  }
});
