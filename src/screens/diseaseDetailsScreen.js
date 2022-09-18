import { useNavigation } from '@react-navigation/native';
import {SafeAreaView, Text, View, Button, Image, ScrollView, StatusBar} from 'react-native';
import colors from '../../constants/colors';
import Data from '../../data';
import fireStoreDb, { signInUserWithEmailAndPassword } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";


function DiseaseDetailsScreen({diseaseName}){
    const [data, setData] = useState();
    

    useEffect(()=>{
        const getDb = async()=>{
            signInUserWithEmailAndPassword("enochdaywalker@gmail.com", "password123");
           
            const q = query(collection(fireStoreDb, "cities"), where("NAME", "==", diseaseName));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
            });
            setData(querySnapshot);

        }
       getDb();
    }, [])

    const navigation = useNavigation()
    function handleGoBack(){
        navigation.goBack()
    }
    return(
        
            <SafeAreaView style={{flex: 1}}>
                
                <ScrollView contentContainerStyle={{alignContent: 'center', justifyContent: 'center', flexGrow: 1, alignItems: 'center', paddingHorizontal: '3%', }}   >
                        <View style={{width: "100%", height: "100%", }}>
                        <Text style={{lineHeight: 24, fontSize: 28, fontFamily: 'montserrat-medium', marginTop: '5%', paddingVertical: "2%"}}>{data.NAME}</Text>
                        
                        <Text style={{lineHeight: 20, fontSize: 16,  padding: "1%", fontFamily: 'montserrat-light'}}>{data.DEFINITION}</Text>                
                        <Text style={{lineHeight: 24, fontSize:20,  paddingBottom: "3%", fontFamily: 'montserrat-light', }}>data.CAUSES</Text>
                        
                        <Text style={{lineHeight: 24, fontSize:20,  paddingBottom: "3%", fontFamily: 'montserrat-light', }}>data.SYPMTOMS</Text>

                        <Text style={{lineHeight: 24, fontSize:20,  paddingBottom: "3%", fontFamily: 'montserrat-light', }}>data.TREATMENT</Text>
                        <Text style={{lineHeight: 24, fontSize:20,  paddingBottom: "3%", fontFamily: 'montserrat-light', }}>data.SITE</Text>
                        </View>
                </ScrollView>
            </SafeAreaView>
            
            
        
        
        
    )
}

export default DiseaseDetailsScreen;