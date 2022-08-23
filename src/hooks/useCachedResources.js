import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'montserrat-bold' : require('../../assets/Montserrat-Bold.ttf'),
          'montserrat-medium' : require('../../assets/Montserrat-Medium.ttf'),
          'montserrat-light' : require('../../assets/Montserrat-Light.ttf'),
          'montserrat-regular' : require('../../assets/Montserrat-Regular.ttf'),
          'lato-regular' : require('../../assets/Lato-Regular.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(!isLoadingComplete);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
