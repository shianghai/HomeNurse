import { useNavigation } from '@react-navigation/native';
import {SafeAreaView, Text, View, Button} from 'react-native';

function NewsDetailsScreen(){
    const navigation = useNavigation()
    function handleGoBack(){
        navigation.goBack()
    }
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text>news details</Text>
                <Button title='go back' onPress={()=>{handleGoBack()}}/>
            </View>
        </SafeAreaView>
        
    )
}

export default NewsDetailsScreen;