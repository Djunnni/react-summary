import React,{Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.title} />
        <View style={styles.content} />
        <View style={styles.footer} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    justifyContent:'center',
  },
  header :{
    height:'10%',
    backgroundColor: '#ff91a7'
  },
  title : {
    flex:1,
    backgroundColor: '#EFD0E8',
    alignItems: 'center',
  },
  content : {
    flex:3,
    backgroundColor : '#f9cdc7',
    alignItems: 'center',
  },
  footer : {
    height:'20%',
    backgroundColor : '#2a7f62',
    alignItems: 'center',
  }

});