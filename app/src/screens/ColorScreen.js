import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity,
    Text
} from 'react-native';

const ColorScreen = () => {
    const [list, setList] = useState([]);
    const [key, setKey] = useState(0);
    return(
        <View style={styles.wrapper}>
            <TouchableOpacity 
                style={ styles.button }
                onPress={() => {
                    const color = randomRgb(); 
                    list.push({data: '', color, id: key});
                    console.log(list)
                    setList(list);
                    setKey(key + 1);
                }}
            >
                Add Color
            </TouchableOpacity>

            <FlatList 
                data={list}
                renderItem={renderItem}
                keyExtractor={({id}) => id}
                contentContainerStyle={styles.secondaryWrapper}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },

    secondaryWrapper: {
        display: 'flex',
        flexWrap: true,
        alignItems: 'center',
        padding: 10,
        width: 100
    },
    button: {
        padding: 15,
        backgroundColor: 'blue',
        marginVertical: 7,
        minWidth: 150,
        textAlign: 'center',
        color: '#fff', 
        fontSize: 20, 
        minHeight: 50,
    },

});

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const buttonStyle = {
    padding: 15,
    marginVertical: 7,
    minWidth: 150,
    textAlign: 'center',
    color: '#fff', 
    fontSize: 20, 
    minHeight: 50,
}

const renderItem = ({ item }) => {
    const css = StyleSheet.create({
        button: {
            ...buttonStyle,
            backgroundColor: item.color,
        }
    })
    return (
        <Text style={ css.button }>{item.data}</Text>
    )
}

export default ColorScreen;