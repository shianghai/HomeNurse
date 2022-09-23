import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {Text, SafeAreaView, View,} from 'react-native';
import colors from "../../constants/colors";


export default function NotificationSettingsScreen(){
    const [toogleOn, setToogleOn] = useState(false);

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{marginHorizontal: '2%'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 20}}>
                        Enable push notifications
                    </Text>
                
                    <Feather 
                        name={ toogleOn ? 'toggle-right' : 'toggle-left'} 
                        size={30} color={ toogleOn ? colors.light.secondaryTint : "grey"} 
                        onPress={()=>{setToogleOn(!toogleOn)}}
                    />
                </View>
            <Text style={{fontSize: 16, lineHeight: 24, marginHorizontal: '2%'}}>
                Get live notifications. You can disable this option to prevennt notifications from showing in the notifications area
            </Text>
            
            </View>

        </SafeAreaView>
    )
}