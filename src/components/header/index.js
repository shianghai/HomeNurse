import {View, Text, } from 'react-native'

export default function Header(start, end){
    return(
        <View style={{
            flex: 1, height: "10%", 
            justifyContent: 'space-between',
            shadowColor: 'grey',
            shadowOffset: {width: -3, height: 4},
            shadowOpacity: 0.5,
            shadowRadius: 5,  
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: 'white',
            borderColor: 'grey',
            }}
            >

            {start}
            {end}
        </View>
    )
}