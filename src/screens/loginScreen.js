import { useState } from "react";
import {Pressable, SafeAreaView, ScrollView, Text, View, ActivityIndicator} from 'react-native';
import InputField from "../components/input";
import FlatButton from "../components/flatButton";
import {useSelector, useDispatch} from 'react-redux'
import IValidator from "../../utils/iValidator";
import ValidationComment from "../components/validationComment";
import { signInUserWithEmailAndPassword } from "../firebase";
import colors from "../../constants/colors";
import {firebaseApp} from '../firebase'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'



function LoginScreen({navigation}){
    const editEnded = useSelector((state)=>state.emailEditEnded.editMode)
    const emailText = useSelector((state=>state.emailText.emailValue))
    const validatorFeedback = IValidator(emailText);

    const [loading, setLoading] = useState(false)

    function handleSignIn(){
        const auth = getAuth(firebaseApp);
        signInWithEmailAndPassword(auth, "enochdaywalker@gmail.com", "password123").then(
            (userCredential)=>{
                if(userCredential != null) navigation.navigate('Root')
            }
        )
        
    }
    function toogleIndicator(){
        setLoading(!loading);
    }
    

    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.light.input}} onLayout={()=>{toogleIndicator()}}>
            <ScrollView contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: '5%'}}>
                    <Text style={{fontSize: 40}}>Welcome Back</Text>
                    <Text style={{fontSize: 20}}>Login</Text>
                </View>
                
                <InputField 
                    style={{height: '12%',}}
                    
                    placeHolderText={'email'}
                    inputType={'email'}/>
                    {
                        editEnded && <View>
                               <ValidationComment type = 'email' validationFeedBack = {validatorFeedback}/>
                        </View>
                    }
                <InputField 
                    style={{height: '12%', marginTop: '5%'}}
                    endIconName={'eye-off'}
                    placeHolderText={'password'}
                    secureTextEntry={true}/>
                
                <FlatButton text={'Login'} style={{marginTop: '10%', width: "99%", height: "9%",}} onPress={()=>handleSignIn()} />
                
                <Text style={{marginVertical: '2%', fontSize: 20}}>or</Text>
                <FlatButton text={'  login with Google'} style={{ width: "99%", height: "9%", backgroundColor: '#c72218'}} textStyle={{fontSize: 15}} startIconName={'sc-google-plus'}/>

                <View style={{flexDirection: 'row', marginTop: '5%'}}>
                    <Text style={{fontSize: 18}}>Don't have an account?</Text>
                    <Pressable onPress={()=>navigation.navigate('SignUp')}>
                        <Text style={{textDecorationLine: 'underline', fontSize: 18}}>  SignUp</Text>
                    </Pressable>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default LoginScreen;