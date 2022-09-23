import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {Text, SafeAreaView, View,} from 'react-native';
import colors from "../../constants/colors";


export default function LocationSettingsScreen(){
    const [toogleOn, setToogleOn] = useState(false);

    return(
        <SafeAreaView style={{flex: 1}}>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 20}}>
                        Enable Locations
                    </Text>
                
                    <Feather 
                        name={ toogleOn ? 'toggle-right' : 'toggle-left'} 
                        size={30} color={ toogleOn ? colors.light.secondaryTint : "grey"} 
                        onPress={()=>{setToogleOn(!toogleOn)}}
                    />
                </View>
            <Text style={{fontSize: 16, lineHeight: 24, padding: "4%"}}>
                Access the location of this device. You can disable this option to prevent your location from getting known.
            </Text>
            
            </View>

        </SafeAreaView>
    )
}