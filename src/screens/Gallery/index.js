import { useRef } from 'react'
import { Animated } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

import styles from './styles'

import Car from '../../components/Item'
import StatusBarCover from '../../components/StatusBarCover'
import carList from '../../assets/carList'

export default () => {
  const scrollY = useRef(new Animated.Value(0)).current
  const insets = useSafeAreaInsets()
  const HEADER_HEIGHT = 60

  const translateY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT).interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp'
  })

  const opacity = translateY.interpolate({
    inputRange: [-HEADER_HEIGHT, 0],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })

  return (
    <SafeAreaView style={styles.view}>
      <StatusBarCover backgroundColor="white" />
      <Animated.Text
        style={[{
          transform: [{ translateY }],
          opacity,
          position: 'absolute',
          top: insets.top,
          left: 0,
          right: 0,
          zIndex: 9998,
          height: HEADER_HEIGHT,
          lineHeight: HEADER_HEIGHT,
        }, styles.header]}
      >
        Galeria
      </Animated.Text>
      <Animated.ScrollView
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {carList.map((car,index) => <Car
          key={index}
          photo={car.photo}
          name={car.name}
        />)}
      </Animated.ScrollView>
    </SafeAreaView>
  )
}