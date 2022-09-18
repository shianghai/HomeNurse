import {View, Text, Pressable, } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/homeScreen'
import DiagnosisScreen from '../../screens/diagnosisScreen'   
import MapScreen from '../../screens/mapScreen'
import { Ionicons, Feather } from '@expo/vector-icons'
import SearchBarr from '../../components/searchBarr'
import {useState, useEffect} from 'react';
import ProfilePicture from '../../components/displayImage'
import colors from '../../../constants/colors'
import DisplayImage from '../../components/displayImage'
import ProfessionalsScreen from '../../screens/professionalsScreen'





const BottomTabs = createBottomTabNavigator()


function BottomNavigation(){
    const [searchBarVisible, setSearchBarVisible] = useState(false)

    function changeVisible(searchBarVisible){
        useEffect(()=>{
            setSearchBarVisible(!searchBarVisible)
        })
    }

    function handleDrawerPress(navigation){
        navigation.openDrawer();
        
    }

    function handleSearchPress(navigation){
        navigation.navigate('Search')
    }
    
    return(
        <BottomTabs.Navigator 
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: colors.light.primary,
                tabBarInactiveTintColor: 'grey',
                tabBarShowLabel:  false,

            }}
            
            >
            <BottomTabs.Screen name='Home' 
                               component={HomeScreen}
                               options={({navigation })=>({
                                 headerTitle: ()=>{
                                   return   (<Text style={{fontSize: 20, fontWeight: 'bold'}}>
                                                             HomeNurse</Text>)
                                   
                                  },
                                headerRight: ()=>{
                                    return(<Pressable onPress={()=>{handleSearchPress(navigation)}}>
                                            <Ionicons name='search' size={25} color={colors.light.secondary} style={{marginRight: 10}}/>
                                        </Pressable>
                                        
                                    )
                                },

                                headerLeft: ({})=> {
                                    return <Pressable style={{marginLeft: 5}} onPress={()=>handleDrawerPress(navigation)}>
                                              <DisplayImage image='https://picsum.photos/id/237/200/105' size={40}/>
                                          </Pressable>
                                  },
                                tabBarIcon: ({focused, color})=>{
                                    return(
                                        focused ? <Feather name='home' size={30} color={color}/> 
                                                   :
                                                   <Feather name='home' size={30} color={color}/>
                                    )
                                },
                                headerStyle: {backgroundColor: colors.light.primary}
                               
                               })}/>
            <BottomTabs.Screen name='Diagnosis' 
                               component={DiagnosisScreen}
                               options={({ })=>({
                                
                                tabBarIcon: ({focused, color})=>{
                                    return(
                                        focused ? <Feather name='command' size={30} color={color}/> 
                                                   :
                                                   <Feather name='command' size={30} color={color}/>
                                    )
                                },
                                headerStyle: {backgroundColor: colors.light.primary}
                               })}/>

                            <BottomTabs.Screen name='Chat' 
                                component={ProfessionalsScreen}
                                options={({ })=>({
                                    
                                    tabBarIcon: ({focused, color})=>{
                                        return(
                                            focused ? <Feather name='message-circle' size={30} color={color}/> 
                                                       :
                                                       <Feather name='message-circle' size={30} color={color}/>
                                        )
                                    },
                                    headerStyle: {backgroundColor: colors.light.primary}
                                   })}
                                />

            <BottomTabs.Screen name='Map' 
                                component={MapScreen}
                                options={({ })=>({
                                    
                                    tabBarIcon: ({focused, color})=>{
                                        return(
                                            focused ? <Feather name='map-pin' size={30} color={color}/> 
                                                       :
                                                       <Feather name='map-pin' size={30} color={color}/>
                                        )
                                    },
                                    headerStyle: {backgroundColor: colors.light.primary}
                                   })}
                                />
            
        </BottomTabs.Navigator>
    )
}


export default BottomNavigation