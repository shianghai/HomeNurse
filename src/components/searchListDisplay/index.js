import { Text, FlatList, View,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from './styles'



export default function SearchListDisplay({searchPhrase, setClicked, data}) {

    const Item = ({ name, details }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.details}>{details}</Text>
        </View>
      );

    const renderItem = ({ item }) => {
        // when no input, show all
        if (searchPhrase === "") {
          return <Item name={item.name} details={item.details} />;
        }
        // filter of the name
        if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
          return <Item name={item.name} details={item.details} />;
        }
        // filter of the description
        if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
          return <Item name={item.name} details={item.details} />;
        }}

        const ItemDivider = () => {
            return (
              <View style={styles.separator}/>
            );
          }

    return(
            <SafeAreaView>
                <View
            onStartShouldSetResponder={() => {
            setClicked(false);
        }}
      >
            <FlatList
                renderItem={renderItem}
                data = {data}
                ItemSeparatorComponent  = {ItemDivider}
                keyExtractor = {(item)=>item.id}/>
      </View>

            </SafeAreaView>
        
            
                
        
    )
}
