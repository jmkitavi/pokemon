import React from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'

import styles from './styles'

const SortModal = ({ sortModal, setSortModal, setSort, sort }) => {
  return (
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
  )
}

export default SortModal
