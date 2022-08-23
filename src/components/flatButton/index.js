import {Button, Text, TouchableOpacity, View} from  'react-native'


function FlatButton({text, ...props}){
    return(
        <View style={[{width: "95%", height: "12%%", backgroundColor: "blue", }, props.style]}>
                <TouchableOpacity style={{ width: "100%", height: "100%", alignItems: 'center', justifyContent: "center"}}>
                    <View style={{}}>
                        <Text style={{fontSize: 24}}>{text}</Text>
                    </View>
                </TouchableOpacity>
        </View>
        
    )
}

export default FlatButton