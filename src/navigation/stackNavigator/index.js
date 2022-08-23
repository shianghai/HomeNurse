import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "../bottomNavigation";
import NewsDetailsScreen from "../../screens/newsDetailsScreen";

const Navigator = createNativeStackNavigator();

function MainStackNavigator(){
    return(
        <Navigator.Navigator>
            <Navigator.Screen name="Root" component={BottomNavigation} options={{headerShown: false}} />
            <Navigator.Screen name="NewsDetails" component={NewsDetailsScreen} options={{headerShown: false}}/>
        </Navigator.Navigator>
    )
}


export default MainStackNavigator;