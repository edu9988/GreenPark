import { ScrollView, Switch, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

import styles from './styles'
import Button from '../../components/Button'

export default () => {
  const [cera, setCera] = useState(false)
  const [interna, setInterna] = useState(false)
  const [show, setShow] = useState(false)

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.header}>Lavagem</Text>
      <ScrollView>

        <View style={styles.container}>
          <Text style={styles.text}>Com cera?</Text>
          <Switch
            value={cera}
            onValueChange={value => setCera(!cera)}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>Lavar interior?</Text>
          <Switch
            value={interna}
            onValueChange={value => setInterna(!interna)}
          />
        </View>

        <Button action={() => setShow(!show)}>
          Comprar
        </Button>

        {show &&
          <>
            <Text style={styles.show}>Recebido:</Text>
            <Text style={styles.show}>Com cera? {cera?'Sim':'Não'}</Text>
            <Text style={styles.show}>Lavar interior? {interna?'Sim':'Não'}</Text>
          </>
        }
      </ScrollView>
    </SafeAreaView>
  )
}
