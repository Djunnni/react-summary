import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const NoteScreen = () => {
    return (
        <View style={styles.container}>
            <Text>NoteScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
export default NoteScreen;