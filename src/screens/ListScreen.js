import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
  const tasks = [
    { name: 'Task #1', time: '10 min' },
    { name: 'Task #2', time: '10 min' },
    { name: 'Task #3', time: '10 min' },
    { name: 'Task #4', time: '10 min' },
    { name: 'Task #5', time: '10 min' },
    { name: 'Task #6', time: '10 min' },
    { name: 'Task #7', time: '10 min'}
  ];
  return (
  <FlatList
    keyExtractor={task => task.name}
    data={tasks}
    renderItem = {({item}) => {
      return <Text style={styles.textStyle}>{item.name}-{item.time}</Text>
    }}
  />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginVertical: 50
  }
});

export default ListScreen;
