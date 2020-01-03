import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ListItem from '../components/ListItem';

const SettingScreen = ({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon onPress={()=>{navigation.goBack()}} style={{color:'#fff',fontSize:26, position:'absolute',left:15,}} name='ios-arrow-back'/>
                <Text style={styles.title}>설정</Text>
            </View>
            <View style={styles.contents}>
                <ListItem onpress={()=>{}} title='사진 변경' iconName=''/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'#fff'
    },
    header:{
        flex:1,
        width:'100%',
        backgroundColor:'rgb(66,141,208)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    contents:{
        flex:10,
        width:'100%',
        backgroundColor:'#eee',
        alignItems:'center',
        paddingTop:15,
    },
});
export default SettingScreen;