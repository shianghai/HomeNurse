import {View, Text, Image, SafeAreaView} from 'react-native'
import { FontAwesome5, EvilIcons, Ionicons } from '@expo/vector-icons'
import DisplayImage from '../displayImage'

export default function Header({userName, profilePic, hasBack, navigation}){
    function handleGoBack(){
        navigation.goBack()
    }

    return(
        <SafeAreaView style={{
            height: "8%", 
            justifyContent: 'space-between',
            shadowColor: 'grey',
            shadowOffset: {width: -1, height:1 },
            shadowOpacity: 0.5,
            shadowRadius: 5,  
            borderWidth: 1,
            backgroundColor: 'white',
            borderColor: 'white',
            width: '100%'
            
            }}
            >
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1}}>
                
                
                    {hasBack && <Ionicons name='caret-back' size={20} color={'blue'} onPress={()=>(handleGoBack())}/>}
                    {profilePic === null ? <DisplayImage image={profilePic} size={40}/> : <DisplayImage image={"https://picsum.photos/200/300"} size={40}/>}
                    
                        {/* <Text style={{fontSize: 20, fontFamily: 'montserrat-medium', color: 'white'}}>Hi, {userName}</Text>
                        <Text style={{fontSize: 16, fontFamily: 'montserrat-light', color: 'white'}}>How are you doing today?</Text> */}
                        <Image source={require('../../../assets/cardiogram.png')} resizeMethod={"scale"} resizeMode={"cover"} style={{width: '11%', height: '80%', margin: '2%'}}/>
                <EvilIcons name='navicon' size={30} color={'blue'}/>  
             </View>
            </SafeAreaView>
    )
}