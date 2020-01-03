import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

export default class customButton extends Component {
    static defaultProps ={
        buttonColor: '#000',
        titleColor: '#fff',
        title:'undefined',
        onPress : ()=>{},
    }
    constructor(props){
        super(props);
    }

    render(){
    return(
        <TouchableOpacity onPress={this.props.onPress}
        style={[styles.button,
               {backgroundColor:this.props.buttonColor}
               ]}>
               <Text style={[styles.title,
                           {color:this.props.titleColor}
                           ]}>{this.props.title}</Text>
        </TouchableOpacity>
    )
}
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
