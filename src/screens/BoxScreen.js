import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
  return < View style={styles.viewStyle} >
    <View style={styles.textOneStyle} ></View>
    <View style={styles.textTwoStyle} ></View>
    <View style={styles.textThreeStyle} ></View>
  </View>
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textOneStyle : {
    height: 40,
    width: 40,
    backgroundColor: 'red'
  },
  textTwoStyle: {
    height: 40,
    width: 40,
    backgroundColor: 'green',
    top: 40
  },
  textThreeStyle: {
    height: 40,
    width: 40,
    backgroundColor: 'blue'
  }
});

export default BoxScreen;
