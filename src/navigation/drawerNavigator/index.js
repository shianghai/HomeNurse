import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "../bottomNavigation";
import {createDrawerNavigator} from '@react-navigation/drawer'
import CustomDrawerContent from "../../components/customDrawerContent";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function MainDrawerNavigator(){
    const customNav = useNavigation()
    return(
        <Drawer.Navigator
            drawerContent={(props)=><CustomDrawerContent props = {props} customNavigation={customNav}/>}>
            <Drawer.Screen name="BottomRoot" component={BottomNavigation} options={{headerShown: false}} />
            
           
        </Drawer.Navigator>
    )
}


export default MainDrawerNavigator;