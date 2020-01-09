import React,{useState,useEffect} from 'react';
import {SafeAreaView,View,Text,StyleSheet,Image,TextInput, Alert,TouchableOpacity,CheckBox} from 'react-native';

import LoginButton from '../components/LoginButton';

const AuthScreen = ({navigation})=> {
    const [id,setId] = useState('');
    const [pw,setPw] = useState('');

    const _LoginHandle = () =>{
          navigation.navigate('Home');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../img/icon_kRounge_big.png')} style={styles.icon}/>
            <Text style={styles.welcome}>플립드 러닝을 위한 JBNU 강의포털</Text>
            <TextInput style={styles.textInput} onChangeText={(id)=>setId(id)} placeholder='아이디' autoCorrect={false}/>
            <TextInput style={styles.textInput} onChangeText={(pw)=>setPw(pw)} placeholder='비밀번호' autoCorrect={false} secureTextEntry={true}/>
            
            <LoginButton onPress={()=>_LoginHandle} title='로그인' titleColor='#fff' buttonColor='rgb(66,141,208)'/>
            <View style={styles.footer}>
                <TouchableOpacity onPress={()=>{Alert.alert('회원가입이 필요없습니다.\n전북대학교 학번/사번을 이용해주세요.')}}>
                    <Text>회원가입</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>아이디/비밀번호 찾기</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    icon:{
        width:100,
        height:100,
        marginBottom:30,
    },
    welcome:{
        fontSize:18,
        textAlign:'center',
        marginBottom:30
    },
    textInput:{
        width:'80%',
        height:50,
        borderColor: 'gray',
        paddingVertical:10,
        borderWidth:0.3,
        paddingHorizontal:10,
        borderRadius:5,
        backgroundColor:'#fff',
        marginBottom:30
    },
    footer:{
        width:'60%',
        flexDirection:'row',
        alignItems:'center',
        marginVertical:15,
        justifyContent:'space-around',
    }
}) 
export default AuthScreen;