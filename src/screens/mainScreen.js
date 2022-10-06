import {Ionicons, FontAwesome5, EvilIcons} from '@expo/vector-icons'
import {Text, View, SafeAreaView} from 'react-native'
import NewsDigest from '../components/newsDigest';

function MainScreen({navigation}, user){
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome5 name='user-circle' size={30} color={'#2F80ED'}/>
                    <View>
                        <Text>Hi {user.name}</Text>
                        <Text>How are you doing today?</Text>
                    </View>
                </View>
                <EvilIcons name='navicon' size={30} color={'#2F80ED'}/>  
            </View>

            <View style={{backgroundColor: "#3063C5", width: "25%", height: "20%", borderWidth: 0.5, borderRadius: 10, marginTop: "5%"}}>
                <Text>
                    Find Hospitals {'\n'}Near You
                </Text>
                <View>

                </View>
            </View>
            
            <View style={{flexDirection: 'row', marginTop: "5%"}}>
                <View style={{backgroundColor: "#7F5283", width: "25%", height: "20%", borderWidth: 0.5, borderRadius: 10, }}>
                    <View>

                    </View>
                    <Text>
                        Reach Out {"\n"}To Professionals
                    </Text>
                </View>
                <View style={{backgroundColor: "#7F5283", width: "25%", height: "20%", borderRadius: 10, borderRadius: 10}}>
                    <View>

                    </View>
                    <Text>
                        Medication {"\n"}Tracker
                    </Text>
                </View>
            </View>

            <View style={{flexDirection: "row", marginVertical: "5%"}}>
                <Text>News Digest</Text>
                <Text>View All</Text>
            </View>

            <NewsDigest imgUri={"https://picsum.photos/200/300"} data = {{title: 'dmfhddm', description: 'ifkeijv'}}/>

        </SafeAreaView>
    )
}


export default MainScreen;