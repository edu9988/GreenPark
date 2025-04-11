import { Image, Text, View } from 'react-native'

import styles from './styles'

export default (props) => (
  <View style={styles.container}>
    <Image source={props.photo} style={styles.picture} resizeMode='contain'/>
    <Text style={styles.text}>{props.name}</Text>
  </View>
)
