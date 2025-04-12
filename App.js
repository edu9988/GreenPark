import { SafeAreaProvider } from 'react-native-safe-area-context'

import styles from './src/assets/styles.js'

import Splash from './src/screens/Splash'
import Signup from './src/screens/Signup'
import Login from './src/screens/Login'
import Gallery from './src/screens/Gallery'
import GalleryFlatList from './src/screens/GalleryFlatList'
import Services from './src/screens/Services'
import Parking from './src/screens/Parking'
import Wash from './src/screens/Wash'

export default () => (
  <SafeAreaProvider style={styles.provider}>
    {/*<Splash />*/}
    {/*<Signup />*/}
    {/*<Login />*/}
    {/*<Gallery />*/}
    <GalleryFlatList />
    {/*<Services />*/}
    {/*<Parking />*/}
    {/*<Wash />*/}
  </SafeAreaProvider>
)
