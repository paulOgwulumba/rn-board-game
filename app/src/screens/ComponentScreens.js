import React from 'react';
import { Text, StyleSheet, Image, ScrollView } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
}


/**
 * @desc Component that represents second screen for our app.
 * @returns some JSX output.
 */
const ComponentScreens = () => {
    return (
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>

        <Image source={ logo }/>
        <Image source={ logo }/>
        <Image source={ logo }/>
        <Image source={ logo }/>
        <Image source={ logo }/>

        <Text style={{ fontSize: 96 }}>If you like</Text>

        <Image source={ logo }/>
        <Image source={ logo }/>
        <Image source={ logo }/>
        <Image source={ logo }/>
        <Image source={ logo }/>

        <Text style={{ fontSize: 96 }}>Scrolling down</Text>

        <Image source={ logo }/>
        <Image source={ logo }/>
        <Image source={ logo }/>
        <Image source={ logo }/>
        <Image source={ logo  }/>

        <Text style={{ fontSize: 96 }}>What's the best framework?</Text>

        <Image source={ logo }/>
        <Image source={ logo }/>
        <Image source={ logo }/>
        <Image source={ logo }/>
        <Image source={ logo }/>

        <Text style={{ fontSize: 96 }}>React Native</Text>
      </ScrollView>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: '300',
        color: 'maroon',
        backgroundColor: 'green',
        height: '100%',
        paddingTop: 30,
        paddingLeft: 20,
    }
});

export default ComponentScreens;