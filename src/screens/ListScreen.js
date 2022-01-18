/*
  breakfast,
  exercise
  study
  revision
  sleep
*/

import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const dailyTask = [
  'breakfast',
  'exercise',
  'study',
  'revision',
  'sleep'
];

const ListScreen = function() {
  return <FlatList
    data={dailyTask}
    renderItem={({item}) => {
      return <Text style={styles.textStyle}>{item}</Text>
    }}
  />
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#808000',
    fontSize: 30
  }
});

export default ListScreen;