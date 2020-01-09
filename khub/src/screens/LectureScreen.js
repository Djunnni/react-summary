import React ,{useState, Fragment} from 'react';
import {SafeAreaView,View,Text,StyleSheet, Image} from 'react-native';

const data = {"result":"success","groupId":21,"ownerName":"000","groupName":"모바일앱개발연구","ownerId":2,"memberLength":38,"groupPath":"/앱연구","groupPhoto":"https://khub.jbnu.ac.kr/img/group/background/default_0.jpg","isAdmin":false,"isJoin":true,"groupAuth":0}

const LectureScreen = ({navigation,id}) => {
    const [name,setName] = useState(navigation.getParam('id','123'));
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.background} source={require('../img/background/default_0.jpg')}/>
                <View style={styles.lecInfo}>
                    <Text style={styles.title}>{name}</Text>
                </View>
                <View style={styles.bar}>
                    <Text style={styles.barItem}>강의대화</Text>
                    <Text style={styles.barItem}>자료</Text>
                    <Text style={styles.barItem}>멤버</Text>
                    <Text style={styles.barItem}>출석체크</Text>
                    <Text style={styles.barItem}>레포트</Text>
                    <Text style={styles.barItem}>쪽지</Text>
                    <Text style={styles.barItem}>정보수집</Text>
                    <Text style={styles.barItem}>일정</Text>
                    <Text style={styles.barItem}>북마크</Text>
                    <Text style={styles.barItem}>공지사항</Text>
                    <Text style={styles.barItem}>설문조사</Text>
                </View>
            </View>
            <View style={styles.content}>
                    <Text style={styles.writeButton}>강의대화에 글쓰기</Text>
                    <View style={styles.contentItem}>
                        <View style={styles.userInfo}>
                            <Image/>
                            <View style={{}}>

                            </View>
                        </View>
                        <View style={styles.contentInfo}>

                        </View>
                        <View style={styles.review}>
                            <Text>댓글 0</Text>
                            <Text>댓글 쓰기</Text>
                        </View>
                    </View>
            </View>
            <View style={styles.footer}>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee',
    },
    background:{
        width: '100%',
        height:'60%',
        resizeMode: 'cover',
    },
    header:{
        height:'40%',
        
    },
    content: {
        alignItems:'center',
        paddingTop:10,
    },
    footer: {

    },
    title: {
        fontSize:18,
    },
    lecInfo: {
        padding:10,
        backgroundColor:'#fff',
    },
    bar: {
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        padding:5,
        borderWidth:0.5,
        borderColor:'#eee',
        backgroundColor:'#fff',
    },
    barItem: {
        fontSize:15,
        paddingHorizontal:10,
    },
    writeButton:{
        backgroundColor:'#428ed0',
        color:'#fff',
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius:15,
        fontSize:15,
    },
    contentItem:{
        padding:10,
        backgroundColor:'#fff',
        width:'100%',
        height:220,
        marginVertical:10,
    },
    userInfo: {
        flexDirection:'row',
        width:'100%',
        height:'30%',
        borderWidth:1,
    },
    contentInfo: {
        height:'50%',
        borderWidth:1,
    },
    review:{
        flex:1,
        flexDirection:'row',
        height:'20%',
        borderWidth:1,
        justifyContent:'space-around',
        alignItems:'center'
    }
});

export default LectureScreen;