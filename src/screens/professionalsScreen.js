import { SafeAreaView, View, Text, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import fireStoreDb from "../firebase";
import {useState, useEffect, useLayoutEffect} from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import DisplayImage from "../components/displayImage";
import { signInUserWithEmailAndPassword } from "../firebase";
import colors from "../../constants/colors";



function ProfessionalsScreen({route, navigation}){
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true)

    useLayoutEffect(()=>{
        navigation.setOptions({
           headerStyle: {backgroundColor: colors.light.primary},
           headerLeft: ()=>{
            return (
                    <DisplayImage image={"https://picsum.photos/200/300"} size={30}/>
                )
           }
        })
      }, [navigation])


    const handleChoose = (itemName, itemAvatar)=>{
       
        navigation.navigate('ChatScreen', {
            name: itemName,
            imgUrl: itemAvatar
        });
    }


    

    useEffect(()=>{
        const getDb = async()=>{
            

            signInUserWithEmailAndPassword("enochdaywalker@gmail.com", "password123");
            const newArr = [];
            const querySnapshot = await getDocs(collection(fireStoreDb, "professionals"));
            
            querySnapshot.forEach((doc) => {
                newArr.push(doc.data())
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
            });
            setData(newArr);
           setTimeout(()=>{
            setIsLoading(false);

           }, 3000)
        }
       getDb();
    }, [])

    const renderItem = ({item})=>{
        
       
        return(
            <TouchableOpacity onPress={()=>handleChoose(item.name, item.avatar)} style={{marginVertical: "3%"}} key={()=>{Math.random()}}>
                <View style={{flexDirection: "row",}}>

                    <DisplayImage image={item.avatar} size={60}/>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={{lineHeight: 20, fontSize: 20,   fontFamily: 'montserrat-light', marginLeft: "8%"}}>{item.name}</Text>
                    </View>
                    
                 </View>
            </TouchableOpacity>
            
        )
    }

    const itemSeparator = ()=>{
        return(
            <View style={{backgroundColor: 'grey', height: "0.8%"}}/>

        
        )
    }
    if(isLoading) {
        return <ActivityIndicator animating={isLoading} style={{flex: 1, justifyContent: 'center'}} size="large" color={colors.light.secondary}/>
    }
    return(
        <View style={{flex: 1, width: "100%", paddingHorizontal: "3%"}}>
            <FlatList 
                data= {data}
                renderItem = {renderItem}
                keyExtractor={(item)=> {return item.key}}
                ItemSeparatorComponent={itemSeparator}/>
            
        </View>
    )

}

export default ProfessionalsScreen;