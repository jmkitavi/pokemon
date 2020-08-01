import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native'
import axios from 'axios'

import PokemonCard from './components/PokemonCard'
import styles from './components/PokemonCard/styles'

const App = () => {
  const [pokemons, setPokemons] = useState([])

  const getPokemons = async () => {
    const res = await axios.get(`https://api.pokemontcg.io/v1/cards`)

    const pokemons = res.data.cards

    setPokemons(pokemons)
  }

  useEffect(() => {
    getPokemons()
  }, [])


  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='black'
      />
      <SafeAreaView style={styles.blackBg} >
        {pokemons.length > 0 &&
          <FlatList
            initialNumToRender={3}
            data={pokemons}
            renderItem={({ item }) =>
              <PokemonCard pokemon={item} />
            }
            keyExtractor={item => item.id}
            style={styles.blackBg}
          />
        }
      </SafeAreaView>
    </>
  )
}

export default App
