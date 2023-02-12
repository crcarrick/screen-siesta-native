import { useEffect, useState } from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'

import * as ScreenSiestaNative from 'screen-siesta-native'

export default function App() {
  const [expired, setExpired] = useState(false)
  const [value, setValue] = useState(0)

  useEffect(() => {
    ScreenSiestaNative.addExpireListener(() => {
      setExpired(true)
    })

    ScreenSiestaNative.addTickListener(({ value }) => {
      setValue(value)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Button
        title="Start Timer"
        onPress={() => ScreenSiestaNative.startTimer(10)}
      />
      <Text>Has Expired: {expired === true ? 'True' : 'False'}</Text>
      <Text>Elapsed: {value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
