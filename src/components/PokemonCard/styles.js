import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  pokemonContainer: {
    marginBottom: 10,
    borderRadius: 13,
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'rgb(80,80,80)',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgb(255, 225, 101)',
  },
  pokemonImage: {
    backgroundColor: 'rgb(80,80,80)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  infoContainer: {
  },
  pokemonName: {
    lineHeight: 30,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23,
    letterSpacing: 2,
    margin: 10,
  },
  details: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    color: 'black',
    fontSize: 13
  },
  info: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 2,
    paddingBottom: 15,
  },
  blackBg: {
    backgroundColor: 'black',
  }
})

export default styles
 