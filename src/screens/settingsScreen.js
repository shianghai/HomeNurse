import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {useState} from 'react'
import colors from "../../constants/colors";
import { useLayoutEffect } from "react";

function SettingsScreen({route, navigation}){

    const [toogleOn, setToogleOn] = useState(false);

   useLayoutEffect(()=>{
     navigation.setOptions({
        headerStyle: {backgroundColor: colors.light.primary}
     })
   }, [navigation])

    function notificationSelect(){
        navigation.navigate('NotificationsSettings')
    }
    function locationSelect(){
        navigation.navigate('LocationSettings')
    }
    function emailSelect(){
        navigation.navigate('EmailSettings')
    }
    function profileSelect(){
        navigation.navigate('EditProfile')
    }
    
    return(
        <SafeAreaView style={{flex: 1}}>
            <ScrollView contentContainerStyle={{paddingHorizontal: '2%', marginTop: '5%'}}>
            
                <TouchableOpacity onPress={profileSelect}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'montserrat-medium', fontSize: 22, lineHeight: 24}}>Profile</Text>
                        <Ionicons name="chevron-forward" size={20} />
                    </View>
                    <Text style={{fontSize: 16, lineHeight: 24, fontFamily: 'montserrat-medium'}}>
                        Change your bio information
                    </Text>
                </TouchableOpacity>
                <View style={{backgroundColor: 'grey', height: "0.2%", marginVertical: '5%'}}/>



                <View >
                <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{fontSize: 22, lineHeight: 24, fontFamily: 'montserrat-medium', justifyContent: 'center'}}>
                        Enable push notifications
                    </Text>
                
                    <Feather 
                        name={ toogleOn ? 'toggle-right' : 'toggle-left'} 
                        size={30} color={ toogleOn ? colors.light.secondaryTint : "grey"} 
                        onPress={()=>{setToogleOn(!toogleOn)}}
                        
                    />
                </View>
                <Text style={{fontSize: 16, lineHeight: 24, fontFamily: 'montserrat-medium'}}>
                    Get live notifications. You can disable this option to prevennt notifications from showing in the notifications area
                </Text>
            
            </View>


            <View style={{backgroundColor: 'grey', height: "0.2%", marginVertical: '5%'}}/>

                <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 22, lineHeight: 24, fontFamily: 'montserrat-medium', justifyContent: 'center'}}>
                        Enable Locations
                    </Text>
                
                    <Feather 
                        name={ toogleOn ? 'toggle-right' : 'toggle-left'} 
                        size={30} color={ toogleOn ? colors.light.secondaryTint : "grey"} 
                        onPress={()=>{setToogleOn(!toogleOn)}}
                    />
                </View>
                <Text style={{fontSize: 16, lineHeight: 24, }}>
                    Access the location of this device. You can disable this option to prevent your location from getting known.
                </Text>
            
            </View>



            <View style={{backgroundColor: 'grey', height: "0.2%",  marginVertical: '5%'}}/>


                <TouchableOpacity onPress={emailSelect}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'montserrat-medium', fontSize: 22, lineHeight: 30}}>Account Settings</Text>
                        <Ionicons name="chevron-forward" size={20} />
                    </View>
                    <Text style={{fontSize: 16, lineHeight: 24, }}>
                        Change username and password
                    </Text>
                </TouchableOpacity>
                <View style={{backgroundColor: 'grey', height: "0.2%",  marginVertical: '5%'}}/>

                

               
            </ScrollView>
        </SafeAreaView>
    )

}

export default SettingsScreen;