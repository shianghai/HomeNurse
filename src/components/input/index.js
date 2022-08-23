import { TextInput, View,  } from "react-native";


function InputField({...props}){
    return(
        <View style={[{height: "10%", width: "95%", borderWidth: 1, borderColor: 'lightgrey', borderRadius: 10,}, props.style]}>
            <TextInput 
                style={{width: "100%", height: "100%",}}/>
        </View>
    )
}


export default InputField