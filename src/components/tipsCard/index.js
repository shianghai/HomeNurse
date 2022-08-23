import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import {View, Text, ImageBackground} from 'react-native'
import Data from '../../../data'



function TipsCard({data}){

    //swipe only the first item in the stack
    
   

        return(
            <View style={{  borderWidth: 1, borderRadius: 6, height: "30%", width: "99%", flexDirection: 'row', }} key={data.id}>
                <ImageBackground source={data.imageUrl} resizeMode={'cover'} style={{width: "100%", height: "100%", opacity: 0.8}}>
                <View style={{marginBottom: "2%", justifyContent: 'flex-end', flex: 1}}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
                    {data.title}
                </Text>
                <Text style={{color: 'white', fontSize: 18, textDecorationLine: 'underline', fontWeight: 'bold'}}>
                    {data.body}
                </Text>
                

                </View>
                
                </ImageBackground>
            </View>
            
            
        )

       
    
    
}


export default TipsCard