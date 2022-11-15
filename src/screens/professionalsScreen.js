import { SafeAreaView, View, Text, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import fireStoreDb, { firebaseApp } from "../firebase";
import {useState, useEffect, useLayoutEffect} from 'react'
import { collection, query, where, getDocs, } from "firebase/firestore";
import DisplayImage from "../components/displayImage";
import { signInUserWithEmailAndPassword } from "../firebase";
import colors from "../../constants/colors";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useSelector, useDispatch} from 'react-redux'
import { async } from "@firebase/util";



function ProfessionalsScreen({route, navigation}){
    const uid = useSelector(state => state.userObject.user.uid)
    const userType = useSelector(state =>{state.userType.userType})
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const [profChatsAvailable, setProChatsAvailable] = useState(false)
    const [userChatsAvailable, setUserChatsAvailable] = useState(false)
    const [profChats, setProfChats] = useState([])
    const [userChats, setUserChats] = useState([])

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


    const handleChoose = (name, avatar)=>{
       
        navigation.navigate('ChatScreen', {
            name: itemName,
            imgUrl: itemAvatar
        });
    }


    

    useEffect(async()=>{
    //check is user is a normal user or a professional and fetch data accordingly
       if(userType === "user"){
        const chatQuery = query(collection(fireStoreDb, "chats", `${uid}`))
        let userChatsArray
           await getDocs(chatQuery)
           .then((chatsQuerySnapshot)=>{
               if(chatsQuerySnapshot.empty){
                   //if no prof is currently chatting the normal user
                   setUserChatsAvailable(false)
                   
               }
               else{
                   //if the normal user has profs chatting him
                   chatsQuerySnapshot.forEach((doc)=>{
                       userChatsArray.push(doc.data)
                   })

                   setUserChats(profChatsArray)
                   setUserChatsAvailable(true)
               }
           })
        
       }
       else{
        //if person is a professional
        //get available chats and display them
           let profChatsArray
           const chatQuery = query(collection(fireStoreDb, "chats", `${uid}`))
           await getDocs(chatQuery)
           .then((chatsQuerySnapshot)=>{
               if(chatsQuerySnapshot.empty){
                   //if no one is currently chatting the prof
                   setProChatsAvailable(false)
                   
               }
               else{
                   //if the prof has people chatting him
                   chatsQuerySnapshot.forEach((doc)=>{
                       profChatsArray.push(doc.data)
                   })

                   setProfChats(profChatsArray)
                   setProChatsAvailable(true)
               }
           })
           }
    
    }, [uid])
    
    //TODO: create profile screen for user to use for chat picture. if user skips  creating a profile on the create profile screen, use a random image.
    const renderItem = ({item})=>{
        
        return(
            <TouchableOpacity onPress={()=>handleChoose(item.fullName, "https://picsum.photos/200/300")} style={{marginVertical: "3%"}} key={()=>{item.uid}}>
                <View style={{flexDirection: "row",}}>

                    <DisplayImage image={"https://picsum.photos/200/300"} size={60}/>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={{lineHeight: 20, fontSize: 20,   fontFamily: 'montserrat-light', marginLeft: "8%"}}>{item.fullName}</Text>
                    </View>
                    
                 </View>
            </TouchableOpacity>
        )  
}

    const chatsListRenderItem = ()=>{
        return(
            <TouchableOpacity onPress={()=>handleChatChoose(item.fullName, "https://picsum.photos/200/300")} style={{marginVertical: "3%"}} key={()=>{item.uid}}>
                <View style={{flexDirection: "row",}}>

                    <DisplayImage image={"https://picsum.photos/200/300"} size={60}/>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={{lineHeight: 20, fontSize: 20,   fontFamily: 'montserrat-light', marginLeft: "8%"}}>{item.fullName}</Text>
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
    else{
    if(userType === "user" && userChatsAvailable){
        return(
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, width: "100%", paddingHorizontal: "3%"}}>
                    <FlatList 
                        data= {userChats}
                        renderItem = {chatsListRenderItem}
                        keyExtractor={(item)=> {return item.key}}
                        ItemSeparatorComponent={itemSeparator}/>
            
                </View>
            </SafeAreaView>
        )
    }
    else if(userType === "user" && !userChatsAvailable){
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
    else if(userType === "professional" && profChatsAvailable){
        return(
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, width: "100%", paddingHorizontal: "3%"}}>
                    <FlatList 
                        data= {profChats}
                        renderItem = {chatsListRenderItem}
                        keyExtractor={(item)=> {return item.key}}
                        ItemSeparatorComponent={itemSeparator}/>
            
                </View>
            </SafeAreaView>
        )
    }
    else if(userType === "professional" && !profChatsAvailable){
        return(
            
                <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>
                        Messages from users will appear here
                    </Text>
                        
                </SafeAreaView>
            
        )
    }
}
}
export default ProfessionalsScreen