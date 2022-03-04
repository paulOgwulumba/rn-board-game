import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const ExerciseScreen = () => {
    const [ myName, setName ] = useState('');
    return <View style={styles.wrapper}>
        <Text 
          style={styles.headerText}
        >
          Getting started with React Native!
        </Text>
        <Text 
          style={styles.bodyText}
        >
          My name is {myName} and I have a font-size of 20.
        </Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your text here."
          autoCapitalize='words'
          autoCorrect={true}
          onChangeText={
            (newText) => setName(newText)
          }
          value={myName}
        />
    </View>;
};

const styles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    headerText: {
        fontSize: 45,
        marginVertical: 10,
    },
    bodyText: {
        fontSize: 20,
        marginVertical: 10,
    },
    TextInput: {
      height: 40,
      padding: 10,
    }
});

export default ExerciseScreen;