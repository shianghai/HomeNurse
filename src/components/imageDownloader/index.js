import {Image, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {getStorage, ref, getDownloadURL} from 'firebase/storage'
import {firebaseApp, getImageUrl} from '../../firebase';


function ImageDownloader({imageName}){
    console.log(imageName)
    
    return(
        
            <Image source={imageName } style={{height: "100%", width: "40%"}} resizeMode="cover"/>
        
        
    )
}


export default ImageDownloader;