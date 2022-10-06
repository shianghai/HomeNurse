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
        
        

    },
    collorPallete: {
        borderActive: colors.light.secondaryTint,
        borderInactive: '#3063C5',
        hasError: 'red',
        
        backgroundActive: '#f0faf3',
        backgroundInactive: 'white'
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
                         borderBottomWidth: 1.5,
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
                style={[props.textStyle, {width: '90%', height: '90%',  fontSize: 18,  textAlignVertical: "bottom"}, ]}
                onFocus={()=>handleFocus()}
                onBlur={()=>handleFocus()}
                onChangeText = {props.onChangeText}
                onSubmitEditing={props.onSubmitEditing}
                onEndEditing={handleEndEditting(props.inputType)}
                />

                {
                    props.endIconName && 
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        <Feather name={props.endIconName} size={15} style={{alignSelf: 'center', color: '#50cfd4'}}/>
                    
                }
        </View>

    )
}


export default InputField