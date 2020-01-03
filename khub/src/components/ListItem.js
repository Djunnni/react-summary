import React, { Component } from 'react';
import {View,Text,TouchableWithoutFeedback,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ListItem extends Component {
    defaultProps = {
        onpress : ()=>{},
        iconName : '',
        title: '',
    }
    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.props.onpress}>
                <View style={styles.container}>
                    <Icon style={styles.icon} name={this.props.iconName}/>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Icon style={styles.icon} name='ios-arrow-forward'/>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:70,
        padding:10,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    icon:{
        fontSize:26,
        fontWeight:'bold', 
    },
    title:{
        fontSize:18,
    },
});