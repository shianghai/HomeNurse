import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {View, Text} from 'react-native'
import DisplayImage from '../components/displayImage';

export default function ChatScreen({route, navigation}) {
  const [messages, setMessages] = useState([]);
 const {name, imgUrl} = route.params


  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle: ()=>{
        return (
          <View style={{flexDirection: 'row'}}>
            <DisplayImage image={imgUrl}/>
            <Text style={{lineHeight: 20, fontSize: 16,   fontFamily: 'montserrat-light', }}>{name}</Text>
          </View>
        )
      }
    })
  }, [navigation])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])


  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}