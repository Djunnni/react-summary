import React ,{useState} from 'react';
import {SafeAreaView,View,Text,StyleSheet, Image} from 'react-native';

const LectureScreen = ({navigation}) => {
    const [save,setSave] = useState(false);

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                
            </View>
            <View style={styles.content}>

            </View>
            <View style={styles.footer}>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:5,
    },
    content: {

    },
    footer: {

    },
});

export default LectureScreen;