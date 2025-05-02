import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import styles from './src/assets/styles.js'

import Splash from './src/screens/Splash'
import Signup from './src/screens/Signup'
import Login from './src/screens/Login'
import Gallery from './src/screens/Gallery'
import GalleryFlatList from './src/screens/GalleryFlatList'
import Services from './src/screens/Services'
import Parking from './src/screens/Parking'
import Wash from './src/screens/Wash'

const Stack = createNativeStackNavigator()

export default () => (
  <SafeAreaProvider style={styles.provider}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="GalleryFlatList" component={GalleryFlatList} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Parking" component={Parking} />
        <Stack.Screen name="Wash" component={Wash} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)
