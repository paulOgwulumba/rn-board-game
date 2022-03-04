import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ( {imageUrl, caption, imageScore} ) => {
    return (
        <View style={ styles.wrapper } horizontal={true}>
            <Image style={styles.image} source={imageUrl}/>
            <Text style={ styles.text }>{caption}</Text>
            <Text style={ styles.text }>Image Score: {imageScore}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'gray',
        marginVertical: 10,
        overflow: 'scroll'
    },
    text: {
        fontSize: 15,
        padding: 2
    },
    image: {
        padding: 30,
        height: 300,
    }
});

export default Card;