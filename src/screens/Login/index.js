import { Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

import styles from './styles'
import Button from '../../components/Button'

export default () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.header}>Digite suas credenciais</Text>

      <TextInput
        style={styles.input}
        inputMode="text"
        value={user}
        placeholder={'Usuário'}
        onChangeText={(input) => setUser(input)}
      />

      <TextInput
        style={styles.input}
        inputMode="text"
        value={password}
        placeholder={'Senha'}
        secureTextEntry={true}
        onChangeText={(input) => setPassword(input)}
      />

      <Button action={() => setShow(!show)}>
        Entrar
      </Button>

      {show &&
        <>
          <Text style={styles.show}>Recebido:</Text>
          <Text style={styles.show}>usuário: {user}</Text>
          <Text style={styles.show}>senha: {password}</Text>
        </>
      }
    </SafeAreaView>
  )
}
