import React, { Component } from "react";
import { View, Text, SafeAreaView, Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";

import Practice3 from './src/practice3'
export default class App extends Component {
  state = {

  }
  render() {
    return (

      <View style={styles.Container}>
        <Practice3 />


      </View>
    )
  }
}


const styles = StyleSheet.create({

  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },


})