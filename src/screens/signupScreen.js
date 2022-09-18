import { SafeAreaView, View, Text, ScrollView, Pressable } from "react-native";
import InputField from "../components/input";
import FlatButton from "../components/flatButton";
import colors from "../../constants/colors";


function SignUpScreen({navigation}){
    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.light.input}}>
            <ScrollView contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: '3%'}}>
                    <Text style={{fontSize: 40}}>Create Account</Text>
                    
                </View>
            <InputField 
                    style={{height: '11%',}}
                    
                    placeHolderText={'full name'}/>
                <InputField 
                    style={{height: '11%',}}
                    
                    placeHolderText={'email'}/>
                <InputField 
                    style={{height: '11%', }}
                    endIconName={'eye-off'}
                    placeHolderText={'password'}
                    secureTextEntry={true}/>
                    <InputField 
                    style={{height: '11%', }}
                    endIconName={'eye-off'}
                    placeHolderText={'confrim password'}
                    secureTextEntry={true}/>
                
                <FlatButton text={'Create Account'} style={{marginTop: '10%', width: "99%", height: "9%",}} />
                <Text style={{marginVertical: '2%', fontSize: 20}}>or</Text>
                <FlatButton text={'  signup with google'} style={{ width: "99%", height: "9%", backgroundColor: '#c72218'}} textStyle={{fontSize: 15}} startIconName={'sc-google-plus'}/>

                <View style={{flexDirection: 'row', marginTop: '5%'}}>
                    <Text style={{fontSize: 18}}>Already have an account?</Text>
                    <Pressable onPress={()=>navigation.navigate('LogIn')}>
                        <Text style={{textDecorationLine: 'underline', fontSize: 18}}>  Login</Text>
                    </Pressable>
                    
                </View>
            </ScrollView>
            
        </SafeAreaView>
    
    )
}

export default SignUpScreen;