import React, { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

const win = Dimensions.get('window')
const screenMargins = 2

const PokemonCard = ({ pokemon }) => {
  const [height, setHeight] = useState()

  const getHeight = async () => {
    Image.getSize(pokemon.imageUrl, (width, height) => {
      let imgHeight = height/width * (win.width - screenMargins)

      setHeight(imgHeight)
    })
  }

  useEffect(() => {
    getHeight()
  }, [])

  return (
    <>
      <View style={styles.pokemonContainer}>
        {height &&
          <ImageBackground
            resizeMode='cover'
            resizeMethod='scale'
            source={{ uri: pokemon.imageUrl }}
            style={[
              { height: height, width: win.width - screenMargins },
              styles.pokemonImage,
            ]}
          >
            <View style={{
              paddingBottom: 20,
              height: height / 2,
            }} />
            <LinearGradient
              style={{ height: height / 2 }}
              colors={[
                'rgba(255, 225, 101, .3)',
                'rgba(255, 225, 101, .9)',
                'rgb(255, 225, 101)'
              ]}
              locations={[0, 0.1, 0.5]}
            >
              <Text style={styles.pokemonName}> {pokemon.name} </Text>

              <View style={styles.details}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>super type </Text>
                  <Text style={styles.info}>
                    {pokemon.supertype}
                  </Text>

                  <Text style={styles.label}>sub type </Text>
                  <Text style={styles.info}>
                    {pokemon.subtype}
                  </Text>

                  <Text style={styles.label}>health power </Text>
                  <Text style={styles.info}>
                    {pokemon.hp ? pokemon.hp : 'N/A'}
                  </Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>national pokedex </Text>
                  <Text style={styles.info}>
                    {pokemon.nationalPokedexNumber ? pokemon.nationalPokedexNumber : 'N/A'}
                  </Text>

                  <Text style={styles.label}>types </Text>
                  <Text style={styles.info}>
                    {pokemon.types ? pokemon.types.map(type => type) : 'N/A'}
                  </Text>

                  <Text style={styles.label}>weaknesses </Text>
                  <Text style={styles.info}>
                    {pokemon.weaknesses ? pokemon.weaknesses.map(weakness => `${weakness.type} ${weakness.value}`) : 'N/A'}
                  </Text>
                </View>
              </View>

              <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.label}>attacks </Text>
                <Text style={styles.info}>
                  {pokemon.attacks ? pokemon.attacks.map(attack => `${attack.name}. `) : 'N/A'}
                </Text>
              </View>

            </LinearGradient>
          </ImageBackground>
        }
      </View>
    </>
  )
}

export default PokemonCard
