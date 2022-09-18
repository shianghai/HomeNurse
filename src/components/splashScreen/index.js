import {View, SafeAreaView} from 'react-native-fs'
import {Ionicons, FontAwesome5} from '@expo/vector-icons'



export default function SplashScreen(){
    return(
       <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
           <FontAwesome5 name='heartbeat' size={40}/> 
       </SafeAreaView>
    )
}