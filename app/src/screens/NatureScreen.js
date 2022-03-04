import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Card';

const NatureScreen = () => {
    return(
        <ScrollView> 
            <Card 
                imageUrl={require('../images/mountain.jpeg')} 
                caption='A magnificient mountain'
                imageScore={2}
            />

            <Card 
                imageUrl={require('../images/beach.jpeg')} 
                caption='A beautiful beach.'
                imageScore={20}
            />

            <Card 
                imageUrl={require('../images/forest.jpeg')} 
                caption='A fearful forest'
                imageScore={12}
            />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        overflow: 'scroll',
        height: 'fit-content'
    }
});

export default NatureScreen;