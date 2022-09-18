import {View, SafeAreaView, Text} from 'react-native'
import FlatButton from '../components/flatButton'
import InputField from '../components/input'
import * as tf from '@tensorflow/tfjs'
import fireStoreDb from '../firebase';
import React, {useEffect, useState} from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import passedArray from '../../data'
import {bundleResourceIO} from "@tensorflow/tfjs-react-native";





function DiagnosisScreen(navigation){

    function handleDiagnose(){
        navigation.navigate('diseaseDetails')
    }

    const [model, setModel] = useState();
    

    // async function getModelUrl(){
    //     const storage = getStorage()
    //     await getDownloadURL(ref(storage, "/model/model.json")).then((url)=>{
    //         return url;
    //     })
    // }

    

// Load the model from the models folder
  /*const loadModel = async () => {
    //Loading model from models folder
    const modelJSON = require("../../model/model.json");
  
    const modelWeights = await require("../../model/group1-shard1of1.bin");
    const model = await tf
      .loadLayersModel(bundleResourceIO(modelJSON, modelWeights))
      .catch(e => console.log(e));
    console.log("Model loaded!");
    setModel(model)
    }*/

    // async function loadModel(url) {
    //     try {
    //     // For layered model
    //      const model = await tf.loadLayersModel(url);
    //     // For graph model
    //     // const model = await tf.loadGraphModel(url.model);
    //     setModel(model);
    //     console.log("Load model success")
    //     }
    //     catch (err) {
    //     console.log(err);
    //     }
    //     }
        //React Hook

        function predictModel(){
            model.predict()
        }
        
       /* useEffect(()=>{
        tf.ready().then(()=>{
         loadModel().then(console.log("model loaded"))
        });
        },[])*/

    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{height: "90%", width: "98%", backgroundColor: 'white', justifyContent: "center", alignItems: "center"}}>
                <Text style={{marginBottom: "10%", fontSize: 18, color: "grey"}}>Enter symptons</Text>
                <InputField style={{marginBottom: "4%"}}/>
                <InputField style={{marginBottom: "4%"}}/>
                <InputField style={{marginBottom: "4%"}}/>
                <InputField style={{marginBottom: "4%"}}/>
                <FlatButton text="Diagnose" style={{marginTop: "5%",}} onPress={()=>handleDiagnose}/>
            </View>
        </SafeAreaView>
    )
}



export default DiagnosisScreen