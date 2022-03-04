import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const names = [
        { name: 'Anderson', age: 26 },
        { name: 'George', age: 24 },
        { name: 'Ugonna', age: 26 },
        { name: 'Richmond', age: 32 },
        { name: 'Samuel', age: 22 },
        { name: 'Digilus', age: 21 },
    ];

    const renderName = ({ item }) => {
        return <Text style={styles.nameStyle}>{item.name} is {item.age} years old!</Text>
    }

    return (
        <View style={styles.divStyle}>
            <Text style={styles.headerText}>This is my list screen.</Text>
            <FlatList 
                data={names} 
                renderItem={renderName} 
                keyExtractor={({name}) => { return name } }
                showsVerticalScrollIndicator={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    nameStyle: {
        backgroundColor: 'tomato',
        padding: 30,
        width: 250,
        color: 'black',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    divStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerText: {
        textAlign: 'center',
        marginVertical: 5,
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ListScreen;