import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, {useState} from 'react'
import OptionsHeader from '../components/optionsHeader'
import { Ionicons } from '@expo/vector-icons'
import FlatButton from '../components/flatButton'
import { setDoc, doc, addDoc, getDocs, collection, query, where} from 'firebase/firestore'
import { useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import fireStoreDb, {firebaseApp} from '../firebase'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function TrackerSchedulerScreen({route, navigation}) {
  const {numOfTimes, medName, startDate, endDate} = route.params
  console.log(route.params)
  const [mode, setMode] = useState('time');
  const [showTime1, setShowTime1] = useState(false);
  const [showTime2, setShowTime2] = useState(false);
  const [showTime3, setShowTime3] = useState(false);
  const [showTime4, setShowTime4] = useState(false);
  const [showTime5, setShowTime5] = useState(false);
  const [date1, setDate1] = useState(new Date())
  const [date2, setDate2] = useState(new Date())
  const [date3, setDate3] = useState(new Date())
  const [date4, setDate4] = useState(new Date())
  const [date5, setDate5] = useState(new Date())
  const auth = getAuth(firebaseApp)

  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate1(currentDate);
    
  };

  const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate2(currentDate);
    
  };
  const onChange3 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate3(currentDate);
    
  };
  const onChange4 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate4(currentDate);
    
  };
  const onChange5 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate5(currentDate);
    
  };
 

  const showMode = (currentMode) => {
    if (Platform.OS === 'android'){
      setShow(false);
      // for iOS, add a button that closes the picker

    }
    setMode(currentMode);
  };


  const showTimepicker = () => {
    showMode('time');
  };

  async function handleFinish1(date1){
    onAuthStateChanged(auth, async(user)=>{
        const times = [date1]
       
        if(user){
            
            console.log(uid)
            const userQuery = query(collection(fireStoreDb, "users"), where("uid", "==", uid));
             await getDocs(userQuery).then((data)=>{
                console.log("data", data)
                setDoc(doc(fireStoreDb, "users",  `/${uid}/medications/${medName}` ), {medName, numOfTimes, startDate, endDate, times})
                console.log("create success")
            })
            
           
        }
        else{
            console.log("incorrect signin details")
        }
    })
  }
  async function handleFinish2(date1, date2){
    onAuthStateChanged(auth, async(user)=>{
        const times = [ date1, date2,]
            
        
        if(user){
            const uid = user.uid
            console.log(uid)
            const userQuery = query(collection(fireStoreDb, "users"), where("uid", "==", uid));
        
            await getDocs(userQuery).then((data)=>{
                console.log("data", data)
                setDoc(doc(fireStoreDb, "users",  `/${uid}/medications/${medName}` ), {medName, numOfTimes, startDate, endDate, times})
                console.log("create success")
            })
        }
        else{
            console.log("incorrect signin details")
        }
    })
  }
  async function handleFinish3(date1, date2, date3){
    onAuthStateChanged(auth, async(user)=>{
        const times = [date1, date2, date3,]
        
        
        if(user){
            const uid = user.uid
            console.log(uid)
            const userQuery = query(collection(fireStoreDb, "users"), where("uid", "==", uid));
            await getDocs(userQuery).then((data)=>{
                console.log("data", data)
                setDoc(doc(fireStoreDb, "users",  `/${uid}/medications/${medName}` ), {medName, numOfTimes, startDate, endDate, times})
                console.log("create success")
            })
        }
        else{
            console.log("incorrect signin details")
        }
    })
  }
  async function handleFinish4(date1, date2, date3, date4){
    onAuthStateChanged(auth, async(user)=>{
        const times = [date1, date2, date3, date4,]
         
        console.log("medName: ", medName)
        if(user){
            const uid = user.uid
            console.log(uid)
            const userQuery = query(collection(fireStoreDb, "users"), where("uid", "==", uid));
            await getDocs(userQuery).then((data)=>{
                console.log("data", data)
                setDoc(doc(fireStoreDb, "users",  `/${uid}/medications/${medName}` ), {medName, numOfTimes, startDate, endDate, times})
                console.log("create success")
            })
        }
        else{
            console.log("incorrect signin details")
        }
    })
  }
  async function handleFinish5(date1, date2, date3, date4, date5){
    onAuthStateChanged(auth, async(user)=>{
        const times = [date1, date2, date3, date4, date5]
        
        if(user){
            const uid = user.uid
            console.log(uid)
            const userQuery = query(collection(fireStoreDb, "users"), where("uid", "==", uid));
            await getDocs(userQuery).then((data)=>{
                console.log("data", data)
                setDoc(doc(fireStoreDb, "users",  `/${uid}/medications/${medName}` ), {medName, numOfTimes, startDate, endDate, times})
                console.log("create success")
            })
        }
        else{
            console.log("incorrect signin details")
        }
    })
  }

  function handleTimePress(timeNum, mode){     
    switch(timeNum){
        case 1:
            setShowTime1(mode)
            return
            case 1:
                setShowTime1(mode)
                return
            case 2:
                setShowTime2(mode)
                return
            case 3:
                setShowTime3(mode)
                return
            case 4:
                setShowTime4(mode)
                return
            case 5:
                setShowTime5(mode)
                return
    }
    

}

