import React, { Component } from "react";
import { View, Text, SafeAreaView, Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";


export default class App extends Component {
  render() {
    return (

      <SafeAreaView>
        <View style={styles.Container}>

          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={styles.box}>

            </Animated.View>

          </TouchableWithoutFeedback>
        </View>


      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({

  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {

    width: 150,
    height: 150,
    backgroundColor: 'red'
  }

})