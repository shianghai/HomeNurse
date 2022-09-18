import {View, Text, SafeAreaView} from 'react-native';
import DisplayImage from '../components/displayImage';
import InputField from '../components/input';


function EditProfileScreen({navigation}){


    return(
        <SafeAreaView >
            <DisplayImage image={imgUrl} size={50}/>
            <View style={{flexDirection: 'row'}}>
                <Text>Name</Text>
                <InputField />
            </View>

            <View style={{flexDirection: 'row'}}>
                <Text>Email</Text>
                <InputField />
            </View>

            <View style={{flexDirection: 'row'}}>
                <Text>Location</Text>
                <InputField />
            </View>
            
        </SafeAreaView>
    )
}

export default EditProfileScreen;