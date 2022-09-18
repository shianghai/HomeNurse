import { useNavigation } from '@react-navigation/native';
import {View, Text, FlatList, Image, SafeAreaView, TouchableOpacity} from 'react-native'
import { useWindowDimensions } from 'react-native'
import ProfilePicture from '../displayImage';
import { getImageUrl } from '../../firebase';
import DisplayImage from '../displayImage';



export default function NewsCard({Data}){
    const navigation = useNavigation()
    const sHeight = useWindowDimensions().height
    const sWidth = useWindowDimensions().width
    const imageWidth  = sWidth / 50 * 20
    const imageHeigtht = sHeight/ 50 * 10


    function handlePress(title){
        console.log(title)
        navigation.navigate('NewsDetails', {newstitle: JSON.stringify(title)})
    }
    const renderItem = ({item})=>{
       
       
        return(
            <TouchableOpacity onPress={()=>{handlePress(item.title)}}>
                <View style={{ backgroundColor: "white", flexDirection: 'row', marginVertical: "2%"}} key={item.id}>
                   
                    
                   <View style={{marginLeft: "1%", flex: 1}}>
                       
                       <View style={{flexDirection: 'row', marginTop: '2%', marginLeft: '2%'}}>
                            <DisplayImage image='https://picsum.photos/id/234/200/106' size={50}/>
                            <View style={{flexDirection: 'column', justifyContent: 'center',}}>
                                <Text style={{lineHeight: 20, fontSize: 20,   fontFamily: 'montserrat-light', }}>{item.writer}</Text>
                                <Text style={{lineHeight: 20, fontSize: 12,   fontFamily: 'montserrat-light', marginLeft: '5%'}}>University of Ghana</Text>
                            </View>
                           
                            
                       </View>
                       
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