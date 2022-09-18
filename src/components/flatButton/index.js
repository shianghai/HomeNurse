import {Button, Text, TouchableOpacity, View} from  'react-native'
import colors from '../../../constants/colors'
import {Ionicons, MaterialCommunityIcons, EvilIcons} from '@expo/vector-icons'


function FlatButton({text, ...props}){
    return(
        <View style={[{width: "95%", height: "12%%", backgroundColor: colors.dark.secondaryDark, }, props.style]}>
                <TouchableOpacity style={{ width: "100%", height: "100%", alignItems: 'center', justifyContent: "center", flexDirection: 'row', }} onPress={props.onPress}>
                    {
                        props.startIconName && <EvilIcons name={props.startIconName} size={30} color={'yellow'}/>
                    }
                    <View style={{}}>
                        <Text style={[{fontSize: 24, color: colors.light.primaryTint}, props.textStyle]}>{text}</Text>
                    </View>
                </TouchableOpacity>
        </View>
        
    )
}

export default FlatButton