import react, {useEffect, useState} from "react";
import {View,Text, Alert,  } from 'react-native';
import Style from '../../utilis/AppStyle';
import {TextInput, Button, ActivityIndicator } from 'react-native-paper';
import Colors from '../../utilis/AppColors';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as actions from '../../../store/actions';
import {useDispatch} from 'react-redux';
//import { combineReducers } from 'redux';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        if(errorMsg)
        {
            Alert.alert('Login',errorMsg);
        }
    },[errorMsg])

    const login = async() => {
        setIsLoading(true);
        if(email != '' && password != ''){
            const action = actions.login(email,password);
            try {
                dispatch(action);
                setIsLoading(false);
            } catch (error) {
                
            }
        } else {
            setIsLoading(false);
            setErrorMsg('Email and password are required');
        }
    }

    return(
        <View style={Style.container}>

            <Text style={{fontSize:24, fontWeight:'700', marginBottom:30}}>Login</Text>

            <TextInput
                value={email} onChangeText={text => {setEmail(text)}}
                label="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                right={<TextInput.Icon icon="email" />}
            />

            <TextInput
                value={password} onChangeText={text => {setPassword(text)}}
                label="Password"
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
            />

            {
                isLoading? (<ActivityIndicator color={Colors.ocean} size="large"/>) 
                : (<Button icon="send" mode="contained" onPress={login}>LOGIN</Button>)
            }

        </View>
    )
}

export default Login;