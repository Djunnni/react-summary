import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,TouchableWithoutFeedback} from 'react-native';

const InfoButton = (props) => {
    const [color,setColor] = useState('#000');
    const [tle,setTle] = useState(props.title);
    const [subtle,setSubtle] = useState(props.subtitle);

    useEffect(()=>{
        setColor(props.color);
    })
    return (
        <View style={styles.container}>
            <Text style={styles.title,{color:color}}>{tle}</Text>
            <Text style={styles.subtitle,{color:color}}>{subtle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:70,
        padding:10,
        paddingHorizontal:15,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:0.75,
        borderColor:'#eee',
    },
    title:{
        fontSize:18,
    },
    subtitle:{

    }
})

export default InfoButton;