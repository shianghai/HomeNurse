import {View, SafeAreaView, Alert, ActivityIndicator, Image} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import * as Location from 'expo-location'
import {useState, useLayoutEffect, useCallback, useEffect} from 'react'
import { getPlaceId, getPlaces } from '../api/geoapify'
import { async } from '@firebase/util'






const apiKey = "e7f77d2ae02a4947a2e0c29ea3b3e656";
const categories = "healthcare.hospital"


function MapScreen(){
    const [deviceLocation, setDeviceLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [placesMarkers, setPlacesMarkers] = useState([]);
    const [placeID, setPlaceID] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    async function getPlaceId(latitude, longitude, apiKey){
      return new Promise(async(resolve, reject)=>{
        let place_ID = "";
        await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&type=street&apiKey=${apiKey}`)
          .then(response => response.json())
          .then((result) => {
            console.log("result place_id: ", result.features[0].properties.place_id)
            if (result.features.length != null) {
              resolve(result.features[0].properties.place_id);
            } else {
              reject("No address found");
            }
          });
      })
    }

async function getPlaces(categories, place_id, apiKey){
  return new Promise(async(resolve, reject)=>{
    const places = [];
    await fetch(`https://api.geoapify.com/v2/places?categories=${categories}&filter=place:${place_id}&limit=20&apiKey=${apiKey}`)
        .then(response => response.json())
        .then((result)=>{
          console.log("result object: ", result)
            if(result != null){
                result.features.map((place, index)=>{
                    const placeObj = {
                        key: index,
                        name: place.properties.name,
                        longitude: place.properties.lon,
                        latitude: place.properties.lat,
                        description: place.properties.formatted,
                    };
                    places.push(placeObj);
                    
                })
                resolve(places)
            }else{
              reject("not able able to get hospitals for this place")
            }
        })
  })
  }

  const getLocation = async()=>{
    return new  Promise(async(resolve, reject)=>{
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        
        let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.BestForNavigation});
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421, 
  
        })
        resolve(location)
      }else{
        setErrorMsg('Permission to access location was denied');
        Alert.alert(errorMsg);
        reject(errorMsg);
      }
    })
  }


const [region, setRegion] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    

 useEffect(() => {
    (async () => {

      
          
        
      getLocation()
      .then((location)=>{
          getPlaceId(location.coords.latitude, location.coords.longitude, apiKey)
          .then((placeId)=>{
              getPlaces(categories, placeId, apiKey)
              .then((places)=>{
                setPlacesMarkers(places);
                setIsLoading(false)
              })
          })
      })
      
      
      
    })();
    
  }, []);
    
  

  const onRegionChange = useCallback((region)=>{
    setRegion(region);
  })


      
    if(isLoading) return <ActivityIndicator animating={isLoading} style={{flex: 1}} />
    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
            <MapView 
              style={{width: "100%", height: "100%"}}
              mapType={"hybrid"}
              showsUserLocation={true}
              followUserLocation={true}
              zoomEnabled={true}
              region={region}
              onRegionChange={()=>{onRegionChange(region)}}
              showsIndoors={true}
              showsIndoorLevelPicker={false}
              showsTraffic={true}
              toolbarEnabled={true}
              loadingEnabled={true}
              showsMyLocationButton={true}
              showsPointsOfInterest={true}>

                 {
                  <Marker 
                    key={23}
                    title={"My location"}
                    coordinate={{latitude: region.latitude, longitude: region.longitude, latitudeDelta: region.latitudeDelta, longitudeDelta: region.latitudeDelta}}
                   
                    
                    >
                      <View style={{backgroundColor: 'red' , width: '50%', height: '50%'}}>
                        <Image source={require('../../assets/location.png')} style={{width: '2%', height: '2%'}} resizeMode='contain'/>
                      </View>
                    </Marker>
                 }
                 
                {
                  placesMarkers.map((place)=>{
                    return (
                    <Marker 
                      key={place.key}
                      title={place.name}
                      coordinate={{latitude: place.latitude, longitude: place.longitude}}
                      description={place.description}
                      />)
                  })
                }
                
                  
                
              </MapView>
        </SafeAreaView>
    )
}



export default MapScreen