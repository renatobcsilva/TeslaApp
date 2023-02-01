import { View, FlatList, Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'
import cars from './cars'
import CarItem from '../CarItem'

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={cars}
        renderItem={({item}) => <CarItem car={item}/>}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'star'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}

export default CarsList;