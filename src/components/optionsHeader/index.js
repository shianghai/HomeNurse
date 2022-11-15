import { View, Text, Image } from 'react-native'
import React from 'react'
import TextButton from '../textButton'
import colors from '../../../constants/colors'

export default function OptionsHeader({option1, option2, hasLogo}) {
  return (
    <View style={{
        height: "8%", 
            justifyContent: 'space-between',
            shadowColor: 'grey',
            shadowOffset: {width: -1, height:1 },
            shadowOpacity: 0.5,
            shadowRadius: 5,  
            borderWidth: 1,
            backgroundColor: 'white',
            borderColor: 'white',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
           
            
    }}>
      <TextButton text={option1}  color={colors.light.textButton} style={{marginLeft: '3%', fontSize: 23}}/>
      {hasLogo &&  
        <Image source={require('../../../assets/cardiogram.png')} resizeMethod={"scale"} resizeMode={"cover"} style={{width: '11%', height: '80%', margin: '2%'}}/>
      }
      <TextButton text={option2}  color={colors.light.textButton} style={{marginLeft: '3%', fontSize: 23}}/>
    </View>
  )
}