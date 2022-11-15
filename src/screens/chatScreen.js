import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {View, Text} from 'react-native'
import DisplayImage from '../components/displayImage';
import { collection, addDoc, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';
import { firebaseApp } from '../firebase';
import { getAuth } from 'firebase/auth';
import fireStoreDb from '../firebase';

export default function ChatScreen({route, navigation}) {
  const [messages, setMessages] = useState([]);
 const {name, imgUrl} = route.params
  const auth = getAuth(firebaseApp);

  

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle: ()=>{
        return (
          <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}}>
            <DisplayImage image={imgUrl} size={30}/>
            <Text style={{lineHeight: 20, fontSize: 20,   fontFamily: 'montserrat-light', marginLeft: '10%'}}>{name}</Text>
          </View>
        )
      }
    })

    const q = query(collection(fireStoreDb, `chats/${name}}`), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
            snapshot.docs.map(doc => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
            }))
        ));

        return () => {
          unsubscribe();
        };
  }, [navigation])



  const onSend = useCallback((messages = []) => {
    const { _id, createdAt, text, user,} = messages[0]
    addDoc(collection(fireStoreDb, `chats/${name}`), { _id, createdAt,  text, user });
}, []);


  return (
    <GiftedChat
    messages={messages}
    showAvatarForEveryMessage={true}
    onSend={messages => onSend(messages)}
    user={{
        _id: auth?.currentUser?.email,
        name: auth?.currentUser?.displayName,
        avatar: auth?.currentUser?.photoURL
    }}
    />
  )
}