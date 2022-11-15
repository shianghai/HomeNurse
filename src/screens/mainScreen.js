import {Ionicons, FontAwesome5, EvilIcons, Entypo} from '@expo/vector-icons'
import {
    Text, 
    View, 
    SafeAreaView, 
    Image, 
    ScrollView, 
    useWindowDimensions, 
    TouchableOpacity, 
    ActivityIndicator
}from 'react-native'
import NewsDigest from '../components/newsDigest';
import Header from '../components/header';
import TextButton from '../components/textButton';
import { onAuthStateChanged, getAuth, } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { firebaseApp }  from '../firebase';
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import fireStoreDb from '../firebase';
import MedTrackerDisplay from '../components/medTrackerDisplay';


const url = 'https://newsapi.org/v2/everything?' +
          'q=Health&' +
          'from=2022-09-26&' +
          'sortBy=popularity&' + 
          'pageSize=20&'+
          'apiKey=cc456e085bb84f19b96f15468198a07e';

//TODO: fetch news data and display in news digest
//TODO: get user name and avatar of the signed in user
//TODO: load images before render
//TODO: change chat icon
//TODO: calculate and set NewsDigest card layout properly
//TODO: display loading action on splash screen and link it to main screen using redux
//TODO: verify user with email to check if user is corectly signed in

const udata = [{title: 'sjshfhfkf', description: 'dkfjdkfjdf dkfjdkfjdf dkfjdfjdnfgro dfkibiribnvjnobr rfvkeiivberiuvo kvievbjernviervnv wmvbiebvijnervbivbvbiv', url: 'https://picsum.photos/200/300'},
                {title: 'sjshfhfkf', description: 'dkfjdkfjdf dkfjdkfjdf dkfjdfjdnfgro dfkibiribnvjnobr rfvkeiivberiuvo kvievbjernviervnv wmvbiebvijnervbivbvbiv', url: 'https://picsum.photos/200/300'},
                {title: 'sjshfhfkf', description: 'dkfjdkfjdf dkfjdfjdnfgro dfkibiribnvjnobr rfvkeiivberiuvo kvievbjernviervnv wmvbiebvijnervbivbvbiv', url: 'https://picsum.photos/200/300'},
                {title: 'sjshfhfkf', description: 'dkfjdkfjdf dkfjdkfjdf dkfjdfjdnfgro dfkibiribnvjnobr rfvkeiivberiuvo kvievbjernviervnv wmvbiebvijnervbivbvbiv', url: 'https://picsum.photos/200/300'},
                {title: 'sjshfhfkf', description: 'dkfjdkfjdf dkfjdkfjdf dkfjdfjdnfgro dfkibiribnvjnobr rfvkeiivberiuvo kvievbjernviervnv wmvbiebvijnervbivbvbiv', url: 'https://picsum.photos/200/300'}]

