import { FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

import styles from './styles'

import Car from '../../components/Car'
import carList from '../../assets/carList'

export default () => {
  const [cars, setCars] = useState(carList)

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.header}>Galeria</Text>
      <FlatList
        data={carList}
        keyExtractor={car => car.id}
        renderItem={car => {
          const obj = car.item
          return <Car
            photo={obj.photo}
            name={obj.name}
          />
        }}
      />
    </SafeAreaView>
  )
}
