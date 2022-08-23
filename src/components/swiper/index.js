import {View, Text, Animated, PanResponder, LogBox, useWindowDimensions, ImageBackground} from 'react-native'
import TipsCard from '../tipsCard'
import {useEffect, useRef, useState} from 'react'
import Data from '../../../data'


function SWIPER(){
    //ignore the useNativeDriver warning using logbox
    useEffect(()=>{
        LogBox.ignoreLogs(['Animated: `useNativeDriver`'])
    })

    const height = useWindowDimensions().height
    const width = useWindowDimensions().width

    let [curentIndex, setCurrentIndex] = useState(0)



    const pan = useRef(new Animated.ValueXY()).current

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponderCapture: ()=> true,
            onMoveShouldSetPanResponder: ()=> true,
            onPanResponderGrant: ()=>{
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._yvalue
                })
            },
            
            onPanResponderMove: Animated.event(
                [
                    null,
                    {dx: pan.x, dy: pan.y}
                ], {useNativeDriver: false}
                
            ),
            onPanResponderEnd: ()=>{
                
                console.log(curentIndex)
            },
            onPanResponderRelease: (event, gestureState)=>{
                if(gestureState.dx < 120){

                }
                Animated.spring(
                    pan, // Auto-multiplexed
                    { toValue: { x: 0, y: 0 } } // Back to zero
                  ).start();
                
            }, 
           
        })

    ).current

    

    return Data.map((data, index)=>{
        if(index < curentIndex){
            return null
        }
        else if(index == curentIndex){
        return(
        <Animated.View key={index} style={{
            transform: [{translateX: pan.x}], height: height-400, width: width, position: 'absolute'
        }}
        {...panResponder.panHandlers}
        >
            
            <View style={{  borderWidth: 1, borderRadius: 6, height: "100%", width: "100%",  }} key={data.id}>
                <ImageBackground source={data.imageUrl} resizeMode={'cover'} style={{width: "100%", height: "100%", opacity: 0.8}}>
                <View style={{marginBottom: "2%", justifyContent: 'flex-end', flex: 1}}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
                    {data.title}
                </Text>
                <Text style={{color: 'white', fontSize: 18, textDecorationLine: 'underline', fontWeight: 'bold'}}>
                    {data.body}
                </Text>
                

                </View>
                
                </ImageBackground>
            </View>
            
        </Animated.View>
        )}
        else{
            return(
                <Animated.View style={{
                    transform: [{translateX: pan.x}], height: height-400, width: width, position: 'absolute'
                }}
                {...panResponder.panHandlers}
                >
                    
                    <View style={{  borderWidth: 1, borderRadius: 6, height: "100%", width: "100%", }} key={data.id}>
                        <ImageBackground source={data.imageUrl} resizeMode={'cover'} style={{width: "100%", height: "100%", opacity: 0.8}}>
                        <View style={{marginBottom: "2%", justifyContent: 'flex-end', flex: 1}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
                            {data.title}
                        </Text>
                        <Text style={{color: 'white', fontSize: 18, textDecorationLine: 'underline', fontWeight: 'bold'}}>
                            {data.body}
                        </Text>
                        
        
                        </View>
                        
                        </ImageBackground>
                    </View>
                    
                </Animated.View>
            )
        }
    }).reverse()
        
        
        
    
}


export default SWIPER