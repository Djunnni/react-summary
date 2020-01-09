import React, { Component, useState } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

const LoginButton = (props) => {
    const [buttonColor,setButtonColor] = useState(props.buttonColor? props.buttonColor:'#000');
    const [titleColor,setTitleColor] = useState(props.titleColor? props.titleColor:'#fff');
    const [title,setTitle] = useState(props.title? props.title:'undefined');
    const [onPress,setOnPress] = useState(props.onPress? props.onPress:()=>{});


    return(
        <TouchableOpacity onPress={onPress}
        style={[styles.button,
               {backgroundColor:buttonColor}
               ]}>
               <Text style={[styles.title,
                           {color:titleColor}
                           ]}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        width:'80%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 10,
        borderRadius:5,
    },
    title: {
        fontSize:18,
    }
   });

export default LoginButton;