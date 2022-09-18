import { useNavigation } from '@react-navigation/native';
import {SafeAreaView, Text, View, Button, Image, ScrollView, StatusBar} from 'react-native';
import colors from '../../constants/colors';
import fireStoreDb from '../firebase';
import {useState, useEffect} from 'react'


function NewsDetailsScreen({route, navigation}){
    
    function handleGoBack(){
        navigation.goBack()
    }

    const [data, setData] = useState();
    const {newstitle} = route.params;
    console.log(newstitle)

    useEffect(()=>{

        const getDb = async()=>{
            signInUserWithEmailAndPassword("enochdaywalker@gmail.com", "password123");
           
            const q = query(collection(fireStoreDb, "news"), where("title", "==", JSON.stringify(newstitle)));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
            });
            setData(querySnapshot);
            

        }
       getDb();
    }, [])

    return(
        
            <SafeAreaView style={{flex: 1}}>
                
                <ScrollView contentContainerStyle={{alignContent: 'center', justifyContent: 'center', flexGrow: 1, alignItems: 'center', paddingHorizontal: '3%', }}   >
                        <View style={{width: "100%", height: "100%", }}>
                        <Text style={{lineHeight: 24, fontSize: 28, fontFamily: 'montserrat-medium', marginTop: '5%', paddingVertical: "2%"}}>{data.title}</Text>
                        <Image source={require('../../assets/2.jpg')} style={{width: "99%", height: "20%"}} resizeMode="cover"/>
                        <Text style={{lineHeight: 20, fontSize: 16,  padding: "1%", fontFamily: 'montserrat-light'}}>{data.fullText}</Text>                
                        <Text style={{lineHeight: 24, fontSize:20,  paddingBottom: "3%", fontFamily: 'montserrat-light', }}>{data.date}</Text>
                        <Text style={{lineHeight: 24, fontSize:20,  paddingBottom: "3%", fontFamily: 'montserrat-light', }}>{data.writer}</Text>
                    
                        </View>
                </ScrollView>
            </SafeAreaView>
            
            
        
        
        
    )
}

export default NewsDetailsScreen;