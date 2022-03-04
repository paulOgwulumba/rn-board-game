import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>Navigation Screen</Text>

    <Button
      style={styles.content}
      title="Component Screen"
      onPress={() => { navigation.navigate('Components'); }}
    />

    <Button
      style={styles.content}
      title="List Screen"
      onPress={() => { navigation.navigate('List'); }}
    />

    <Button
      style={styles.content}
      title="Exercise Screen"
      onPress={() => { navigation.navigate('Exercise'); }}
    />

    <Button
        style={styles.content}
        title="Nature Screen"
        onPress={() => { navigation.navigate('Nature'); }}
      />

    <Button
        style={styles.content}
        title="Counter Screen"
        onPress={() => { navigation.navigate('Counter'); }}
      />

    <Button
        style={styles.content}
        title="Color Screen"
        onPress={() => { navigation.navigate('Color'); }}
      />

    <Button
        style={styles.content}
        title="Color Selector Screen"
        onPress={() => { navigation.navigate('ColorSelector'); }}
      />

    <Button
        style={styles.content}
        title="Password Screen"
        onPress={() => { navigation.navigate('Password'); }}
      />
    
    <Button
        style={styles.content}
        title="Layout Exercise Screen"
        onPress={() => { navigation.navigate('Layout'); }}
      />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'gray',
    padding: 20,
  },
  content: {
    fontSize: 15,
    textAlign: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: 'orange',
    marginVertical: 20,
  },
  image: {
    padding: 50,
  }
});

export default HomeScreen;
