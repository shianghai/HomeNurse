import { useState } from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View, ActivityIndicator, Image, KeyboardAvoidingView, Platform} from 'react-native';
import InputField from "../components/input";
import FlatButton from "../components/flatButton";
import {useSelector, useDispatch} from 'react-redux'
import IValidator from "../../utils/iValidator";
import ValidationComment from "../components/validationComment";
import fireStoreDb, { signInUserWithEmailAndPassword } from "../firebase";
import colors from "../../constants/colors";
import {firebaseApp} from '../firebase'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import TextButton from '../components/textButton'
import {collection, addDoc} from 'firebase/firestore'
import { Ionicons } from '@expo/vector-icons';


 

function SignUpScreen({navigation}){
    const editEnded = useSelector((state)=>state.emailEditEnded.editMode)
    const emailText = useSelector((state=>state.emailText.emailValue))
    const validatorFeedback = IValidator(emailText);
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMeassage, setErrorMessage] = useState("")
    const [isProfessional, setIsProfessional] = useState(false)

//TODO: add spinning action to when account is being created
//TODO: addd activityindicator on splash screen

    function handleSignUp(){
        const auth = getAuth(firebaseApp);
        if(email === "" || password === ""){
            setError(true);
            setErrorMessage("please input all text fields");
        }
        else{
            if(isProfessional){
                createUserWithEmailAndPassword(auth, email, password).then(
                    async (userCredential)=>{
                        try {
                            const docRef = await addDoc(collection(fireStoreDb, "professionals"), {
                              fullName: fullName,
                              email: userCredential.user.email,
                              uid: userCredential.user.uid
                            });
                            console.log("Document written with ID: ", docRef.id);
                          } catch (e) {
                            console.error("Error adding document: ", e);
                          }
                        if(userCredential != null) navigation.navigate('Root')
                    }
    
                ).catch((error) => {
                    setError(true);
                    setErrorMessage("error creating new user");
                  });
                }
            else{
            createUserWithEmailAndPassword(auth, email, password).then(
                async (userCredential)=>{
                    try {
                        const docRef = await addDoc(collection(fireStoreDb, "users"), {
                          fullName: fullName,
                          email: userCredential.user.email,
                          uid: userCredential.user.uid
                        });
                        console.log("Document written with ID: ", docRef.id);
                      } catch (e) {
                        console.error("Error adding document: ", e);
                      }
                    if(userCredential != null) navigation.navigate('Root')
                }

            )
            .catch((error) => {
                setError(true);
                setErrorMessage("error creating new user");
              });
        
        }
    }
    }  
    
        function toogleIndicator(){
                setLoading(!loading);
            }
    

    return(
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? "position" : "height"} contentContainerStyle={{flex: 1, }} keyboardVerticalOffset={-115}>
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#04293A"}} onLayout={()=>{toogleIndicator()}}>
            <ScrollView contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: '5%'}}>
                    <Image source={require('../../assets/cardiogram.png')} resizeMethod={"scale"} resizeMode={"cover"}/>
                </View>
                
                <InputField 
                    
                    textStyle={{color: 'grey'}}
                    placeHolderText={'full name'}
                    inputType={'name'}
                    style={{marginTop: '2%', borderRadius: 10, height: '10%'}}
                    onChangeText = {(text)=> setFullName(text) }
                    />
                    
                    <InputField 
                    
                    textStyle={{color: 'grey'}}
                    placeHolderText={'Email'}
                    inputType={'email'}
                    style={{marginTop: '5%', borderRadius: 10, height: '10%'}}
                    onChangeText = {(text)=> setEmail(text) }
                    />

                    <View style={{flexDirection: 'row',  width: '100%', justifyContent:'space-evenly', alignSelf: "flex-start", marginTop: '2%'}}>
                        <Text style={{fontSize: 25, color: "#FFFFFF"}}>I am a medical professional</Text>
                        <Ionicons name='checkbox' size={24} onPress={()=>{setIsProfessional(!isProfessional)}} color={isProfessional ? "blue" : "white"}/>
                    </View>
                   
                <InputField 
                    style={{marginTop: '5%', borderRadius: 10, height: '10%'}}
                   textStyle={{color: 'grey'}}
                    endIconName={'eye-off'}
                    placeHolderText={'Password'}
                    secureTextEntry={true}
                    onChangeText = {(text)=> setPassword(text) }/>
                <InputField 
                    style={{marginTop: '5%', borderRadius: 10, height: '10%'}}
                    textStyle={{color: 'grey'}}
                    endIconName={'eye-off'}
                    placeHolderText={'comfirm password'}
                    secureTextEntry={true}
                    />
                

                

                    { error && <View style={{marginTop: '5%'}}>
                        <Text style={{color: 'red'}}>{errorMeassage}</Text>
                    </View>}
                
                <FlatButton text={'SignUp'} style={{marginTop: '5%',}} onPress={()=>handleSignUp()} />
                
                
                
                
                <View style={{flexDirection: 'row', marginTop: '5%'}}>
                    <Text style={{fontSize: 18, color: "#FFFFFF"}}>Already have have an account? </Text>
                    <TextButton text={"Sign In"} color={"#3063C5"} style={{textDecorationLine: 'underline'}}/>
                </View>
            </ScrollView>
            
        </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

//TODO: validate password better
export default SignUpScreen;