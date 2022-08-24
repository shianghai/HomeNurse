import { useNavigation } from '@react-navigation/native';
import {SafeAreaView, Text, View, Button, Image, ScrollView} from 'react-native';


function NewsDetailsScreen(){
    const navigation = useNavigation()
    function handleGoBack(){
        navigation.goBack()
    }
    return(
        
        <SafeAreaView style={{flex: 1}}>
            <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={{alignItems: 'center', flex: 1}}>
                <Text style={{lineHeight: 24, fontSize: 28, padding: "3%", fontFamily: 'montserrat-medium'}}>Teaspoon of salt is healthy for everyday life</Text>
                <Image source={require('../../assets/2.jpg')} style={{width: "99%", height: "40%"}} resizeMode="cover"/>
                <Text style={{lineHeight: 20, fontSize: 16,  padding: "1%", fontFamily: 'montserrat-light'}}>Lorem ipsum dolor sit amet,</Text>                
                <Text style={{lineHeight: 24, fontSize:20,  padding: "3%", fontFamily: 'montserrat-light', marginTop: "3%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma gna aliqua. Ut enim ad minim veniam, quis nostrud exeUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                

      
                

            </View>
            </ScrollView>
            
        </SafeAreaView>
        
        
    )
}

export default NewsDetailsScreen;