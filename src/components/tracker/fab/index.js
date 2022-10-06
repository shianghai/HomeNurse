import {Text, View, TouchableOpacity} from 'react-native';


export default function Fab(){
    const onPress = ()=>{

    }

    return(
        <View
            style={{
                backgroundColor: Colors.light.tint,
                position: "absolute",
                bottom: 10,
                right: 10,
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: 50,
                borderColor: Colors.light.tint,
                borderWidth: 1.5,
                opacity: 0.5
            }}
        >
        <MaterialCommunityIcons name='feather' size={30} color={'white'}/>
    </View>
    )
}