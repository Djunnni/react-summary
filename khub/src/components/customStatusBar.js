import React,{useState,useEffect} from 'react';
import {View,StatusBar,SafeAreaView ,StyleSheet} from 'react-native';

const CustomStatusBar = ({backgroundColor,props}) => {
    const [background,setBackground] = useState(backgroundColor? backgroundColor: '#428ed0');

    return(
        <SafeAreaView style={{backgroundColor:'#428ed0'}}>
            <StatusBar backgroundColor={background} barStyle='light-content'/>
        </SafeAreaView>
    )
}

export default CustomStatusBar;