function MainScreen({navigation}){
    const [loading, setLoading] = useState(true)
    const [userName, setUserName] = useState('')
    const [profilePicUrl, setProfilePicUrl] = useState('')
    const [news, setNews] = useState('')
    const [medData, setMedData] = useState([])
    const [userUid, setUserUid] = useState("")

    function handleAllNewsNav(){
        navigation.navigate('Home', {
            name: userName,
            picUrl: profilePicUrl,
        })
    }

    function handleMapNav(){
        navigation.navigate('Map', {
            name: userName,
            picUrl: profilePicUrl,
        })
    }

    function handleTrackerNav(){
        navigation.navigate('AddMed')
    }
    function handleProfNav(){
        navigation.navigate('Professionals')
    }

    const getNews  = async()=>{
        return new Promise(async(resolve, reject)=>{
        const req = new Request(url);
        await fetch(req)
        .then(response => response.json().
            then((data) => {
                if(data['articles'] != null){
                    const newsData = data['articles']
                    console.log("newsData: ", newsData)
                    resolve(newsData)
                }else{
                    reject("coudnt fetch data")
                }
            }))
    })}

    const getUserInfo = async()=> {
        return new Promise(async(resolve, reject)=>{
        const auth = getAuth(firebaseApp);
        onAuthStateChanged(auth, async(user)=>{
            if(user.email != null){
                console.log("user id: ", user.uid)
                const uid = user.uid
                setUserUid(uid);
                const userQuery = query(collection(fireStoreDb, "users"), where("uid", "==", uid));
                const profQuery = query(collection(fireStoreDb, "professionals"), where("uid", "==", uid));

                const userQuerySnapShot = await getDocs(userQuery)
                const profQuerySnapShot = await getDocs(profQuery)
               

                //check if the  authenticated person is a regualar user or a professional
                if(userQuerySnapShot.empty){
                    console.log("not a user")
                    if(profQuerySnapShot.empty){
                        console.log("not a prof")
                    }else{
                        // if professional
                        profQuerySnapShot.forEach(async(obj)=>{
                            
                            const profObj = {
                                name: obj.data().fullName,
                                picUrl: obj.data().imgUrl
                            }
                            
                            resolve(profObj)
                        })
                        
                        
                    }
                }else{
                    //if regular user
                    userQuerySnapShot.forEach((obj)=>{
                        const userObj = {
                            name: obj.data().fullName,
                            picUrl: obj.data().imgUrl,
                        }
                        
                        resolve(userObj)
                    })
                    
                    
                
            }
        }
        else{
            reject("user not signed in")
        }
    })        
    })}

    

    


    useEffect(()=>{
        async function prepare(){
            
                getUserInfo()
                    .then((userObject)=>{
                        setUserName(userObject.name)
                        setProfilePicUrl(userObject.picUrl)
                        console.log("username: ", userObject.name)

                        //fetch news data
                        getNews()
                            .then(async(news)=>{
                            setNews(news)
                            console.log("news", news)
                            setLoading(false)

                            //get meds data
                                 const medsArray = []
                                    await getDocs(collection(fireStoreDb, "users",  `/${userUid}/medications` ))
                                    .then(async(snapShot)=>{
                                        snapShot.forEach((med)=>{
                                            medsArray.push(med.data())
                                            console.log("medArray", med.data())
                                        })
                                        
                                        setMedData(await GetMedicationForToday(medsArray))
                                    })
                            }, 
                            ()=>{
                                //when the news fetching is rejected
                                console.log('news fetch rejected')
                                setLoading(false)
                            })
                            
                    })        
 } 
 prepare()
}, [])

    if(loading) return <ActivityIndicator  animating={loading} style={{flex: 1}}/>
    return(
        <SafeAreaView style={{flex: 1,  }}>
            <Header userName={userName} profilePic={profilePicUrl}/>
            <ScrollView style={{ flex: 1}} contentContainerStyle={{flex: 1}} >
                <View style={{flex: 1, marginHorizontal: '2%',}}>
                    <View>
                        <View style={{
                            marginTop: '3%',
                            backgroundColor: "#3063C5", 
                            width: "100%",
                            height: "60%", 
                            borderWidth: 0.5, 
                            borderRadius: 10, 
                            marginTop: "2%", 
                            shadowColor: 'grey',
                            shadowOffset: {width: 2, height:4},
                            shadowOpacity: 1,
                            shadowRadius: 10, 
                            padding: "2%"
                            
                            
                            
                            }}>
                        
                                <Text style={{fontSize: 26, fontWeight: '700', lineHeight: 24, color: 'lightgrey', fontFamily: "lobsterTwo-regular"}}>
                                                Medication Tracker
                                </Text>
                                <MedTrackerDisplay data = {medData}/>
                            
                    
                        </View>
                        </View>
                    
            
                    <View style={{flexDirection: 'row', marginTop: "\-20%", width: '100%', height: '50%', justifyContent: 'space-between', }}>
                        <TouchableOpacity onPress={()=>(handleProfNav())}>
                            <View style={{
                                backgroundColor: "#7F5283", 
                                width: "100%", 
                                height: "100%", 
                                borderWidth: 0.5, 
                                borderRadius: 10, 
                                shadowColor: 'grey',
                                shadowOffset: {width: -1, height:1},
                                shadowColor: 'grey',
                                shadowOffset: {width: 2, height:4},
                                shadowOpacity: 1, 
                                shadowRadius: 10,
                                padding: '3%',
                                
                                }}>
                                    <Text style={{fontSize: 26, fontWeight: '700', lineHeight: 26, color: 'lightgrey', fontFamily: "lobsterTwo-regular"}}>
                                            Chat
                                        </Text>
                                    <Ionicons name='chatbox' size={100} color={"white"}/>
                                    <Text style={{fontSize: 15, fontWeight: '700', lineHeight: 26, color: 'lightgrey',}}> 0 new messages</Text>
                                
                                    
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{handleTrackerNav()}}>
                                <View style={{
                                    
                                    backgroundColor: "#3B9AE1", 
                                    width: "100%", 
                                    height: "100%", 
                                    borderRadius: 10,
                                    shadowColor: 'grey',
                                    shadowOffset: {width: 2, height:4},
                                    shadowOpacity: 1,
                                    shadowRadius: 10,
                                    padding: '3%'
                                    }}>
                                        
                                        <Text style={{fontSize: 26, fontWeight: '700', lineHeight: 26, color: 'lightgrey', fontFamily: "lobsterTwo-regular"}}>
                                            Find Hospitals {'\n'}Near You
                                        </Text>
                                        <Entypo name='map' size={95} color={"white"} style={{alignSelf: "center"}}/>
                                    
                                        
                                </View>
                            </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: "row", marginTop: "5%", justifyContent: 'space-between', }}>
                        <Text style={{fontSize: 26, fontWeight: '700', lineHeight: 26, fontFamily: "lobsterTwo-regular", color: "grey"}}>News Digest</Text>
                        <TextButton text={'View All'} color={'#2F80ED'} onPress={()=>(handleAllNewsNav())} style={{fontSize: 17}}/>
                    </View>
                
                </View>
                <View style={{height: "27%", marginTop: "7%"}}>
                    {/* <NewsDigest data = {news} style={{width: '99%', marginTop: '\-10%'}}/>  */}
                </View>
                
                
            </ScrollView>

        </SafeAreaView>
    )
}


export default MainScreen;