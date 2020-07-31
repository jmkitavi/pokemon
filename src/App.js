import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  Text
} from 'react-native'
import axios from 'axios'

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
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {pokemons.length > 0 &&
          <FlatList
          initialNumToRender={3}
            data={pokemons}
            renderItem={({ item }) =>
              <Text>{item.name}</Text>
            }
            keyExtractor={item => item.id}
          />
        }

      </SafeAreaView>
    </>
  )
}

export default App
