import { useEffect, useState } from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import * as ScreenSiestaNative from 'screen-siesta-native'

export default function App() {
  const [tick, setTick] = useState<number>()

  useEffect(() => {
    ScreenSiestaNative.addTickListener(({ value }) => {
      setTick(value)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Button
        title="Start Timer"
        onPress={() => ScreenSiestaNative.startTimer(10)}
      />
      <Text>{tick}</Text>
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
