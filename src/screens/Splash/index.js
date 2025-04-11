import { Image } from 'react-native'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

import img from '../../assets/favicon.png'

export default () => (
  <SafeAreaView>
    <Image source={img} style={styles.image} />
  </SafeAreaView>
)
