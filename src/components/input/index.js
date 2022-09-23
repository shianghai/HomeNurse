import { TextInput, View,  } from "react-native";
import { useState } from "react";
import colors from "../../../constants/colors";
import {Feather} from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux'
import { setEmailText, clearEmailText } from "../../redux/emaiText";
import { turnOnEmailEditEnded } from "../../redux/emailEditEnded";




const defaultInputProps = {
    focused:  true,
    enabled: true,
    otpInput: false,
    secureTextEntry: false,
    placeHolderText: '',
    viewStyle: {
        width: "99%",
        height: "12%",
        marginTop: "3%",
        borderRadius: 8,

    },
    collorPallete: {
        borderActive: colors.light.secondaryTint,
        borderInactive: 'grey',
        hasError: 'red',
        content: 'grey',
        backgroundInactive: '#E1EBEA',
        backgroundActive: 'white'
    }
}



function InputField({ ...props}){
    const emailText = useSelector((state)=>state.emailText.emailValue);
    const editEnded = useSelector((state)=>state.emailEditEnded.editMode)
    const dispatch = useDispatch();

    const [active, setActive] = useState(false)
    const [text, setText] = useState('')
    
    const handleFocus=()=>{
        setActive(!active)
    }

    function handleEndEditting(inputType){
        if(inputType = 'email'){
            dispatch(turnOnEmailEditEnded)
        }
    }

    return(
        <View style={[ defaultInputProps.viewStyle, props.style,
                        {flexDirection: 'row',
                        borderWidth: 0.5,
                        borderColor: active? defaultInputProps.collorPallete.borderActive : defaultInputProps.collorPallete.borderInactive,
                        backgroundColor: active? defaultInputProps.collorPallete.backgroundActive : defaultInputProps.collorPallete.backgroundInactive
                        }]}>
            {
                props.startIconName && 
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    <Feather name={props.startIconName} size={15} style={{alignSelf: 'center', marginLeft: '5%'}}/>
            
            }

            <TextInput 
                placeholder={props.placeHolderText}
                secureTextEntry={props.secureTextEntry}
                placeholderTextColor={defaultInputProps.collorPallete.content}
                editable={true}
                style={{width: '90%', height: '90%', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', fontSize: 18, alignContent:'center', textAlign: 'center', color: 'grey', }}
                onFocus={()=>handleFocus()}
                onBlur={()=>handleFocus()}
                onChangeText = {(text)=>dispatch(setEmailText(text))}
                onSubmitEditing={props.onSubmitEditing}
                onEndEditing={handleEndEditting(props.inputType)}
                />

                {
                    props.endIconName && 
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        <Feather name={props.endIconName} size={15} style={{alignSelf: 'center'}}/>
                    
                }
        </View>

    )
}


export default InputField