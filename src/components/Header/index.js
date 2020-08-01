import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

const Header = () => {
  const [searching, setSearching] = useState(false)
  const [sorting, setSorting] = useState(false)

  return (
    <View style={styles.container}>
      {searching ? (
        <View style={styles.searchContainer}>
            <MaterialIcons name='search' color='white' size={26}/>
            <TextInput
              onChangeText={() => {}}
              style={styles.searchBar}
            />
            <TouchableOpacity
              onPress={() => setSearching(false)}
            >
              <MaterialIcons name='close' color='white' size={26}/>
            </TouchableOpacity>
        </View>
      ) : (
        <>
        <Text style={styles.title}>Pokemon</Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => setSearching(true)}
            style={styles.button}
          >
            <MaterialIcons name='search' color='white' size={28}/>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSorting(true)}
            style={styles.button}
          >
            <MaterialIcons
              name='sort'
              color={sorting ? 'rgb(255, 225, 101)' : 'white'}
              size={28}
            />
          </TouchableOpacity>
        </View>
        </>

      )}
    </View>
  )
}

export default Header
