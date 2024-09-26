import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ConcessionScreen = () => {
  return (
    <View style={styles.screenContainer}>
        <Text>Concession Screen</Text>
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

export default ConcessionScreen