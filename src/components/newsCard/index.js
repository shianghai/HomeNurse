import { useNavigation } from '@react-navigation/native';
import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity} from 'react-native'
import { useWindowDimensions } from 'react-native'
import { getImageUrl } from '../../firebase';
import ImageDownloader from '../imageDownloader';


export default function NewsCard({Data}){
    const navigation = useNavigation()
    const sHeight = useWindowDimensions().height
    const sWidth = useWindowDimensions().width
    const imageWidth  = sWidth / 50 * 20
    const imageHeigtht = sHeight/ 50 * 10


    function handlePress(){
        navigation.navigate('NewsDetails')
    }
    const renderItem = ({item})=>{
       
       
        return(
            <TouchableOpacity onPress={()=>{handlePress()}}>
                <View style={{ backgroundColor: "white", flexDirection: 'row', marginBottom: "4%"}} key={item.id}>
                   
                    
                   <View style={{marginLeft: "2%", flex: 1}}>
                       <Text style={{lineHeight: 20, fontSize: 16,  padding: "3%", fontFamily: 'montserrat-light', }}>{item.writer}</Text>
                       <Text style={{lineHeight: 24, fontSize: 24, padding: "3%", fontFamily: 'montserrat-medium'}}>{item.title}</Text>
                       <Text style={{lineHeight: 20, fontSize: 16,  padding: "3%", fontFamily: 'montserrat-light'}}>{item.preText}</Text>
                       <Text style={{fontSize: 15, padding:"3%", fontFamily: 'lato-regular'}}>{item.date}</Text>
                      
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
                keyExtractor={(data)=>{return data.id}}
                contentContainerStyle={{flexGrow: 1}}
            />
        </View>
    )
}