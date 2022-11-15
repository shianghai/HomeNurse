import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsDetailsScreen from '../../screens/newsDetailsScreen';
import LogOutScreen from '../../screens/logOutScreen';
import ProfessionalsScreen from '../../screens/professionalsScreen';
import DosageTrackerScreen from '../../screens/dosageTrackerScreen';
import MainDrawerNavigator from '../drawerNavigator';
import EditProfileScreen from '../../screens/editProfileScreen';
import SettingsScreen from '../../screens/settingsScreen';
import SearchScreen from '../../screens/searchScreen';
import LoginScreen from '../../screens/loginScreen';
import colors from '../../../constants/colors';
import SignUpScreen from '../../screens/signupScreen';
import DiseaseDetailsScreen from '../../screens/diseaseDetailsScreen';
import ChatScreen from '../../screens/chatScreen';
import { Text } from 'react-native';
import NotificationSettingsScreen from '../../screens/notificationSettingsScreen';
import LocationSettingsScreen from '../../screens/locationSettingsScreen';
import MainScreen from '../../screens/mainScreen';
import HomeScreen from '../../screens/homeScreen';
import MapScreen from '../../screens/mapScreen';
import TrackerSchedulerScreen from '../../screens/trackerSchedulerScreen';
import AddMedTrackerScreen from '../../screens/addMedTrackerScreen';

const Stack = createNativeStackNavigator();

function MainStackNavigator(){
    return(
        <Stack.Navigator
            initialRouteName='Main'>
            
            <Stack.Screen name='Root' component={MainDrawerNavigator} options={{headerShown: false}}/>
            <Stack.Screen name ='Main' component={MainScreen} options={{headerShown: false}}/>
            <Stack.Screen name ='EditProfile' component={EditProfileScreen} />
            <Stack.Screen name='AddMed' component={AddMedTrackerScreen} options={{headerShown: false}} />
            <Stack.Screen name='DosageTracker' component={DosageTrackerScreen}/>
            <Stack.Screen name='Professionals' component={ProfessionalsScreen}/>
            <Stack.Screen name='Logout' component={LogOutScreen}/> 
            <Stack.Screen name='Settings' component={SettingsScreen} />
            <Stack.Screen name='Map' component={MapScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name='LogIn' component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name='NewsDetails' component={NewsDetailsScreen} options={{headerShown: false}}/>
            <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Search' component={SearchScreen} options={{headerShown: false}}/>
            <Stack.Screen name='DiseaseDetails' component={DiseaseDetailsScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Chat' component={ChatScreen} />
            <Stack.Screen name='NotificationsSettings' component={NotificationSettingsScreen} options={{headerShown: false}} />
            <Stack.Screen name='LocationSettings' component={LocationSettingsScreen} options={{headerShown: false}} />
            <Stack.Screen name='TrackerScheduler' component={TrackerSchedulerScreen} options={{headerShown: false}} />
            
           


        </Stack.Navigator>
    )
}

export default MainStackNavigator;