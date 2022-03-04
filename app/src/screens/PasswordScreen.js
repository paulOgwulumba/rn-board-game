import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';

const PasswordScreen = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const warning = <Text style={styles.bodyText}>Password must be at least 5 characters long</Text>
    return(
        <View style={styles.wrapper}>
            <Text style={styles.headerText}>Login:</Text>

            <TextInput
                style={styles.TextInput}
                textContentType= 'password'
                value = {password}
                placeholder = 'Enter your correct password'
                onChangeText={ (newText) => setPassword(newText)}
                
            />

            { password.length > 5? null : warning}

            <Button 
                title='Submit'
                onPress= {() => {
                    if (password === 'gundabad') {
                        navigation.navigate('Home');
                    }
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      headerText: {
          fontSize: 20,
          marginVertical: 10,
          textAlign: 'center',
      },
      bodyText: {
          fontSize: 12,
          color: 'red',
          marginVertical: 10,
      },
      TextInput: {
        height: 40,
        padding: 10,
        width: '100%',
        textAlign: 'center',
      }
})

export default PasswordScreen;