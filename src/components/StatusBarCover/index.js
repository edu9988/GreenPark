import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'react-native'

import styles from './styles'

export default (props) => {
  const insets = useSafeAreaInsets()
  const { backgroundColor = 'white' } = props

  return (
    <View style={[
      styles.statusBar,
      {
        height: insets.top,
        backgroundColor: backgroundColor
      }
    ]} />
  )
}
