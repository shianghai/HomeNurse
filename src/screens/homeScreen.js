import {View, SafeAreaView, ActivityIndicator} from 'react-native'
import Data from '../../data'
import { useCallback, useEffect, useState } from 'react'
import NewsCard from '../components/newsCard'
import SWIPER from '../components/swiper'
import TipsCard from '../components/tipsCard'
import fireStoreDb, { signInUserWithEmailAndPassword } from '../firebase';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import colors from '../../constants/colors'


function HomeScreen(){
    const [newsData, setNewsData] = useState();
    let [loading, setLoading] = useState(true);
    

    useEffect(()=>{
        const getDb = async()=>{
            signInUserWithEmailAndPassword("enochdaywalker@gmail.com", "password123");
            const newArr = [];
            const querySnapshot = await getDocs(collection(fireStoreDb, "news"));
            
            querySnapshot.forEach((doc) => {
                newArr.push(doc.data())
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
            });
            setNewsData(newArr);
            setTimeout(()=>{
                setLoading(!loading)
            }, 3000)
            
        }
       getDb();
       
    }, [])

    
    if(loading) {
        return <ActivityIndicator animating={loading} style={{flex: 1, justifyContent: 'center'}} size="large" color={colors.light.secondary}/>
    }

    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', }} >
            
                <NewsCard Data = {newsData} />
           
           
        </SafeAreaView>
    )
}



export default HomeScreen