import { ScrollView, Switch, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

import styles from './styles'
import Button from '../../components/Button'

export default () => {
  const [tipo, setTipo] = useState('avulso')
  const [periodo, setPeriodo] = useState('diurno')
  const [seguro, setSeguro] = useState(false)
  const [show, setShow] = useState(false)

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.header}>Estacionar</Text>
      <ScrollView>

        <View style={styles.container}>
          <Text style={styles.text}>Tipo:</Text>
          <Picker
            style={styles.picker}
            selectedValue={tipo}
            onValueChange={(value) => setTipo(value)}
          >
            <Picker.Item key={0} value='avulso' label="Avulso" />
            <Picker.Item key={1} value='mensal' label="Mensal" />
          </Picker>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>Período:</Text>
          <Picker
            style={styles.picker}
            selectedValue={periodo}
            onValueChange={(value) => setPeriodo(value)}
          >
            <Picker.Item key={0} value='diurno' label="Diurno" />
            <Picker.Item key={1} value='noturno' label="Noturno" />
          </Picker>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>Incluir seguro:</Text>
          <Switch
            value={seguro}
            onValueChange={() => setSeguro(!seguro)}
          />
        </View>

        <Button action={() => setShow(!show)}>
          Comprar
        </Button>

        {show &&
          <>
            <Text style={styles.show}>Recebido:</Text>
            <Text style={styles.show}>Tipo: {tipo}</Text>
            <Text style={styles.show}>Período: {periodo}</Text>
            <Text style={styles.show}>Seguro: {seguro?'Sim':'Não'}</Text>
          </>
        }
      </ScrollView>
    </SafeAreaView>
  )
}
