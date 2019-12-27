import React,{Component} from 'react';
import {StyleSheet, View, Text,Image,StatusBar, TextInput,CheckBox} from 'react-native';
import CustomButton from './src/components/CustomButton';

export default class App extends Component{
  state={
    checked:false,
    id:"",
    pw:"",
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
        <View style={styles.header}>
          <Image 
              style={{width:128,height:128, marginTop:50}}
              source={require("./imgs/icon_kRounge_big.png")}/>
        </View>
        <View style={styles.title}>
          <Text style={{fontSize:18}}>플립드 러닝을 위한 JBNU 강의포털</Text>
        </View>
        <View style={styles.content}>
          <TextInput style={styles.text_input} placeholder="직번(학번)"/>
          <TextInput style={styles.text_input} placeholder="비밀번호"/>
          <View style={{flexDirection:"row", justifyContent:'flex-start'}}>
            <CheckBox value={this.state.checked}
            onValueChange={() => this.setState({ checked: !this.state.checked })}/>
            <Text>로그인 상태 유지</Text>
          </View>
        </View>
        <View style={styles.content2}>
          <CustomButton buttonColor={'rgb(0,131,241)'} title={'로그인'} onPress={()=>alert('로그인 버튼')}/>
          <CustomButton />
        </View>
        <View style={styles.footer}>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width:'100%',
    height:'25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    width:'100%',
    height:'10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    height:'35%',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width:'90%',
    marginLeft:'5%',
    backgroundColor: '#fff',
  },
  content2:{
    height: '10%',
    justifyContent:'center',
    alignItems:'center',
  },
  footer: {
    height:'20%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
  },
  text_input:{
    borderColor:'gray',
    borderWidth:1,
    width:'100%',
    borderRadius:5,
    paddingLeft:15
  }
});