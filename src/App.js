import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  Text,
} from 'react-native'
import axios from 'axios'

import Header from './components/Header'
import PokemonCard from './components/PokemonCard'
import styles from './components/PokemonCard/styles'

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState(null)

  const getPokemons = async () => {
    const res = await axios.get(`https://api.pokemontcg.io/v1/cards`)

    const pokemons = res.data.cards

    setPokemons(pokemons)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  const searchPokemons = (pokemons, searchKey) => {
    if (searchKey) {
      return pokemons.filter(pokemon => Object.keys(pokemon).some(key => {
        // search types
        if (key === 'types') {
          return pokemon[key].map(type => {
            return type.toString().toLowerCase().includes(searchKey.toLowerCase())
          })[0]
        }
        // search other texts (name, subtype, supertype)
        if (typeof(pokemon[key]) !== 'object') {
          return pokemon[key].toString().toLowerCase().includes(searchKey.toLowerCase())
        }
      }))
    }

    // no search term return all
    return pokemons
  }

  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='black'
      />
      <SafeAreaView style={[styles.blackBg, { flex: 1 }]} >
        <Header
          setSearch={setSearch}
        />

        {pokemons.length > 0 &&
          <FlatList
            initialNumToRender={3}
            data={searchPokemons(pokemons, search)}
            renderItem={({ item }) =>
              <PokemonCard pokemon={item} />
            }
            keyExtractor={item => item.id}
            style={styles.blackBg}
            ListEmptyComponent={() =>
              <Text style={{ color: 'white' }}>Sorry! no pokemons</Text>
            }
          />
        }
      </SafeAreaView>
    </>
  )
}

export default App
