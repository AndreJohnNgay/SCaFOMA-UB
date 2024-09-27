import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const GraphsScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Graphs Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default GraphsScreen