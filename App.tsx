import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";

import SearchBar from './componentes/SearchBar';
import DisplayUser from './componentes/DisplayUser';

type User = {
  name: string,
  avatar_url: string
}

export default function App() {
  
  const [user, setUser] = useState <User|null> (null);
  const [busca, setBusca] = useState('');

  async function BuscarPerfil() {
    await fetch(`https://api.github.com/users/${busca}`, {
      method: "GET",
    })
    .then(res => res.json())
    .then(res => setUser({name: res.name, avatar_url: res.avatar_url}))
    .catch(error => {
      setUser(null)
      console.error(error)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pesquisar Perfil GitHub</Text>
      <SearchBar placeholder='Pesquise...' onChangeText={setBusca} onSubmitEditing={BuscarPerfil} />

      <DisplayUser user={user} />

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
