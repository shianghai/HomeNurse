import {View, Text, Pressable, } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/homeScreen'
import DiagnosisScreen from '../../screens/diagnosisScreen'   
import MapScreen from '../../screens/mapScreen'
import { Ionicons, Feather } from '@expo/vector-icons'
import SearchBar from '../../components/searchBar'
import {useState, useEffect} from 'react';




const BottomTabs = createBottomTabNavigator()


function BottomNavigation(){
    const [searchBarVisible, setSearchBarVisible] = useState(false)

    function changeVisible(searchBarVisible){
        useEffect(()=>{
            setSearchBarVisible(!searchBarVisible)
        })
    }
    
    return(
        <BottomTabs.Navigator 
            initialRouteName='Home'
            >
            <BottomTabs.Screen name='Home' 
                               component={HomeScreen}
                               options={({ })=>({
                                headerTitle: ()=>{
                                  return   (<Text style={{fontSize: 20, fontWeight: 'bold'}}>
                                                            HomeNurse</Text>)
                                   
                                 },
                                headerRight: ()=>{
                                    return(<Pressable>
                                            <Ionicons name='search' size={32} color={'black'} style={{marginRight: 5}}/>
                                        </Pressable>
                                        
                                    )
                                },
                                tabBarIcon: ({focused})=>{
                                    return(
                                        focused ? <Feather name='home' size={25} /> 
                                                   :
                                                   <Feather name='home' size={25}/>
                                    )
                                }
                               })}/>
            <BottomTabs.Screen name='Diagnosis' 
                               component={DiagnosisScreen}
                               options={({ })=>({
                                
                                tabBarIcon: ({focused, color})=>{
                                    return(
                                        focused ? <Feather name='command' size={25} /> 
                                                   :
                                                   <Feather name='command' size={25}/>
                                    )
                                }
                               })}/>

            <BottomTabs.Screen name='Map' 
                                component={MapScreen}
                                options={({ })=>({
                                    
                                    tabBarIcon: ({focused})=>{
                                        return(
                                            focused ? <Feather name='map-pin' size={25} /> 
                                                       :
                                                       <Feather name='map-pin' size={25}/>
                                        )
                                    }
                                   })}
                                />
            
        </BottomTabs.Navigator>
    )
}


export default BottomNavigation