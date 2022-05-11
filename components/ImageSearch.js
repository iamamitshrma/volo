import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const ImageSearch = ({onSearch}) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
            placeholder='Search GIF'
            style={styles.typeText}
            onChangeText={onSearch}
          />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10
  },
  typeText: {
    flex: 1,
    borderWidth: 2, 
    borderColor: 'gray',
    padding: 20
  }
})

export default ImageSearch;