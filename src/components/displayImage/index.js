import {Image, View} from 'react-native';
import colors from '../../../constants/colors';
import react from 'react';


function DisplayImage({image, size}){
    
        return <Image 
        source={{uri: image}}
        style={{
            width: size, 
            height: size, 
            borderRadius: size,
            borderWidth: 1,
            borderColor: colors.light.secondaryTint
            
        }}
        
    />
        
        
    
}


export default DisplayImage;   