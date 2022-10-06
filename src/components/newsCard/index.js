import { useNavigation } from '@react-navigation/native';
import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity} from 'react-native'
import { useWindowDimensions } from 'react-native'
import ProfilePicture from '../displayImage';
import { getImageUrl } from '../../firebase';
import DisplayImage from '../displayImage';
import DateFormater from '../../../utils/dateFormater';
import { useState } from 'react';



export default function NewsCard({Data}){
    const navigation = useNavigation()
    const sHeight = useWindowDimensions().height
    const sWidth = useWindowDimensions().width

    console.log(Data);
    const [content, setContent]  = useState("")
    const [index, setIndex] = useState(0);

    function getIndex(title){
        Data.map((news, index)=>{
            if(news.title === title){
                setIndex(index);
                return index;
            }
        })
    }

    const getNewsContent = async({title})=>{
        try{
            
            const index = getIndex(title);
            const url = "https://homenurse-backend.herokuapp.com/news/" + index
            const content = await fetch(url)
                                  .then((response)=>{
                                    console.log(response.blob)
                                  })
                                  
            
            return content;
        }
        catch(error){
            console.log(error)
        }
    }

    function handlePress(title, author, content, publishedAt, url, urlToImage){

        
            const fullNews = getNewsContent({title});
            console.log(fullNews);
            navigation.navigate('NewsDetails', {
            title: title,
            author: author,
            content: content,
            publishedAt: publishedAt,
            url: url,
            urlToImage: urlToImage,
        })
    }
    const renderItem = ({item})=>{
       
       
        return(
            <TouchableOpacity onPress={()=>{handlePress(item.title, item.author, item.content, item.publishedAt, item.url, item.urlToImage)}}>
                <View style={{ backgroundColor: "white", flexDirection: 'row', marginVertical: "2%"}} key={()=>Math.random()*100}>
                   
                    
                   <View style={{marginLeft: "1%", flex: 1}}>
                       
                       <View style={{flexDirection: 'row', marginTop: '2%', marginLeft: '2%'}}>
                            <DisplayImage image={item.urlToImage} size={50}/>
                            <View style={{flexDirection: 'column', justifyContent: 'center',}}>
                                <Text style={{lineHeight: 20, fontSize: 20,   fontFamily: 'montserrat-light', }}>{item.author}</Text>
                                
                            </View>
                           
                            
                       </View>
                       
                       <Text style={{lineHeight: 24, fontSize: 24, padding: "3%", fontFamily: 'montserrat-medium'}}>{item.title}</Text>
                       <Text style={{lineHeight: 20, fontSize: 16,  padding: "3%", fontFamily: 'montserrat-light'}}>{item.description}</Text>
                       <Text style={{fontSize: 15, padding:"3%", fontFamily: 'lato-regular'}}>{item.publishedAtr}</Text>
                      
                   </View>
                </View>
            </TouchableOpacity>
            

            
        )
    }

    

    return(
        <View style={{ flex: 1, width: "100%"}}>
            <FlatList 
                data={Data}
                renderItem={renderItem}
                keyExtractor={(data)=>{()=>{Math.random()*100}}}
                contentContainerStyle={{flexGrow: 1}}
            />
        </View>
    )
}