import { SafeAreaView, View, Text, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import fireStoreDb, { firebaseApp } from "../firebase";
import {useState, useEffect, useLayoutEffect} from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import DisplayImage from "../components/displayImage";
import { signInUserWithEmailAndPassword } from "../firebase";
import colors from "../../constants/colors";
import { getAuth, onAuthStateChanged } from "firebase/auth";



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
            

            const auth = getAuth(firebaseApp);
            onAuthStateChanged(auth, async(user)=>{
                if(user){
                    const uid = user.uid
                    const userQuery = query(collection(fireStoreDb, "users"), where("uid", "==", uid));
                    const profQuery = query(collection(fireStoreDb, "professionals"), where("uid", "==", uid));

                    const userQuerySnapShot = await getDocs(userQuery)
                    const profQuerySnapShot = await getDocs(profQuery)


                    //check if the  authenticated person is a regualar user or a professional
                    if(userQuerySnapShot.empty){
                        if(profQuerySnapShot.empty){
                            
                        }else{
                            // if professional
                            console.log("person is a professional")
                            profQuerySnapShot.forEach((doc)=>{
                                console.log("profQuerySnapShot", doc.data())
                            })
                            const querySnapshot = await getDocs(collection(fireStoreDb, "users"));
                            const newArr = [];
                            querySnapshot.forEach((doc) => {
                                newArr.push(doc.data())
                                // doc.data() is never undefined for query doc snapshots
                                console.log(doc.id, " => ", doc.data());
                                
                            });
                            setData(newArr);
                            setTimeout(()=>{
                                setIsLoading(false);

                                }, 3000)
                            }
                    }else{
                        //if regular user
                        console.log("person is a user")
                        userQuerySnapShot.forEach((doc)=>{
                            console.log("userQuerySnapShot", doc.data())
                        })
                        
                        const querySnapshot = await getDocs(collection(fireStoreDb, "professionals"));
                        const newArr = [];
                        querySnapshot.forEach((doc) => {
                            newArr.push(doc.data())
                            
                            console.log(doc.id, " => ", doc.data());
                        });
                        setData(newArr);
                        setTimeout(()=>{
                        setIsLoading(false);

                        }, 3000)
                    
                        
                    

                
                }
            }})
        }
        
    
       
          getDb();  
        
       
    }, [])
    
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
export default ProfessionalsScreen