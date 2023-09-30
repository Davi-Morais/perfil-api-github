import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from "react";

import SearchBar from './componentes/SearchBar';
import DisplayUser from './componentes/DisplayUser';
import DisplayRepos from './componentes/DisplayRepos';

type User = {
  name: string,
  avatar_url: string
}

type Repo = {
  name: string,
  description: string
}

export default function App() {
  
  const [user, setUser] = useState <User|null> (null);
  const [busca, setBusca] = useState('');
  const [repos, setRepos] = useState<Repo[]|null>(null);

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

    fetch(`https://api.github.com/users/${busca}/repos`, {
      method: "GET",
    })
    .then(res => res.json())
    .then(res => setRepos(res))
    .catch(error => {
      setRepos(null)
      console.error(error)
    })
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} style={styles.container}>
      <Text style={styles.titulo}>Pesquisar Perfil GitHub</Text>
      <SearchBar placeholder='Pesquise...' onChangeText={setBusca} onSubmitEditing={BuscarPerfil} />

      <DisplayUser user={user} />
      <DisplayRepos repos={repos} />

      <StatusBar style='light' hidden={false} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31333C',
  },
  titulo: {
    color: '#fff',
    fontSize: 32,
    marginTop: 111,
    paddingHorizontal: 80,
    textAlign: 'center'
  }
});
