import { ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from './styles'

import Car from '../../components/Item'
import carList from '../../assets/carList'

export default () => (
  <SafeAreaView style={styles.view}>
    <Text style={styles.header}>Galeria</Text>
    <ScrollView>
      {carList.map((car,index) => <Car
        key={index}
        photo={car.photo}
        name={car.name}
      />)}
    </ScrollView>
  </SafeAreaView>
)
