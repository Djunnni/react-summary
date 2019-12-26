import React,{Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import TestComponent from './src/components/TestComponent';

const datas = [
  { id:"hong", count:0,color:"red"},
  { id:"gildong", count:0,color:"green"}
]
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      datas : datas
    };
  }
  _updateCount(idx){
    const newDatas = [...this.state.datas];
    newDatas[idx].count = newDatas[idx].count+1;

    this.setState({datas:newDatas});
  }
  render(){
    return (
      <View style={styles.container}>
       {
         this.state.datas.map((data,index)=>{
           return (
             <TestComponent
                key = {data.id}
                id={data.id}
                color={data.color}
                title={data.count.toString()}
                updateCount = {this._updateCount.bind(this,index)} />
           )
         })
       }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
  }
});
