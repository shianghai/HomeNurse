import { useEffect } from 'react'
import {View, Text, ScrollView, FlatList, Image, SafeAreaView, useWindowDimensions, ImageBackground} from 'react-native'



export default function NewsDigest({data}, ...props){
    useEffect(()=>{

    }, [data])
    const width = useWindowDimensions().width

    const itemSeparator = ()=>{
        return(
            <View style={{width: '2%'}}/>
        )
    }

     const renderItem = ({item})=>{
       
        return(
            <View style={[props.style, { flex: 1, borderRadius: 15, width: width-110, }, ]}>
                <ImageBackground source={{uri: item.urlToImage}} style={{height: "100%", width: "100%", borderRadius: 10}} resizeMode="cover" imageStyle={{borderRadius: 15, opacity: 0.8}}>
                    <Text style={{fontSize: 24, color: 'white', fontWeight: '600', lineHeight: 29, padding: 2, alignContent: "center", fontFamily: 'inter-bold'}}>{item.title}</Text>
                    <Text style={{fontSize: 20, color: 'white', fontWeight: '300', textDecorationLine: 'underline', fontFamily: 'inter-medium', lineHeight: 25}}>{item.description.substring(0, 150)}  . . .</Text>
                </ImageBackground>
                
               
            </View>
        )
     }
    return(
        
            <FlatList 
            horizontal
            legacyImplementation={true}
            data={data}
            renderItem={renderItem}
            keyExtractor={(data)=> {return Math.random() * 1000}}
            ItemSeparatorComponent={itemSeparator}
            style={{marginBottom: '2%', marginLeft: '0.3%'}}
            />
        
        

    )
}