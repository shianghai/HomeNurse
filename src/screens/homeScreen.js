import {View, SafeAreaView} from 'react-native'
import Data from '../../data'
import { useEffect, useState } from 'react'
import NewsCard from '../components/newsCard'
import SWIPER from '../components/swiper'
import TipsCard from '../components/tipsCard'
import fireStoreDb, { signInUserWithEmailAndPassword } from '../firebase';
import { collection, getDocs, getFirestore } from "firebase/firestore";


function HomeScreen(){
    const [newsData, setNewsData] = useState();
    

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
            
        }
       getDb();
    }, [])
    
    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            
            <NewsCard Data = {newsData}/>
        </SafeAreaView>
    )
}



export default HomeScreen