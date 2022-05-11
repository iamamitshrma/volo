import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import React from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar';

const Details = ({route}) => {

  const { data } = route.params;
  return (
    <View style={styles.detailsContainer}>
    <FocusedStatusBar />
      <View style={styles.gifDetail}>
        <Image 
          source={{uri: data.item.media[0].gif.preview}}
          resizeMode="contain"
          style={styles.img}
        />
        <View style={styles.metaDataContainer}>
          <Text style={styles.title}>{data.item.content_description}</Text>
          <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, impedit labore. Facilis obcaecati aperiam laudantium quidem numquam tenetur autem. Omnis cum quod commodi? Reprehenderit ullam suscipit neque corrupti enim, perspiciatis quas at ipsa sit sint ea dolore molestias minima mollitia.</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.moreContainer} onPress={()=>Linking.openURL(data.item.itemurl)}>
        <Text style={styles.moreText}>Click Me</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1
  },
  gifDetail: {
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1,
    elevation: 5,
    margin: 10
  },
  img: {
    width: '100%',
    height: 300
  },
  metaDataContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 40
  },
  description: {
    fontSize: 20,
    alignItems: 'center',
    marginTop: 30
  },
  moreContainer: {
    alignItems: 'center'
  }, 
  moreText: {
    fontSize: 30,
    color: 'blue'
  }
})

export default Details;