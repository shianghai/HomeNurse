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

    const [data, setData] = useState();
    const {title, writer, fullText, date} = route.params;
    

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
                                <DisplayImage image={"https://picsum.photos/200/300"} size={70}/>
                                <View>
                                    <Text style={{ fontSize:20,  paddingBottom: "3%", fontFamily: 'montserrat-light', }}>{writer}</Text>
                                    <Text style={{ fontSize:16,  paddingBottom: "3%", fontFamily: 'montserrat-light', }}> University of Ghana</Text>
                                    
                                </View>
                                
                            </View>
                            <Text style={{ fontSize:20,  marginVertical: '2%', fontFamily: 'montserrat-light', }}>{date}</Text>
                            
                            <Text style={{lineHeight: 24, fontSize: 28, fontFamily: 'montserrat-medium', marginTop: '5%', paddingVertical: "2%", alignSelf: 'center'}}>{title}</Text>
                            <Image source={require('../../assets/2.jpg')} style={{width: "99%", height: "10%"}} resizeMode="cover"/>
                            <Text style={{lineHeight: 30, fontSize: 24,  marginTop: '4%', fontFamily: 'montserrat-light'}}>{fullText}</Text>                
                            <Text style={{ fontSize:20,  paddingBottom: "3%", fontFamily: 'montserrat-light', }}>{date}</Text>
                            
                    
                        </View>
                </ScrollView>
            </SafeAreaView>
            
            
        
        
        
    )
}

export default NewsDetailsScreen;