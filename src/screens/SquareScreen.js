import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const COLOR_INCREMENT = 15
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : {... state, red: state.red + action.amount };
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : {... state, green: state.green + action.amount };
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : {... state, blue: state.blue + action.amount };
    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
  const { red, green, blue } = state;

  return <View>
    <ColorAdjuster
      onIncrease = {() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT })}
      onDecrease = {() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
      color = "Red"/>
    <ColorAdjuster
      onIncrease = {() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}
      onDecrease = {() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
      color="Blue" />
    <ColorAdjuster
      onIncrease = {() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
      onDecrease = {() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
      color="Green" />
    <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
  </View>
}

const styles = StyleSheet.create({});

export default SquareScreen;
