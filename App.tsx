import React, { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import styles from './App.styles'

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text>test your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default App
