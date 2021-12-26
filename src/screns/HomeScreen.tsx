export {}
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import styles from './LandingScreen.styles'

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation} />
      <View style={styles.body}>
        <Text>Loading screen</Text>
      </View>
      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
    </View>
  )
}

export default HomeScreen
