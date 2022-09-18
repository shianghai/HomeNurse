import {View, Text} from 'react-native'

export default function ValidationComment(type, validationFeedBack){
    switch(type){
        case 'email':
            if(validationFeedBack === null){
                return <View>
                    <Text>email field empty</Text>
                </View>
            }
            else if(validationFeedBack === 1){
                return <View></View>
            }
            else if(validationFeedBack === 0){
                    return <View>
                        <Text>email format incorrect</Text>
                    </View>
            }
           
    }
}