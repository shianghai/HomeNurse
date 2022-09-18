import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigation/bottomNavigation';
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState, useCallback } from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font'
import { createUserAccountWithEmailAndPassword } from './src/firebase';
import useCachedResources from './src/hooks/useCachedResources'
import MainDrawerNavigator from './src/navigation/drawerNavigator';
import MainStackNavigator from './src/navigation/stackNavigation';
import {store} from './src/redux/store'
import {Provider} from 'react-redux'



export default function App() {
 
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'montserrat-bold' : require('./assets/Montserrat-Bold.ttf'),
          'montserrat-medium' : require('./assets/Montserrat-Medium.ttf'),
          'montserrat-light' : require('./assets/Montserrat-Light.ttf'),
          'montserrat-regular' : require('./assets/Montserrat-Regular.ttf'),
          'lato-regular' : require('./assets/Lato-Regular.ttf') 
        });
        
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
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
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  
    return (
      <Provider store={store}>
          <NavigationContainer onReady={onLayoutRootView}>
          <MainStackNavigator/>
      </NavigationContainer>
      </Provider>
      
    )
  
}
  

  


