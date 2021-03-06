import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native'
import axios from 'axios'

import Header from './components/Header'
import PokemonCard from './components/PokemonCard'
import styles from './components/PokemonCard/styles'

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState(null) // search text
  const [sort, setSort] = useState(null) // sort text (des or asc)

  // fetch pokemons
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

  const sortPokemons = (pokemons, sort) => {
    if (sort === 'asc') {
      return pokemons.sort((a, b) => a.hp - b.hp)
    }
    if (sort === 'des') {
      return pokemons.sort((a, b) => b.hp - a.hp)
    }

    return pokemons
  }

  const data = (pokemons) => {
    let formattedPokemons = [...pokemons]

    if (search) {
      return searchPokemons(formattedPokemons, search)
    }
    if (sort) {
      return sortPokemons(formattedPokemons, sort)
    }

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
          setSort={setSort}
          sort={sort}
        />

        {pokemons.length > 0 ?
          <FlatList
            initialNumToRender={3}
            data={data(pokemons)}
            renderItem={({ item }) =>
              <PokemonCard pokemon={item} />
            }
            keyExtractor={item => item.id}
            style={styles.blackBg}
            ListEmptyComponent={() =>
              <Text style={{ color: 'white' }}>Sorry! no pokemons</Text>
            }
          /> :
          <ActivityIndicator />
        }
      </SafeAreaView>
    </>
  )
}

export default App
