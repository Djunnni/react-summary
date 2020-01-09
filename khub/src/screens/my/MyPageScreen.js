import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const MyPageScreen = () => {
    return (
        <View style={styles.container}>
            <Text>MyPageScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
export default MyPageScreen;