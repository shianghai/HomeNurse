import { Ionicons } from '@expo/vector-icons';
import {View, Text, SafeAreaView} from 'react-native';
import colors from '../../constants/colors';
import DisplayImage from '../components/displayImage';
import InputField from '../components/input';
import {useLayoutEffect} from 'react'


function EditProfileScreen({navigation}){

    function imageSelectHandler(){
        
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
           headerStyle: {backgroundColor: colors.light.primary}
        })
      }, [navigation])


    return(
        <SafeAreaView style={{flex: 1, }}>
            

                    <View style={{height: '20%', width: '100%', backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name='add' size={30} color={colors.light.secondaryTint} />
                        <Text style={{color: colors.light.secondaryTint, }} onPress={imageSelectHandler}>click to change image</Text>
                    </View>
            
                
                    <Text style={{lineHeight: 20, fontSize: 20,   fontFamily: 'montserrat-light', marginTop: '2%'}}>Name</Text>
                    <InputField style={{marginBottom: '3%'}}/>
                

                
                    <Text style={{lineHeight: 20, fontSize: 20,   fontFamily: 'montserrat-light', }}>Email</Text>
                    <InputField style={{marginBottom: '3%'}}/>
                

               
                    <Text style={{lineHeight: 20, fontSize: 20,   fontFamily: 'montserrat-light', }}>Location</Text>
                    <InputField style={{marginBottom: '3%'}}/>
               
            
            
        </SafeAreaView>
    )
}

export default EditProfileScreen;