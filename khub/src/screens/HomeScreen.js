import React, {useState,useEffect, Fragment} from 'react';
import {View,StatusBar,SafeAreaView,StyleSheet,Text,Alert,TouchableWithoutFeedback,Dimensions, FlatList,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";

import CustomStatusBar from '../components/customStatusBar';
// 과목 수정할 것!
const datas = [
    {"id":14142,"group_name":"테스트","total":2,"admin_ck":1,"group_photo":"https://khub.jbnu.ac.kr/img/group/background/default_5.jpg","name":"테스트","group_id":14142,"favorite_ck":false,"date":"20200107"},
    {"id":14231,"group_name":"모바일앱개발연구","total":8,"admin_ck":0,"group_photo":"https://khub.jbnu.ac.kr/img/group/background/default_0.jpg","name":"모바일앱개발연구","group_id":16431,"favorite_ck":false,"date":"20191125"},
    {"id":13322,"group_name":"2019-2 정보검색(1분반)","total":29,"admin_ck":0,"group_photo":"https://khub.jbnu.ac.kr/img/group/background/default_1.jpg","name":"2019-2 정보검색(1분반)","group_id":17322,"favorite_ck":false,"date":"20190905"},
    {"id":13110,"group_name":"2019-2 데이터베이스(5분반)","total":42,"admin_ck":0,"group_photo":"https://khub.jbnu.ac.kr/img/group/background/default_8.jpg","name":"2019-2 데이터베이스(5분반)","group_id":13810,"favorite_ck":false,"date":"20190903"},
    {"id":5628,"group_name":"평생지도교수3.0","total":54,"admin_ck":0,"group_photo":"https://khub.jbnu.ac.kr/img/group/background/default_1.jpg","name":"평생지도교수3.0","group_id":5968,"favorite_ck":false,"date":"20180316"},
    {"id":5639,"group_name":"공과대상담","total":54,"admin_ck":0,"group_photo":"https://khub.jbnu.ac.kr/img/group/background/default_7.jpg","name":"공과대상담","group_id":5969,"favorite_ck":false,"date":"20180316"},
    {"id":5740,"group_name":"컴퓨터공학부","total":52,"admin_ck":0,"group_photo":"https://khub.jbnu.ac.kr/img/group/background/default_3.jpg","name":"컴퓨터공학부","group_id":5970,"favorite_ck":false,"date":"20180316"},
    {"id":5571,"group_name":"평생지도교수","total":50,"admin_ck":0,"group_photo":"https://khub.jbnu.ac.kr/img/group/background/default_8.jpg","name":"평생지도교수(양재동)","group_id":5791,"favorite_ck":false,"date":"20180316"},
    {"id":0,"group_name":"공개라운지","total":0,"admin_ck":0,"group_photo":"","name":"공개라운지","group_id":0,"favorite_ck":false,"date":"20200109"}
]

const HomeScreen = ({navigation}) => {
    const appName ='JBNUHub';
    const [modal,setModal] = useState(false);
    const [canMakeGroup,setCanMakeGroup] = useState(false);
    /**
     * modal screen 변수
     * const {deviceWidth} = 디바이스의 너비 얻기
     * const {deviceHeight} = 디바이스의 높이 얻기
     */
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Platform.OS === "ios"
      ? Dimensions.get("window").height
      : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");

    /**
     * modal 화면 이동
     * @param {int} val = type value
     */
    const moveModal = (val) => {
        setModal(false);
        switch(val){
            case 1: 
                navigation.navigate('Setting');
                break;
            case 2:
                navigation.navigate('Notice');
                break;
            case 3:
                navigation.navigate('PrefHiddenGroup');
                break;
            case 4:
                navigation.navigate('PrefFavorite');
                break;
        }   
    }
    /**
     * return
     */
    return (
        <SafeAreaView style={styles.container}>
                <CustomStatusBar backgroundColor="#428ed0" />
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>{appName}</Text>
                <View style={styles.titleItem}>
                    <TouchableWithoutFeedback onPress={()=>{navigation.navigate('MyPage')}}>
                        <Icon style={styles.titleIcon} name='ios-contact'/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Note')}}>
                        <Icon style={styles.titleIcon} name='ios-mail'/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{navigation.navigate('GroupMake')}}>
                        <Icon style={styles.titleIcon} name='md-add' />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{navigation.navigate('GroupSearch')}}>
                        <Icon style={styles.titleIcon} name='ios-search' />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{setModal(true)}}>
                        <Icon style={styles.titleIcon} name='md-more'/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            
            {/* Contents View */}
            <View style={styles.contents}>
                    <FlatList
                            data ={datas}
                            numColumns={2}
                            renderItem = {({item})=>
                            <TouchableWithoutFeedback onPress={()=>navigation.navigate('Lecture',{id:item.name})}>
                                <View style={styles.item}>
                                    <View style={styles.itemBackground}>
                                            <ImageBackground style={styles.itemImage} source={{uri:item.group_photo}}/>
                                    </View>
                                    <View style={styles.itemInfo}>
                                            <Text>{item.name}</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            }
                            keyExtractor = {({item,index})=>item}
                    />
            </View>

             {/* Modal View */}
             <Modal style={styles.modal} 
                    isVisible={modal} 
                    onBackdropPress={() => setModal(false)} 
                    deviceHeight={deviceHeight}
                    deviceWidth={deviceWidth}>
                <View style={styles.modalview}>
                    <TouchableWithoutFeedback onPress={() => {moveModal(1)}}>
                        <Text style={styles.modalitem}>설정</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {moveModal(2)}}>
                        <Text style={styles.modalitem}>공지사항</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {moveModal(3)}}>
                        <Text style={styles.modalitem}>숨긴 강의 관리</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {moveModal(4)}}>
                        <Text style={styles.modalitem}>즐겨찾기 관리</Text>
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
        </SafeAreaView>
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
        width:'100%',
        fontSize:18,
        textAlign:'center',
        paddingVertical:10,
    },
    item: {
        width:132,
        height:160,
        margin:10,
        borderRadius:10,
        overflow:'hidden',
    },
    itemBackground:{
        backgroundColor:'#fff',
        height:111
    },
    itemImage: {
        height:'100%',
        width:'100%',
        resizeMode:'contain',
    },
    itemInfo:{
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        width:131,
        height:40,
    }
});

export default HomeScreen;