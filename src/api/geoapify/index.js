import { async } from "@firebase/util";

const reverse_GeoCode_BaseUrl = "https://api.geoapify.com/v1/geocode/reverse?";
const places_BaseUrl = "https://api.geoapify.com/v2/places?";

async function getPlaceId(latitude, longitude, apiKey){
        let place_ID = "";
       await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${5.6476976128884635}&lon=${-0.1884541613884717}&type=street&apiKey=${apiKey}`)
          .then(response => response.json())
          .then((result) => {
            console.log("result place_id: ", result.features[0].properties.place_id)
            if (result.features.length != null) {
              place_ID = result.features[0].properties.place_id;
            } else {
              console.log("No address found");
            }
          });
          console.log("place id:", place_ID);
          return place_ID;
}

async function getPlaces(place_id, category, apiKey){
    const places = [];
    await fetch(`https://api.geoapify.com/v2/places?categories=${category}&filter=place:${place_id}&limit=20&apiKey=${apiKey}`)
        .then(response => response.json())
        .then((result)=>{
          console.log("places result: ", result)
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
            }
        })
        return places;
}

export {getPlaces, getPlaceId};