useEffect(()=>{
    const auth = getAuth(firebaseApp)
    
    //signInWithEmailAndPassword(auth,'petedoe4@gmail.com', '123456')
    
    
    
})

  switch(numOfTimes){
    case 1:
      return (
      <SafeAreaView style={{flex: 1, backgroundColor: "#F2F2F7",}}>
          <OptionsHeader option1={'cancel'} option2={'save'} hasLogo={true}/>
          <ScrollView contentContainerStyle={{  justifyContent: "space-between", }}>
          <View style={{flex: 1, padding: '2%', }}>
                <Text>choose first time</Text>
                <View style={{ flex: 1, 
                                }}>
                                <View style={{
                                    width: '90%', 
                                    height: '100%', 
                                    borderRadius: 8, 
                                    borderWidth: 0.5, 
                                    marginTop: '1%', 
                                    justifyContent: 'space-between', 
                                    borderColor: 'gray'}}>
                                    
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                        <Text style={{fontSize: 23}}>{date1.getHours()} : {date2.getMinutes()} </Text>
                                        <Ionicons name={showTime1? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(1, !showTime1))}/>
                                    </View>
                                    {showTime1 && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={date1}
                                        mode={mode}
                                        
                                        onChange={onChange1}
                                        />
                                        )}
                                </View>
                           
                            </View>
                                
            </View>
                <FlatButton text={"Finish"} style={{height: '15%', width: "70%", alignSelf: 'center', marginTop: '100%'}} onPress={()=>(handleFinish1(date1.getTime()))}/>
                      </ScrollView>
                      
      </SafeAreaView>
      )

      case 2:
        return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#F2F2F7",}}>
            <OptionsHeader option1={'cancel'} option2={'save'} hasLogo={true}/>
            <ScrollView  contentContainerStyle={{ justifyContent: "space-between",  }}>
            <View style={{flex: 1, padding: '2%', }}>
                <Text>choose first time</Text>
                <View style={{ flex:1, justifyContent: "center"}}>
                    <View style={{
                                        width: '90%', 
                                      height: '100%', 
                                      borderRadius: 8, 
                                      borderWidth: 0.5, 
                                      marginTop: '1%', 
                                      justifyContent: 'space-between', 
                                      borderColor: 'gray'}}>
                                      
                                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                          <Text style={{fontSize: 23}}>{date1.getHours()} : {date1.getMinutes()} </Text>
                                          <Ionicons name={showTime1? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(1, !showTime1))}/>
                                      </View>
                                      {showTime1 && (
                                      <DateTimePicker
                                          testID="dateTimePicker"
                                          value={date1}
                                          mode={'time'}
                                          
                                          onChange={onChange1}
                                          />
                                          )}
                                      </View>
                                  <View>
                              </View>
                              </View>
                              <Text style={{marginTop: "10%"}}>choose second time</Text>
                              <View style={{ flex: 1, 
                                }}>
                              <View style={{
                                      width: '90%', 
                                      height: '100%', 
                                      borderRadius: 8, 
                                      borderWidth: 0.5, 
                                      marginTop: '1%', 
                                      justifyContent: 'space-between', 
                                      borderColor: 'gray'}}>
                                      
                                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                          <Text style={{fontSize: 23}}>{date2.getHours()} : {date2.getMinutes()} </Text>
                                          <Ionicons name={showTime2? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(2, !showTime2))}/>
                                      </View>
                                      {showTime2 && (
                                      <DateTimePicker
                                          testID="dateTimePicker"
                                          value={date2}
                                          mode={'time'}
                                          
                                          onChange={onChange2}
                                          />
                                          )}
                                      </View>
                                  <View>
                                  </View>
                              </View>
                             
                        </View>
                        <FlatButton text={"Finish"} style={{height: '15%', width: "70%", alignSelf: 'center', marginTop: "70%"}} onPress={()=>(handleFinish2(date1.getTime(), date2.getTime()))}/>
                        </ScrollView>
        </SafeAreaView>
        )

        case 3:
          return (
          <SafeAreaView style={{flex: 1,}}>
              <OptionsHeader option1={'cancel'} option2={'save'} hasLogo={true}/>
              <ScrollView  contentContainerStyle={{ justifyContent: "space-evenly"}}>
              <View style={{flex: 1, padding: '2%', marginTop: "5%"}}>
              <Text>choose first time</Text>
              <View style={{ flex: 1, 
                                }}>
                    <View style={{
                                        width: '90%', 
                                        height: '100%', 
                                        borderRadius: 8, 
                                        borderWidth: 0.5, 
                                        marginTop: '1%', 
                                        justifyContent: 'space-between', 
                                        borderColor: 'gray'}}>
                                        
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                            <Text style={{fontSize: 23}}>{date1.getHours()} : {date1.getMinutes()} </Text>
                                            <Ionicons name={showTime1? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(1, !showTime1))}/>
                                        </View>
                                        {showTime1 && (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            value={date1}
                                            mode={'time'}
                                            
                                            onChange={onChange1}
                                            />
                                            )}
                                        </View>
                                    </View>
                               
                                <Text style={{marginTop: "15%"}}>choose second time</Text>
                                <View style={{ flex: 1, 
                                }}>
                                <View style={{
                                        width: '90%', 
                                        height: '100%', 
                                        borderRadius: 8, 
                                        borderWidth: 0.5, 
                                        marginTop: '1%', 
                                        justifyContent: 'space-between', 
                                        borderColor: 'gray'}}>
                                        
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                            <Text style={{fontSize: 23}}>{date2.getHours()} : {date2.getMinutes()} </Text>
                                            <Ionicons name={showTime2? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(2, !showTime2))}/>
                                        </View>
                                        {showTime2 && (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            value={date2}
                                            mode={'time'}
                                            
                                            onChange={onChange2}
                                            />
                                            )}
                                        </View>
                                    </View>
                                
                                
                                <Text style={{marginTop: "15%"}}>choose third time</Text>
                                <View style={{ flex: 1, 
                                }}>
                                <View style={{
                                        width: '90%', 
                                        height: '100%', 
                                        borderRadius: 8, 
                                        borderWidth: 0.5, 
                                        marginTop: '1%', 
                                        justifyContent: 'space-between', 
                                        borderColor: 'gray'}}>
                                        
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                            <Text style={{fontSize: 23}}>{date3.getHours()} : {date3.getMinutes()} </Text>
                                            <Ionicons name={showTime3? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(3, !showTime3))}/>
                                        </View>
                                        {showTime3 && (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            value={date3}
                                            mode={'time'}
                                            
                                            onChange={onChange3}
                                            />
                                            )}
                                        </View>
                                        </View>
                                    
                                </View>
                                
                                <FlatButton text={"Finish"} style={{height: '12%', width: "70%",  alignSelf: 'center', marginTop: "30%"}} onPress={()=>(handleFinish3(date1.getTime(), date2.getTime(), date3.getTime()))}/>
                          </ScrollView>
          </SafeAreaView>
          )

          case 4:
          return (
          <SafeAreaView style={{flex: 1,}}>
              <OptionsHeader option1={'cancel'} option2={'save'} hasLogo={true}/>
              <ScrollView style={{flex: 1}} contentContainerStyle={{ justifyContent: "space-evenly"}}>
              <View style={{flex: 1, padding: '2%', marginTop: "5%"}}>
              <Text>choose first time</Text>
              <View style={{ flex: 1, 
                                }}>
              <View style={{
                                        width: '90%', 
                                        height: '100%', 
                                        borderRadius: 8, 
                                        borderWidth: 0.5, 
                                        marginTop: '1%', 
                                        justifyContent: 'space-between', 
                                        borderColor: 'gray'}}>
                                       
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                            <Text style={{fontSize: 23}}>{date1.getHours()} : {date1.getMinutes()} </Text>
                                            <Ionicons name={showTime1? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(1, !showTime1))}/>
                                        </View>
                                        {showTime1 && (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            value={date1}
                                            mode={'time'}
                                            
                                            onChange={onChange1}
                                            />
                                            )}
                                        </View>
                                    <View>
                                </View>
                                </View>

                                <Text style={{marginTop: '7%'}}>choose second time</Text>
                                <View style={{ flex: 1, }}>
                                <View style={{
                                        width: '90%', 
                                        height: '90%', 
                                        borderRadius: 8, 
                                        borderWidth: 0.5, 
                                        marginTop: '1%', 
                                        justifyContent: 'space-between', 
                                        borderColor: 'gray'}}>
                                        
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                            <Text style={{fontSize: 23}}>{date2.getHours()} : {date2.getMinutes()} </Text>
                                            <Ionicons name={showTime2? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(2, !showTime2))}/>
                                        </View>
                                        {showTime2 && (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            value={date2}
                                            mode={'time'}
                                            
                                            onChange={onChange2}
                                            />
                                            )}
                                        </View>
                                    <View>
                                </View>
                                </View>

                                <Text style={{marginTop: "7%"}}>choose third time</Text>
                                <View style={{ flex: 1, 
                                }}>
                                <View style={{
                                        width: '90%', 
                                        height: '100%', 
                                        borderRadius: 8, 
                                        borderWidth: 0.5, 
                                        marginTop: '1%', 
                                        justifyContent: 'space-between', 
                                        borderColor: 'gray'}}>
                                       
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                            <Text style={{fontSize: 23}}>{date3.getHours()} : {date3.getMinutes()} </Text>
                                            <Ionicons name={showTime3? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(3, !showTime3))}/>
                                        </View>
                                        {showTime3 && (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            value={date3}
                                            mode={'time'}
                                            
                                            onChange={onChange3}
                                            />
                                            )}
                                        </View>
                                    <View>
                                </View>
                                </View>

                                <Text style={{marginTop: "7%"}}>choose fourth time</Text>
                                <View style={{ flex: 1, }}>
                                <View style={{
                                        width: '90%', 
                                        height: '100%', 
                                        borderRadius: 8, 
                                        borderWidth: 0.5, 
                                        marginTop: '1%', 
                                        justifyContent: 'space-between', 
                                        borderColor: 'gray'}}>
                                        
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                            <Text style={{fontSize: 23}}>{date4.getHours()} : {date4.getMinutes()} </Text>
                                            <Ionicons name={showTime4? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(4, !showTime4))}/>
                                        </View>
                                        {showTime4 && (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            value={date4}
                                            mode={'time'}
                                            
                                            onChange={onChange4}
                                            />
                                            )}
                                        </View>
                                    <View>
                                        </View>
                                </View>
                                </View>
                                <FlatButton text={"Finish"} style={{height: '12%', width: "70%", marginTop: "18%",  alignSelf: 'center',}} onPress={()=>(handleFinish4(date1.getTime(), date2.getTime(), date3.getTime(), date4.getTime()))}/>
                          </ScrollView>
          </SafeAreaView>
          )

          case 5:
          return (
            <SafeAreaView style={{flex: 1,}}>
            <OptionsHeader option1={'cancel'} option2={'save'} hasLogo={true}/>
            <ScrollView style={{flex: 1}} contentContainerStyle={{justifyContent: "space-evenly"}}>
            <View style={{flex: 1, padding: '2%', marginTop: "5%"}}>
            <Text>choose first time</Text>
            <View style={{ flex: 1, }}>
            <View style={{
                                      width: '90%', 
                                      height: '90%', 
                                      borderRadius: 8, 
                                      borderWidth: 0.5, 
                                      marginTop: '1%', 
                                      justifyContent: 'space-between', 
                                      borderColor: 'gray'}}>
                                    
                                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                          <Text style={{fontSize: 23}}>{date1.getHours()} : {date1.getMinutes()} </Text>
                                          <Ionicons name={showTime1? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(1, !showTime1))}/>
                                      </View>
                                      {showTime1 && (
                                      <DateTimePicker
                                          testID="dateTimePicker"
                                          value={date1}
                                          mode={'time'}
                                          
                                          onChange={onChange1}
                                          />
                                          )}
                                      </View>
                                  <View>
                              </View>
                              </View>

                              <Text style={{marginTop: "5%"}}>choose second time</Text>
                              <View style={{ flex: 1, }}>
                              <View style={{
                                      width: '90%', 
                                      height: '90%', 
                                      borderRadius: 8, 
                                      borderWidth: 0.5, 
                                      marginTop: '1%', 
                                      justifyContent: 'space-between', 
                                      borderColor: 'gray'}}>
                                      
                                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                          <Text style={{fontSize: 23}}>{date2.getHours()} : {date2.getMinutes()} </Text>
                                          <Ionicons name={showTime2? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(2, !showTime2))}/>
                                      </View>
                                      {showTime2 && (
                                      <DateTimePicker
                                          testID="dateTimePicker"
                                          value={date2}
                                          mode={'time'}
                                          
                                          onChange={onChange2}
                                          />
                                          )}
                                      </View>
                                  <View>
                              </View>
                              </View>


                              <Text style={{marginTop: "5%"}}>choose third time</Text>
                              <View style={{ flex: 1, }}>
                              <View style={{
                                      width: '90%', 
                                      height: '90%', 
                                      borderRadius: 8, 
                                      borderWidth: 0.5, 
                                      marginTop: '1%', 
                                      justifyContent: 'space-between', 
                                      borderColor: 'gray'}}>
                                      
                                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                          <Text style={{fontSize: 23}}>{date3.getHours()} : {date3.getMinutes()} </Text>
                                          <Ionicons name={showTime3? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(3, !showTime3))}/>
                                      </View>
                                      {showTime3 && (
                                      <DateTimePicker
                                          testID="dateTimePicker"
                                          value={date3}
                                          mode={'time'}
                                          
                                          onChange={onChange3}
                                          />
                                          )}
                                      </View>
                                    <View>
                                    </View>
                                </View>

                              <Text style={{marginTop: "5%"}}>choose fourth time</Text>  
                              <View style={{ flex: 1, }}>        
                              <View style={{
                                      width: '90%', 
                                      height: '90%', 
                                      borderRadius: 8, 
                                      borderWidth: 0.5, 
                                      marginTop: '1%', 
                                      justifyContent: 'space-between', 
                                      borderColor: 'gray'}}>
                                      
                                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                          <Text style={{fontSize: 23}}>{date4.getHours()} : {date4.getMinutes()} </Text>
                                          <Ionicons name={showTime4? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(4, !showTime4))}/>
                                      </View>
                                      {showTime4 && (
                                      <DateTimePicker
                                          testID="dateTimePicker"
                                          value={date4}
                                          mode={'time'}
                                          
                                          onChange={onChange4}
                                          />
                                          )}
                                      </View>
                                  <View>
                              </View>
                              </View>

                              <Text style={{marginTop: "5%"}}>choose fifth time</Text>
                              <View style={{ flex: 1, }}>
                              <View style={{
                                      width: '90%', 
                                      height: '90%', 
                                      borderRadius: 8, 
                                      borderWidth: 0.5, 
                                      marginTop: '1%', 
                                      justifyContent: 'space-between', 
                                      borderColor: 'gray'}}>
                                      
                                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                          <Text style={{fontSize: 23}}>{date5.getHours()} : {date5.getMinutes()} </Text>
                                          <Ionicons name={showTime5? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleTimePress(5, !showTime5))}/>
                                      </View>
                                      {showTime5 && (
                                      <DateTimePicker
                                          testID="dateTimePicker"
                                          value={date5}
                                          mode={'time'}
                                          
                                          onChange={onChange5}
                                          />
                                          )}
                                      </View>
                                      </View>
                                  <View>
                              </View>
                              </View>
                              <FlatButton text={"Finish"} style={{height: '12%', width: "70%",  alignSelf: 'center', marginTop: "4%"}} onPress={()=>(handleFinish5(date1.getTime(), date2.getTime(), date3.getTime(), date4.getTime(), date5.getTime()))}/>
                        </ScrollView>
        </SafeAreaView>
          )
    
    }
}