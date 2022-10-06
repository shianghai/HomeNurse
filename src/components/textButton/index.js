import {Button, Text, TouchableOpacity, View} from  'react-native'
import colors from '../../../constants/colors'
import {Ionicons, MaterialCommunityIcons, EvilIcons} from '@expo/vector-icons'


function TextButton({text, color, ...props}){
    return(
        
                <TouchableOpacity style={{  alignItems: 'center', justifyContent: "center", flexDirection: 'row', }} onPress={props.onPress}>
                    <View style={{}}>
                        <Text style={[{fontSize: 18, color: color,}, props.style]}>{text}</Text>
                    </View>
                </TouchableOpacity>
        
        
    )
}

export default TextButton