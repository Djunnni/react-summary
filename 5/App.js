/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

function getMoviesFromApiSync(){
  return fetch('https://facebook.github.io/react-native/movies.json').then((response)=>response.json())
  .then((res)=>{
    return res.movies;
    })
    .catch((err)=>{console.log(err)})
}
async function getMoviesFromApi(){
  try {
    let response = await fetch('https://facebook.github.io/react-native/movies.json');
    let responseJson = await response.json();
    return responseJson.movies;
  } catch(err){
    console.log(err);
  }
}
const App = () => {
  const [isLoding,setIsLoding] = useState(true);
  const [dataSource,setDataSource] = useState([]);

  useEffect(()=>{
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response)=>response.json())
      .then((res)=>{
      setDataSource(res.movies);
      setIsLoding(false);
    })
    .catch((err)=>{console.log(err)})
  },[]);

  if(isLoding){
    return (
      <View style={styles.container}>
          <Text>Loading</Text>
     </View>
     );
  }

  return (
   <View style={styles.container}>
     <FlatList 
      data={dataSource} renderItem={({item})=><Text>{item.title}, {item.releaseYear}</Text>}
      keyExtractor={({id},index)=>id}/>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    marginTop:40,
    padding:10
  },
  
});

export default App;
