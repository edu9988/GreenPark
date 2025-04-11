import { SafeAreaProvider } from 'react-native-safe-area-context'

import styles from './src/assets/styles.js'

import Splash from './src/screens/Splash'
import Signup from './src/screens/Signup'
import Login from './src/screens/Login'
import Gallery from './src/screens/Gallery'
import Services from './src/screens/Services'

export default () => (
  <SafeAreaProvider style={styles.provider}>
    {/*<Splash />*/}
    {/*<Signup />*/}
    {/*<Login />*/}
    {/*<Gallery />*/}
    <Services />
  </SafeAreaProvider>
)
