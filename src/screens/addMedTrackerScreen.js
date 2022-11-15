import {SafeAreaView, View, Text, TextInput, ScrollView, Modal, useWindowDimensions} from 'react-native'
import InputField from '../components/input'
import { useState, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import FlatButton from '../components/flatButton';
import OptionsHeader from '../components/optionsHeader';
import colors from '../../constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';



export default function AddMedTrackerScreen({navigation}){
    const [selectedNumber, setSelectedNumber] = useState(3);
    const [medName, setMedName] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [showStartDate, setShowStartDate] = useState(false);

    
    const [showEndDate, setShowEndDate] = useState(false);
    const [showEndTime, setShowEndTime] = useState(false);
    const deviceWidth = useWindowDimensions().width

    const onChangeStart = (event, selectedDate) => {
        const currentDate = selectedDate;
        setStartDate(currentDate);
        
      };

      const onChangeEnd = (event, selectedDate) => {
        const currentDate = selectedDate;
        setEndDate(currentDate);
        
      };
    
      const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
          setShow(false);
          // for iOS, add a button that closes the picker

        }
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };

    function handleSelectedNumber(number){
        //TODO: restrict the selected number of times to four or five or leave it like that. my choice,
        setSelectedNumber(Number.parseInt(number))
    }

    function handleProceed(){
        
        navigation.navigate('TrackerScheduler', {
            numOfTimes: selectedNumber,
            medName: medName,
            startDate: startDate.getTime(),
            endDate: endDate.getTime()
        })
    }

    function handleMedName(name){
        setMedName(name)
    }

    function handleStartTimePress(mode){
        
            
                showTimepicker()
                setShowStartTime(mode)

        }
    
        function handleStartDatePress(mode){
            showDatepicker()
            setShowStartDate(mode)

        }
    

        function handleEndDatePress(mode){
                showDatepicker()
                setShowEndDate(mode)
        }

        function handleEndTimePress(mode){
            showTimepicker()
            setShowEndTime(mode)
        }
    


    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "#F2F2F7",}}>
           
           
                <OptionsHeader option1={'< back'} option2={'cancel'}  hasLogo={true}/>
                <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                <View style={{flex: 1, padding: '2%'}}>
                    
                    <Text style={{fontSize: 20, fontFamily: 'montserrat-light', marginTop: "7%"}}>Medicine Name</Text>
                    <InputField 
                        style={{marginTop: '1%', borderColor: 'black', width: '99%', borderRadius: 8, justifyContent: 'center', }}
                        placeHolderText={'medicine name'}
                        textStyle={{alignSelf: 'center', fontSize: 23}}
                        onChangeText={(text)=>handleMedName(text)}/>

                        
                            <Text style={{
                                fontSize: 20, 
                                fontFamily: 'montserrat-light', 
                                marginTop: '4%',
                                fontWeight: '200'}}>

                                    Number of Times Daily
                            </Text>
                            <View style={{ 
                                flexDirection: 'row', 
                                backgroundColor: 'white', 
                                marginTop: '1%', 
                                borderRadius: 20, 
                                width: '60%', 
                                height: '12%',
                                justifyContent: 'space-evenly'}}>
                                <Ionicons name='add' size={30} style={{
                                    marginTop: '5%', 
                                    width: '15%', 
                                    alignContent: 'center'}}/>
                                <View style={{
                                    backgroundColor: 'grey', 
                                    height: '80%', 
                                    width: '0.3%', 
                                    alignSelf: 'center', 
                                    marginHorizontal: '3%', }}/>
                                    <InputField 
                                        style={{ 
                                            borderColor: 'black', 
                                            width: '60%', 
                                            flex: 1, 
                                            height: '100%', 
                                            borderColor: 'black', 
                                            borderColor: 'white',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: 'red'
                                            
                                        }}
                                        placeHolderText={"3"}
                                        textStyle={{alignSelf: 'center', fontSize: 23}}
                                        keyBoardType='numeric'
                                        onChangeText={(text)=>(handleSelectedNumber(text))}
                                    />
                                    <View style={{
                                        backgroundColor: 'grey', 
                                        height: '90%', 
                                        width: '0.3%', 
                                        alignSelf: 'center', 
                                        marginHorizontal: '3%'}}/>
                                <Ionicons name='add' size={30} style={{marginTop: '5%', width: '15%'}}/>
                                
                                
                            </View>
                        
                        <Text style={{
                            fontSize: 20, 
                            fontFamily: 'montserrat-light', 
                            marginTop: '6%'}}
                        >
                                Start Date
                        </Text>
                        <View style={{ flex: 1, 
                                }}>
                            <View style={{
                                width: '100%', 
                                height: '100%', 
                                borderRadius: 8, 
                                borderWidth: 0.5, 
                                marginTop: '1%', 
                                justifyContent: 'space-between', 
                                borderColor: 'gray',
                                }}>
                                
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                    <Text style={{fontSize: 23}}>{startDate.getDate()} / {startDate.getMonth()} / {startDate.getFullYear()} </Text>
                                    <Ionicons name={showStartDate? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleStartDatePress(!showStartDate))}/>
                                </View>
                                {showStartDate && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={startDate}
                                    mode={mode}
                                    
                                    onChange={onChangeStart}
                                    />
                            )}
                            </View>
                            
                        
                        
                            
                            
                        </View>
                        

                        <Text style={{fontSize: 20, fontFamily: 'montserrat-light', marginTop: '6%'}}>End Date</Text>
                        
                        <View style={{ flex: 1
                                }}>
                            <View style={{
                                width: '100%', 
                                height: '100%', 
                                borderRadius: 8, 
                                borderWidth: 0.5, 
                                marginTop: '1%', 
                                justifyContent: 'space-between', 
                                borderColor: 'gray'}}>
                                
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: "5%"}}>
                                    <Text style={{fontSize: 23}}>{startDate.getDate()} / {startDate.getMonth()} / {startDate.getFullYear()} </Text>
                                    <Ionicons name={showEndDate? 'caret-up' : 'caret-down'} size={20} style={{marginRight: '6%'}} onPress={()=>(handleEndDatePress(!showEndDate, "start"))}/>
                                </View>
                                {showEndDate && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={startDate}
                                    mode={mode}
                                    
                                    onChange={onChangeEnd}
                                    />
                                    )}
                                </View>
                            
                        </View>
                        
                </View>
               
                <FlatButton text={"Proceed"} style={{marginTop: '20%', width: '70%', position: 'relative', height: "12%"}} onPress={()=>{handleProceed()}}/>
               
            </ScrollView>
                
                
                
        </SafeAreaView>
    )}
