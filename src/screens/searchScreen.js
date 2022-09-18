import { getDefaultHeaderHeight, useHeaderHeight } from '@react-navigation/elements';
import { useState, useEffect, }  from 'react';
import { FlatList, StyleSheet, View, Text, } from 'react-native';
import { SafeAreaView, useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchBarr from '../components/searchBarr';
import SearchLsitDisplay from '../components/searchListDisplay';
import {Ionicons} from '@expo/vector-icons';








export default function SearchScreen({navigation}) {
  const [clicked, setClicked] = useState(false)
  const [searchPhrase, setSearchPhrase] = useState("")
  const [data, setData] = useState([])


  useEffect(()=>{
    const getData = async()=>{
      const apiResponse = await fetch("https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages")
      const fakedata = await apiResponse.json()
      console.log(fakedata)
      setData(fakedata)
    }
    getData()
  }, [searchPhrase])

  return (
      <SafeAreaView style={styles.root}>
        <View style={{flexDirection: 'row', marginLeft: "5%"}}>
          <Ionicons name="chevron-back" size={30} style={{alignSelf: 'center', }} onPress={()=>{navigation.goBack()}}/>
          <SearchBarr
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
        </View>
        
        <SearchLsitDisplay
              searchPhrase={searchPhrase}
              data={data}
              setClicked={()=>setClicked(true)}
            />

          
         </SafeAreaView> )


  

}







const styles = StyleSheet.create({
 
    
  
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30%"
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  
}})



