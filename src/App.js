import { SafeAreaProvider } from 'react-native-safe-area-context'

import styles from './assets/styles.js'

import Splash from './screens/Splash'
import Signup from './screens/Signup'
import Login from './screens/Login'
import Gallery from './screens/Gallery'
import Services from './screens/Services'

export default () => (
  <SafeAreaProvider style={styles.provider}>
    {/*<Splash />*/}
    {/*<Signup />*/}
    {/*<Login />*/}
    {/*<Gallery />*/}
    <Services />
  </SafeAreaProvider>
)
