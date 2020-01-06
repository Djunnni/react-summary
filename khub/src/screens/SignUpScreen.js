import firebase from 'react-native-firebase';
import React , {useState,useEffect} from 'react-native';

// firebase 회원가입 예시 코드 
export default SignupScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [passwd,setPasswd] = useState('');

    handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,passwd)
        .then(()=> {
            navigation.navigate('Main')
        }).catch(error => console.log(error));
    }
}