import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import TextButton from '../textButton'
import fireStoreDb, {firebaseApp} from '../../firebase'
import {getDocs, doc, collection, query} from 'firebase/firestore'
import { useSelector, useDispatch } from 'react-redux'
import GetMedicationForToday from '../../../utils/getMedicationForToday'


const MedTrackerDisplay = ({medData}) =>{
const [todayMed, setTodayMed] = useState({medName: "your medicine", nextTime: "your time"})
const dispatch = useDispatch()
const uid = useSelector(state => state.userObject.user.uid)
const userQuery = query(collection(fireStoreDb, "users",  `/${uid}/medications`))

    useEffect(()=>{
        async function prepare(){
           setTodayMed(medData)
        }

        prepare()
    }, [medData])

  return (
    <View style={{
        borderColor: 'white',
        backgroundColor: "white",  
        width: "100%",
        height: "75%", 
        borderWidth: 0.5, 
        borderRadius: 10, 
        marginTop: "2%", 
        shadowColor: 'grey',
        shadowOffset: {width: 2, height:4},
        shadowOpacity: 1,
        shadowRadius: 10, 
        padding: '3%',
        }}>
            <View style={{height: "80%", alignItems: 'center', justifyContent: "center"}}>
           
                 <Text>Up Next</Text>
                 <View style={{backgroundColor: "grey", height: "0.2%", width: "100%"}}/> 
                <Text style={{fontSize: 25, fontFamily: 'montserrat-light'}}>{todayMed.medName}</Text>
                
                <View style={{flexDirection: "row", }}>
                    <Text style={{alignSelf: 'flex-end',fontSize: 30}}>{todayMed.nextTime}</Text>
                    <Text style={{alignSelf: 'flex-end', fontSize: 25, fontFamily: 'montserrat-light'}}>AM</Text>
                </View>
                

            </View>
            
            <View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: "3%"}}>
                <TextButton text={"Add"} color={"#2F80ED"}/>
                <TextButton text={"Edit"} color={"#2F80ED"}/>
                <TextButton text={"view all"} color={"#2F80ED"}/>
            </View>
        </View>
  )
}

export default MedTrackerDisplay