import { useState } from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View, ActivityIndicator, Image, KeyboardAvoidingView, Platform} from 'react-native';
import InputField from "../components/input";
import FlatButton from "../components/flatButton";
import {useSelector, useDispatch} from 'react-redux'
import IValidator from "../../utils/iValidator";
import ValidationComment from "../components/validationComment";
import { signInUserWithEmailAndPassword } from "../firebase";
import colors from "../../constants/colors";
import {firebaseApp} from '../firebase'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import TextButton from '../components/textButton'



function LoginScreen({navigation}){
    const editEnded = useSelector((state)=>state.emailEditEnded.editMode)
    const emailText = useSelector((state=>state.emailText.emailValue))
    const validatorFeedback = IValidator(emailText);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMeassage, setErrorMessage] = useState("")

    function handleSignIn(){
        const auth = getAuth(firebaseApp);
        if(email === "" || password === ""){
            setError(true);
            setErrorMessage("please input all text fields");
        }
        else{
            signInWithEmailAndPassword(auth, email, password).then(
                (userCredential)=>{
                    if(userCredential != null) navigation.navigate('Root')
                }

            )
            .catch((error) => {
                setError(true);
                setErrorMessage("username and password do not match");
              });
        }
        
        
    }
    function toogleIndicator(){
        setLoading(!loading);
    }
    

    return(
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? "position" : "height"} contentContainerStyle={{flex: 1, }} keyboardVerticalOffset={-80}>
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#04293A"}} onLayout={()=>{toogleIndicator()}}>
            <ScrollView contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: '5%'}}>
                    <Image source={require('../../assets/cardiogram.png')} resizeMethod={"scale"} resizeMode={"cover"}/>
                </View>
                
                <InputField 
                    
                    textStyle={{color: 'grey'}}
                    placeHolderText={'Email'}
                    inputType={'email'}
                    style={{marginTop: '5%', borderRadius: 10}}
                    onChangeText = {(text)=> setEmail(text) }
                    />
                   
                <InputField 
                    style={{marginTop: '5%', borderRadius: 10}}
                   textStyle={{color: 'grey'}}
                    endIconName={'eye-off'}
                    placeHolderText={'Password'}
                    secureTextEntry={true}
                    onChangeText = {(text)=> setPassword(text) }/>
                

                <Text style={{fontStyle: 'italic', justifyContent: 'flex-end', alignSelf: 'flex-end', color: "#FFFFFF", marginTop: "3%"}}>Forgot Password</Text>

                    { error && <View style={{marginTop: '5%'}}>
                        <Text style={{color: 'red'}}>{errorMeassage}</Text>
                    </View>}
                
                <FlatButton text={'Sign In'} style={{marginTop: '5%',}} onPress={()=>handleSignIn()} />
                
                
                
                
                <View style={{flexDirection: 'row', marginTop: '5%'}}>
                    <Text style={{fontSize: 18, color: "#FFFFFF"}}>Don't have an account? </Text>
                    <TextButton text={"Sign Up"} color={"#3063C5"} style={{textDecorationLine: 'underline'}}/>
                </View>
            </ScrollView>
            
        </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;