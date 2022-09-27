import {View, SafeAreaView} from 'react-native'
import MapView from 'react-native-maps'
import 


function MapScreen(){
    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
            <MapView style={{width: "100%", height: "100%"}}/>
        </SafeAreaView>
    )
}



export default MapScreen