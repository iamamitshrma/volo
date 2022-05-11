import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ImageContainer = ({data}) => {

  const navigation = useNavigation();
 
//  console.log(data.item.media[0].gif.url);
  return (
    <TouchableOpacity style={{padding: 10}} onPress={()=>navigation.navigate('Details', { data })}>
      <View style={styles.imageContainer}>
        <Image 
          source={{uri: data.item.media[0].gif.url}}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 5,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 10,
    borderRadius: 5
  }
})

export default ImageContainer;