import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {Feather} from '@expo/vector-icons';



function SearchBar(){
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [data, setData] = useState([])
    return (
        <View style={styles.container}>
            <View
                style={
                clicked
                    ? styles.searchBar__clicked
                    : styles.searchBar__unclicked
                }
            >
                {/* search Icon */}
                <Feather
                name="search"
                size={20}
                color="black"
                style={{ marginLeft: 1 }}
                />
                {/* Input field */}
                <TextInput
                style={styles.input}
                placeholder="Search"
                value={searchPhrase}
                onChangeText={(text)=>{setSearchPhrase(text)}}
                onFocus={() => {
                    setClicked(true);
                }}
                />
                {/* cross Icon, depending on whether the search bar is clicked or not */}
                {clicked && (
                <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                    setSearchPhrase("")
                }}/>
                )}
            </View>
            {/* cancel button, depending on whether the search bar is clicked or not */}
            {clicked && (
                <View>
                <Button
                    title="Cancel"
                    onPress={() => {
                    Keyboard.dismiss();
                    setClicked(false);
                    }}
                ></Button>
                </View>
        )}
        
        </View>
        )
}

export default SearchBar;