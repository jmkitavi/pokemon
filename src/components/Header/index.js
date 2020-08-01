import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Modal } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={sortModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>Sorting by HP</Text>

            <View style={styles.modalContent}>
              <TouchableOpacity
                style={[
                  styles.modalBtns,
                  sort === 'des' && { backgroundColor: 'gold' }
                ]}
                onPress={() => setSort('des')}
              >
                <Text style={styles.btnText}>Descending</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.modalBtns,
                  sort === 'asc' && { backgroundColor: 'gold' }
                ]}
                onPress={() => setSort('asc')}
              >
                <Text style={styles.btnText}>Ascending</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.modalBtns}
                onPress={() => {
                  setSort(null)
                  setSortModal(!sortModal)
                }}
              >
                <Text style={styles.btnText}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalBtns}
                onPress={() => setSortModal(!sortModal)}
              >
                <Text style={styles.btnText}>Close</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

    </View>
  )
}

export default Header
