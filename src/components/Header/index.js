import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Modal } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import SortModal from './SortModal'
import styles from './styles'

const Header = ({ setSearch, setSort, sort }) => {
  const [searching, setSearching] = useState(false)
  const [sortModal, setSortModal] = useState(false)

  return (
    <View style={styles.container}>
      {searching ? (
        <View style={styles.searchContainer}>
            <MaterialIcons name='search' color='white' size={26}/>
            <TextInput
              onChangeText={(search) => setSearch(search)}
              style={styles.searchBar}
              autoFocus={true}
              placeholder='Search'
              placeholderTextColor='rgba(255,255,255, .5)'
            />
            <TouchableOpacity
              onPress={() => {
                setSearching(false)
                setSearch(null)
              }}
            >
              <MaterialIcons name='close' color='white' size={26}/>
            </TouchableOpacity>
        </View>
      ) : (
        <>
        <Text style={styles.title}>Pokemon</Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              setSearching(true)
            }}
            style={styles.button}
          >
            <MaterialIcons name='search' color='white' size={28}/>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSortModal(true)}
            style={styles.button}
          >
            <MaterialIcons
              name='sort'
              color={sort ? 'rgb(255, 225, 101)' : 'white'}
              size={28}
            />
          </TouchableOpacity>
        </View>
        </>

      )}

      {/* Modal for choosing sort */}
      <SortModal
        setSortModal={setSortModal}
        setSort={setSort}
        sort={sort}
        sortModal={sortModal}
      />

    </View>
  )
}

export default Header
