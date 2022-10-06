import {View, Text, ScrollView, FlatList, Image} from 'react-native'



export default function NewsDigest(imgUri, data){

     const renderItem = ({item})=>{
        return(
            <View style={{flexDirection: 'row', width: "25%", height: "20%"}}>
                <Image source={{uri: item.url}} style={{height: "100%", width: "40%"}} resizeMode="cover"/>
                <View style={{backgroundColor: ""}}>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                </View>
            </View>
        )
     }
    return(
        
        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={(data)=> {return Math.random() * 1000}}/>

    )
}