import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PurchaseScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PurchaseScreen</Text>
    </View>
  )
}

export default PurchaseScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems:'center',
      },
})