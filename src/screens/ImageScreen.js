import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return <View>
    <ImageDetail text="Forest" imageSource={require('../../assets/forest.jpg')} score={4} />
    <ImageDetail text="Beach" imageSource={require('../../assets/beach.jpg')} score={8}/>
    <ImageDetail text="Moutain" imageSource={require('../../assets/mountain.jpg')} score={7}/>
  </View>
}

const styles = StyleSheet.create({});

export default ImageScreen;
