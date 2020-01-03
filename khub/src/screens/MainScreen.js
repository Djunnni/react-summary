import React, {useState,useEffect} from 'react';
import {View,StyleSheet,Text,Alert,TouchableWithoutFeedback,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";

const datas = [
    {key:'창의적 공학설계 2분반'},
    {key:'데이터베이스 1분반'},
    {key:'소프트웨어공학 5분반'},
    {key:'정보검색 3분반'},
]
const MainScreen = ({navigation}) => {
    const [modal,setModal] = useState(false);
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Platform.OS === "ios"
      ? Dimensions.get("window").height
      : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>JBNUHub</Text>
                <View style={styles.titleItem}>
                    <TouchableWithoutFeedback onPress={()=>{Alert.alert('개인화면')}}>
                        <Icon style={styles.titleIcon} name='ios-contact'/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{Alert.alert('메일')}}>
                        <Icon style={styles.titleIcon} name='ios-mail'/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{Alert.alert('검색')}}>
                        <Icon style={styles.titleIcon} name='ios-search' />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{setModal(!modal)}}>
                        <Icon style={styles.titleIcon} name='md-more'/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            {/* Modal View */}
            <Modal style={styles.modal} 
                    isVisible={modal} 
                    onBackdropPress={() => setModal(!modal)} 
                    deviceHeight={deviceHeight}
                    deviceWidth={deviceWidth}>
                <View style={styles.modalview}>
                    <TouchableWithoutFeedback onPress={() => {navigation.navigate('Setting'); setModal(!modal);}}>
                        <Text style={styles.modalitem}>설정</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {Alert.alert('공지사항')}}>
                        <Text style={styles.modalitem}>공지사항</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {Alert.alert('내 강의대화 보기')}}>
                        <Text style={styles.modalitem}>내 강의대화 보기</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {Alert.alert('숨긴 강의 관리')}}>
                        <Text style={styles.modalitem}>숨긴 강의 관리</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {Alert.alert('즐겨찾기 관리')}}>
                        <Text style={styles.modalitem}>즐겨찾기 관리</Text>
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
            {/* Contents View */}
            <View style={styles.contents}>
                <Text>Contents</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        flex:1,
        fontSize:22,
        color:'#fff',
        fontWeight:'bold',
    },
    titleItem:{
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row',
    },
    titleIcon:{
        paddingHorizontal:15,
        color:'#fff',
        fontSize:26,
    },
    header:{
        flex:1,
        paddingLeft:15,
        width:'100%',
        backgroundColor:'rgb(66,141,208)',
        flexDirection:'row',
        alignItems:'center',
    },
    contents:{
        flex:10,
        width:'100%',
        backgroundColor:'#eee',
        alignItems:'center',
        padding:15,
    },
    modal : {
        flex:1,
        width:'70%',
        marginHorizontal:'15%',
    },
    modalview : {
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        padding:5,
    },
    modalitem : {
        fontSize:18,
        paddingVertical:10,
    }
});

export default MainScreen;