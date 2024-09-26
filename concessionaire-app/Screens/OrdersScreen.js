import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const OrdersScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Orders Screen</Text>
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

export default OrdersScreen