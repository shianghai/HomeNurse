import { data } from '@tensorflow/tfjs'
import {View, Text, SafeAreaView, FlatList, TouchableOpacity} from 'react-native'
import TextButton from '../textButton'
import Fab from './fab'


export default function Tracker({navigation},{cabinet}){
    const handlePress = ()=>{
        navigation.navigate('AddMedTrackerScreen')
    }
    const renderItem = ({item})=>{
        return(
            <View>
                <Text style={{fontSize: 35}}>item.time</Text>
                <Text style={{fontSize: 10}}>item.name</Text>
            </View>
        )
    }

    const separator = ()=>{
        <View style={{backgroundColor: "grey", height: "0.5%"}}/>
    }


    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "#EFF0FB"}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <TextButton text={"back"} color={"#0A84FF"} />
                <TextButton text={"edit"} color={"#0A84FF"}/>
            </View>

            <FlatList 
                data={cabinet}
                renderItem={renderItem}
                keyExtractor={(data)=>{data.id}}
                ItemSeparatorComponent={separator}
                />
            
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{handlePress}}>
                <Fab/>
            </TouchableOpacity> 

        </SafeAreaView>
    )
}