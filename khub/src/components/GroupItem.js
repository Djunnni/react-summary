import React, { useState,useEffect } from 'react';
import {View,Text,Image,StyleSheet,TouchableWithoutFeedback,ImageBackground} from 'react-native';

const GroupItem = (props) => {
    const [id,setId] = useState(props.id!=''? props.id :'');
    const [groupName,setGroupName] = useState(props.groupName!=''? props.groupName:'');
    const [groupPhoto,setGroupPhoto] = useState(props.groupPhoto!=''? props.groupPhoto:'');
    const [name,setName] = useState(props.name!=''? props.name:'');
    const [groupId,setGroupId] = useState(props.groupId!=''? props.groupId:'');
    const [favorite,setFavorite] = useState(props.favorite!=''? props.favorite:false);
    const [date,setDate] = useState(props.date!=''? props.date:'');
    const navigation = props.navigation;
    // useEffect(()=>{
    //     setId(props.id);
    //     setGroupName(props.groupName);
    //     setGroupPhoto(props.groupPhoto);
    //     setName(props.name);
    //     setGroupId(props.groupId);
    //     setFavorite(props.favorite);
    //     setDate(props.date);
    // },[]);

    return(
        <TouchableWithoutFeedback onPress={navigation.navigate('Lecture')}>
            <View style={styles.item}>
                <View style={styles.itemBackground}>
                        <ImageBackground style={styles.itemImage} source={{uri:groupPhoto}}/>
                </View>
                <View style={styles.itemInfo}>
                        <Text>{name}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    item: {
        width:132,
        height:160,
        margin:10,
        borderRadius:10,
        overflow:'hidden',
    },
    itemBackground:{
        backgroundColor:'#fff',
        height:111
    },
    itemImage: {
        height:'100%',
        width:'100%',
        resizeMode:'contain',
    },
    itemInfo:{
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        width:131,
        height:40,
    }
});
export default GroupItem; 