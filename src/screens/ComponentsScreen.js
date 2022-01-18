import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the home screen</Text>
      <Text style={styles.subHeadingStyle}>This is the sub heading</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
    color: '#808000',
  },
  subHeadingStyle: {
    fontSize: 25,
    color: 'red',
  }
});

export default ComponentsScreen;