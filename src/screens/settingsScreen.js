import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function SettingsScreen(){
    return(
        <SafeAreaView style={{flex: 1}}>
            <ScrollView contentContainerStyle={{paddingHorizontal: '2%'}}>
            
                <TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%'}}>
                        <Text style={{fontFamily: 'montserrat-medium', fontSize: 30, lineHeight: 30}}>Notifications</Text>
                        <Ionicons name="chevron-forward" size={20} />
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor: 'grey', height: "0.2%", marginVertical: '5%'}}/>

                <TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'montserrat-medium', fontSize: 30, lineHeight: 30}}>Location</Text>
                        <Ionicons name="chevron-forward" size={20} />
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor: 'grey', height: "0.2%",  marginVertical: '5%'}}/>


                <TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'montserrat-medium', fontSize: 30, lineHeight: 30}}>Email and Password</Text>
                        <Ionicons name="chevron-forward" size={20} />
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor: 'grey', height: "0.2%",  marginVertical: '5%'}}/>

                <TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'montserrat-medium', fontSize: 30, lineHeight: 30}}>another thing</Text>
                        <Ionicons name="chevron-forward" size={20} />
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor: 'grey', height: "0.2%", marginVertical: '5%'}}/>

               
            </ScrollView>
        </SafeAreaView>
    )

}

export default SettingsScreen;