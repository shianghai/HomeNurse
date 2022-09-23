import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import {Ionicons, EvilIcons, Octicons, Entypo, } from '@expo/vector-icons'
import DisplayImage from '../displayImage';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';
  


  function CustomDrawerContent({props}) {

    

    const navigation  = useNavigation();
    return (
      <DrawerContentScrollView {...props}>
        
        
        <DrawerItem
          label={()=>{
            
               return <View style={{marginLeft:"\-18%", flexDirection: 'column'}}>
                    <Text style={{lineHeight: 20, fontSize: 22, }}>Francis Shiangah</Text>
                    <Text style={{lineHeight: 20, fontSize: 15, }}>enochdaywalker@gmail</Text>
               </View> 
               
            
          }}
          icon={(focused, color, size)=>{
           return <DisplayImage image='https://picsum.photos/id/237/200/105' size={50}/>
          }}
          onPress={() => {navigation.navigate('Profile')}}
          labelStyle={{flex: 1, backgroundColor: 'red'}}
          style={{}}
          
        />
        <DrawerItem
          label={()=>{
            return <Text style={{marginLeft: '\-16%', fontSize: 18}}>Edit Profile</Text>
          }}
          onPress={() => {navigation.navigate('EditProfile')}}
          icon={()=>{
            return <EvilIcons name='user' size={30} />
          }}
        />
        <DrawerItem
          label={()=>{
            return <Text style={{marginLeft: '\-16%', fontSize: 18}}>Dose Tracker</Text>
          }}
          onPress={() => {navigation.navigate('DosageTracker')}}
          icon={()=>{
            return <EvilIcons name='clock' size={30}/>
          }}
        />
        
        <DrawerItem
          label={()=>{
            return <Text style={{marginLeft: '\-16%', fontSize: 18}}>Chat</Text>
          }}
          onPress={() => {navigation.navigate('Professionals')}}
          icon={()=>{
            return <EvilIcons name='comment' size={30}/>
          }}
        />
        <DrawerItem
          label={()=>{
            return <Text style={{marginLeft: '\-16%', fontSize: 18}}>Settings</Text>
          }}
          onPress={() => {navigation.navigate('Settings')}}
          icon={()=>{
            return <EvilIcons name='gear' size={30}/>
          }}
        />
        <DrawerItem
          label={()=>{
            return <Text style={{fontSize: 20}}>Logout</Text>
          }}
          onPress={() => {navigation.navigate('Logout')}}
          
        />
         <DrawerItem
          label={()=>{
            return <Text style={{fontSize: 20}}>LogIn</Text>
          }}
          onPress={() => {navigation.navigate('LogIn')}}
          
        />
        <DrawerItem
          label={()=>{
            return <Text style={{fontSize: 20}}>signup</Text>
          }}
          onPress={() => {navigation.navigate('SignUp')}}
          
        />
       
      </DrawerContentScrollView>
      
    );
  }

  export default CustomDrawerContent;