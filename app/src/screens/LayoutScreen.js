import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const LayoutScreen = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.div1}></View>
            <View style={styles.div2}></View>
            <View style={styles.div3}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },

    div1: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderColor: 'tomato',
        borderWidth: 1,
    },

    div2: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderColor: 'turquoise',
        borderWidth: 1,
        top: 100,
    },

    div3: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderColor: 'blue',
        borderWidth: 1,
    }
    
});

export default LayoutScreen;