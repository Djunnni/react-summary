import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const NoticeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>NoticeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
export default NoticeScreen;