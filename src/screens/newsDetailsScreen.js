import { useNavigation } from '@react-navigation/native';
import {SafeAreaView, Text, View, Button, Image, ScrollView, StatusBar} from 'react-native';
import colors from '../../constants/colors';
import fireStoreDb from '../firebase';
import {useState, useEffect} from 'react'
import DisplayImage from '../components/displayImage';


function NewsDetailsScreen({route, navigation}){
    
    function handleGoBack(){
        navigation.goBack()
    }

    
    const {title, author, content, publishedAt, url, urlToImage} = route.params;
    

    // useEffect(()=>{

    //     const getDb = async()=>{
    //         signInUserWithEmailAndPassword("enochdaywalker@gmail.com", "password123");
           
    //         const q = query(collection(fireStoreDb, "news"), where("title", "==", JSON.stringify(newstitle)));

    //         const querySnapshot = await getDocs(q);
    //         querySnapshot.forEach((doc) => {
    //           // doc.data() is never undefined for query doc snapshots
    //           console.log(doc.id, " => ", doc.data());
    //         });
    //         setData(querySnapshot);
            

    //     }
    //    getDb();
    // }, [])

    return(
        
            <SafeAreaView style={{flex: 1}}>
                
                <ScrollView contentContainerStyle={{alignContent: 'center', justifyContent: 'center', flexGrow: 1, alignItems: 'center', paddingHorizontal: '2%', marginBottom: '20%'}}   >
                        <View style={{width: "100%", height: "100%", }}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <DisplayImage image={"https://picsum.photos/id/237/200/105"} size={70}/>
                                <View style={{justifyContent: 'center'}}>
                                    <Text style={{ fontSize:20,  paddingBottom: "3%", fontFamily: 'montserrat-light', }}>{author}</Text>
                                    <Text style={{ fontSize:16,  marginVertical: '2%', fontFamily: 'montserrat-light', }}>{publishedAt}</Text>
                                    
                                </View>
                                
                            </View>
                           
                            
                            <Text style={{lineHeight: 24, fontSize: 28, fontFamily: 'montserrat-medium', marginTop: '5%', paddingVertical: "2%", alignSelf: 'center'}}>{title}</Text>
                            <Image source={{uri: urlToImage}} style={{width: "99%", height: "45%"}} resizeMode="cover"/>
                            <Text style={{lineHeight: 30, fontSize: 24,  marginTop: '4%', fontFamily: 'montserrat-light'}}>{content}</Text>                
                            <Text style={{ fontSize:20,  paddingBottom: "3%", fontFamily: 'montserrat-light', }}>{publishedAt}</Text>
                            
                    
                        </View>
                </ScrollView>
            </SafeAreaView>
            
            
        
        
        
    )
}

export default NewsDetailsScreen;