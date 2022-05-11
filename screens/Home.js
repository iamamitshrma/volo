import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar';
import ImageContainer from '../components/ImageContainer';
import ImageSearch from '../components/ImageSearch';
import { useEffect, useState } from 'react';




const Home = () => {

  const [imgUrl, setImgUrl] = useState("");
  const [fetchItem, setFetchItem] = useState(null);
  const API_KEY = "DWI2UQ0U4KCP";
  const LIMIT = 8;

  const fetchData = async (searchItem) => {
    // const resp = await fetch(`https://g.tenor.com/v1/random?q=${searchItem}&key=${API_KEY}`, {
    const resp = await fetch(`https://g.tenor.com/v1/random${searchItem ? ("?q=" + searchItem + "&key=" + API_KEY ): ( "?key=" + API_KEY )}`, {
      headers: {
        "Content-type": "application/json"
      }
    });
    const data = await resp.json();
    setImgUrl(data.results);
  };


  useEffect(() => {
    fetchData(fetchItem);
  }, [fetchItem])
  
  const handleSearch = (value) => {
    if(!value.length){
      setFetchItem(null);
    }else {
      setFetchItem(value.toString());
    }
  }


  return (
    <SafeAreaView style={styles.screen}>
        <FocusedStatusBar/>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Volopay GIF</Text>
        </View>
        <View style={styles.listContainer}>
            <FlatList 
                style={styles.flatListItems}
                data={Object.values(imgUrl)}
                renderItem={(item) => <ImageContainer data={item}/>}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<ImageSearch onSearch={handleSearch}/>}
            />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }, 
  headerContainer: {
    padding: 10, 
    alignItems: 'center',
    backgroundColor: 'green'
  },
  headerText: {
    color: 'white',
    fontSize: 25
  }, 
  listContainer: {
    flex: 1,
    width: '100%'
  }, 
  flatListItems: {
    paddingBottom: 10,
    borderRadius: 5
  }
})

export default Home;