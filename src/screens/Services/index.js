import { ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from './styles'
import Service from '../../components/Service'
import serviceList from '../../assets/serviceList'

export default () => (
  <SafeAreaView style={styles.view}>
    <Text style={styles.header}>Serviços</Text>
    <ScrollView>
      {serviceList.map((service,index) => <Service
        key={index}
        photo={service.photo}
        name={service.name}
      />)}
    </ScrollView>
  </SafeAreaView>
)
