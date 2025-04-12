import { Image, Text, View } from 'react-native'
import { useState } from 'react'
import Slider from'@react-native-community/slider'

import styles from './styles'

export default (props) => {
  const [deg, setDeg] = useState('0')

  return(
    <View style={styles.container}>
      <Image source={props.photo} style={[styles.picture,{filter: `hue-rotate(${deg}deg)`}]} resizeMode='contain'/>
      <Text style={styles.text}>{props.name}</Text>
      <Slider
        style={styles.slider}
        value={Number(deg)}
        onValueChange={value => setDeg(value.toString())}
        minimumValue={0}
        maximumValue={340}
        step={10}
      />
    </View>
  )
}
