import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState, useCallback, useRef } from 'react';
import MainStackNavigator from './src/navigation/stackNavigation';
import {store} from './src/redux/store'
import {Provider} from 'react-redux'
import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import { firebaseApp } from 'firebase/app';
import { getAuth, onAuthStateChanged,  } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserType, } from './src/redux/userType';
import { setUserObject } from './src/redux/userObject';
import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import fireStoreDb from './src/firebase'

const registerForPushNotificationsAsync = async () => {
  let token;

  if (Device.isDevice) {
      // we check if we have access to the notification permission
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;


      if (existingStatus !== 'granted') {
          // if we dontt have access to it, we ask for it
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
      }
      if (finalStatus !== 'granted') {
          // user doesnt allow us to access to the notifications
          alert('Failed to get push token for push notification!');
          return;
      }

      // obtain the expo token
      token = (await Notifications.getExpoPushTokenAsync()).data;

      // log the expo token in order to play with it
      console.log(token);
  } else {

      // notifications only work on physcal devices
      alert('Must use physical device for Push Notifications');
  }

  // some android configuration
  if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
      });
  }

  return token;
}



function StateApp(){
  const [appIsReady, setAppIsReady] = useState(false);
  const dispatch = useDispatch()
  const userType = useSelector(state=>state.userType.userType)
  const userObject = useSelector(state => state.userObject.user)

  const notificationListener = useRef();
    const responseListener = useRef();

    

    const notificationCommonHandler = (notification) => {
        // save the notification to reac-redux store
        console.log('A notification has been received', notification)
    }


    const notificationNavigationHandler = ({ data }) => {
        // navigate to app screen
        console.log('A notification has been touched', data)
    }



  useEffect(() => {
     // Register for push notification
     const token = registerForPushNotificationsAsync();

     // This listener is fired whenever a notification is received while the app is foregrounded
     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
         notificationCommonHandler(notification);
     });

     // This listener is fired whenever a user taps on or interacts with a notification 
     // (works when app is foregrounded, backgrounded, or killed)
     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
         notificationCommonHandler(response.notification);
         notificationNavigationHandler(response.notification.request.content);
     });

     // The listeners must be clear on app unmount
     
    async function prepare() {
      return new Promise(async(resolve, reject)=>{

      
        try{
          //get authenticated user and set the userObject state
          const auth = getAuth(firebaseApp);
          onAuthStateChanged(auth, async(user)=>{
              if(user){
                  const uid = user.uid
                  dispatch(setUserObject(user.providerData))
                  console.log("user uid is: ", userObject.uid)
                  const userQuery = query(collection(fireStoreDb, "users"), where("uid", "==", uid));
                  const profQuery = query(collection(fireStoreDb, "professionals"), where("uid", "==", uid));

                  const userQuerySnapShot = await getDocs(userQuery)
                  const profQuerySnapShot = await getDocs(profQuery)

                  //check if the  authenticated person is a regualar user or a professional
                  if(userQuerySnapShot.empty){
                      if(profQuerySnapShot.empty){
                          
                      }else{
                          // if professional
                          console.log("person is a professional")
                          dispatch(changeUserType("professional"))
                          profQuerySnapShot.forEach((doc)=>{
                              console.log("profQuerySnapShot", doc.data())
                              
                          })
                          
                          }
                      }
                      else{
                        //if regular user
                        console.log("person is a user")
                        userQuerySnapShot.forEach((doc)=>{
                            console.log("userQuerySnapShot", doc.data())
                            
                          
                        })
                        
                      }
            }
          })
          //load fonts
          await Font.loadAsync({
            'montserrat-bold' : require('./assets/Montserrat-Bold.ttf'),
            'montserrat-medium' : require('./assets/Montserrat-Medium.ttf'),
            'montserrat-light' : require('./assets/Montserrat-Light.ttf'),
            'montserrat-regular' : require('./assets/Montserrat-Regular.ttf'),
            'lato-regular' : require('./assets/Lato-Regular.ttf'),
            'inter-light' : require('./assets/Inter-Light.ttf'), 
            'inter-bold' : require('./assets/Inter-Bold.ttf'),
            'inter-medium' : require('./assets/Inter-Medium.ttf'),
            'inter-Thin' : require('./assets/Inter-Thin.ttf'),
            'inter-black' : require('./assets/Inter-Black.ttf'),
            'lobsterTwo-bold' : require('./assets/LobsterTwo-Bold.ttf'),
            'lobsterTwo-boldItalic' : require('./assets/LobsterTwo-BoldItalic.ttf'),
            'lobsterTwo-regular' : require('./assets/LobsterTwo-Regular.ttf'),
            'lobsterTwo-italic' : require('./assets/LobsterTwo-Italic.ttf'),
            
          })
        
        
        } catch (e) {
          console.warn(e);
        } finally {
          // Tell the application to render
          console.log("app is ready")
          setAppIsReady(true);
        }
    })
    }
  
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
      prepare()
      
   }, []);


  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, []);



  if (!appIsReady) {
    return null;
  }
  
    return (
      
          <NavigationContainer onReady={onLayoutRootView}>
            <MainStackNavigator/>
          </NavigationContainer>
      
      
    )
  
}

export default function App() {
 return(
  <Provider store={store}>
    <StateApp />
  </Provider>
  
 )
  
}
  

  


