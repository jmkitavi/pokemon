import { StyleSheet, Dimensions } from 'react-native'

const win = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    top: 0,
    height: 50,
    width: win.width,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent:'space-between',
    alignItems: 'center',
    elevation: 4,
  },
  title: {
    fontSize: 22,
    marginLeft: 5,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: 'white',
  },
  button: {
    padding: 12,
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(80,80,80)',
    borderRadius: 23,
    overflow: 'hidden',
    alignItems: 'center',
    height: 45,
    paddingHorizontal: 5,
  },
  searchBar: {
    height: 40,
    width: win.width - 100,
    alignSelf: 'center',
    letterSpacing: 1.2,
    fontWeight: '600',
    fontSize: 18,
    color: 'white',
  },

  // Modal 
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, .5)'
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    width: '65%',
    alignItems: "center",
    elevation: 5,
    justifyContent: 'space-between',
  },
  modalHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  modalContent: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalFooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  modalBtns: {
    paddingHorizontal: 10,
    margin: 10,
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  btnText: {
    lineHeight: 25,
  }

})

export default styles
 