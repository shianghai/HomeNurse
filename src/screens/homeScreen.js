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
    const [news, setNews] = useState();
    let [loading, setLoading] = useState(true);
    
    const url = 'https://newsapi.org/v2/everything?' +
          'q=Health&' +
          'from=2022-09-26&' +
          'sortBy=popularity&' +
          'apiKey=cc456e085bb84f19b96f15468198a07e';

    useEffect(()=>{
        const getDb = async()=>{
            signInUserWithEmailAndPassword("enochdaywalker@gmail.com", "password123");
            const newArr = [];
            const querySnapshot = await getDocs(collection(fireStoreDb, "news"));
            
            const req = new Request(url);
            fetch(req)
            .then(response => response.json().
                then((data) => {
                    const newsData = data['articles']
                    setNews(newsData);
                    console.log("final data: " + JSON.stringify(data['articles'][0].source))
                }))
                
           
            querySnapshot.forEach((doc) => {
                newArr.push(doc.data())
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
            });
            setNewsData(newArr);
            setTimeout(()=>{
                setLoading(!loading)
            }, 1000)
            
        }
        getDb();

       const getNews = async()=>{

        
       }
       getNews();

       
    }, [])

    
    if(loading) {
        return <ActivityIndicator animating={loading} style={{flex: 1, justifyContent: 'center'}} size="large" color={colors.light.secondary}/>
    }

    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', }} >
            
                <NewsCard Data = {news} />
           
           
        </SafeAreaView>
    )
}



export default HomeScreen