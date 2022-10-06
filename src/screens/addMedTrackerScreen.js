import {SafeAreaView, View, Text, TextInput} from 'react-native'
import Header from '../components/header'
import InputField from '../components/input'
import TextButton from '../components/textButton'
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';



export default function AddMedTrackerScreen(){
    const [selectedNumber, setSelectedNumber] = useState(3);

    function handleSelectedNumber(number){
        setSelectedNumber((prevState)=>{prevState + 1})
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "#F2F2F7"}}>
            <Header start={<TextButton text={"cancel"} color={"#0A84FF"}/>} end={<TextButton text={"save"} color={"#0A84FF"}/>}/>

        <View style={{justifyContent: "center", alignItems: "center"}}>
             <Text>Medicine Name</Text>
             <View style={{
                marginTop: "5%",
                width: "70%", 
                height: "6%",
                shadowOffset: {width: -3, height: 3},
                shadowOpacity: .5,
                shadowColor: "grey",
                backgroundColor: "#FFFFFF"
                
                }}>
                    <InputField />
             </View>

            <View style={{flexDirection: "row"}}>
                <Ionicons name='add' size={20} />
                <TextInput 
                    placeholder={selectedNumber} 
                    keyboardType={'numeric'}
                    onChangeText={number=>handleSelectedNumber(number)}
                    />
                
            </View>
             
        </View>
        </SafeAreaView>
    )
}