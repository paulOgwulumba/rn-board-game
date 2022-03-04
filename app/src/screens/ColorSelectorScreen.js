import React, { useReducer } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import editColor from '../utils/editColor';

const initialState = { 
    array: [0, 0, 0],
    string: 'rgb(0, 0, 0)'
  };

const ColorSelectorScreen = () => {
  const [state, dispatch] = useReducer(editColor, initialState);

  const display = {
    width: 200,
    height: 150,
    marginTop: 20,
  };

  return (
    <View style={styles.sectionOverview}>
      <View style={styles.sectionWrapper}>
        <Text style={styles.text}>Red</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
              dispatch({ 
                type: 'increment',
                colorName: 'red' 
              })
          }}
        >
            More Red
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch({ 
              type: 'decrement',
              colorName: 'red' 
            })
          }}
        >
          Less Red
        </TouchableOpacity>
      </View>

      <View style={styles.sectionWrapper}>
        <Text style={styles.text}>Green</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch({ 
                type: 'increment',
                colorName: 'green' 
              });
            }}
        >
            More Green
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch({ 
              type: 'decrement',
              colorName: 'green', 
            })
          }}
        >
            Less Green
        </TouchableOpacity>
      </View>

      <View style={styles.sectionWrapper}>
        <Text style={styles.text}>Blue</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch({ 
              type: 'increment',
              colorName: 'blue' 
            })
          }}
        >
            More Blue
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch({ 
              type: 'decrement',
              colorName: 'blue' 
            })
          }}
        >
            Less Blue
        </TouchableOpacity>
      </View>

      <View style={{ ...display, backgroundColor: state.string}}></View>
    </View>
  )
};

const styles = StyleSheet.create({
    sectionOverview: {
        display: 'flex',
        alignItems: 'center',
    },

    sectionWrapper: {
        paddingHorizontal: 30,   
        marginTop: 20,  
        width: '100%'
    },

    text: {
        marginLeft: 5,
        fontWeight: 'bold',

    },

    button: {
        backgroundColor: '#800020',
        padding: 10,
        marginVertical: 5,
        color: 'white',
        textAlign: 'center',
    },
});

export default ColorSelectorScreen;