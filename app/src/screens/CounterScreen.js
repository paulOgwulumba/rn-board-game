import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CounterScreen = () => {
    const [count, setCount] = React.useState(20);
    return(
        <View style={styles.wrapper}>
            <TouchableOpacity 
                style={ styles.button }
                onPress={() => {
                    setCount(count + 1);
                }}
            >
                Increase
            </TouchableOpacity>

            <TouchableOpacity 
                style={ styles.button }
                onPress={() => {
                    setCount(count - 1);
                }}
            >
                Decrease
            </TouchableOpacity>

            <View style={ styles.info }>
                <Text style={styles.infoTitle}>
                    Current Count:
                </Text>
                <Text style={styles.infoBody}>
                    {count}
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
    },
    button: {
        padding: 10,
        backgroundColor: 'blue',
        marginVertical: 7,
        minWidth: 150,
        textAlign: 'center',
        color: '#fff', 
        fontSize: 20,  
    },

    info: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 30,
        alignItems: 'center',
    },

    infoTitle: {
        fontSize: 20,
        marginHorizontal: 7,
        backgroundColor: 'white',
        padding: 5,
    },

    infoBody: {
        fontSize: 20,
        marginHorizontal: 7,
    }
})

export default CounterScreen;