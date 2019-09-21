// check ../../App.js for a detailed snippet
// copy the below code for a simplified snippet

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Snippet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a snippet</Text>
      </View>
    );
  }
}

export default Snippet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
