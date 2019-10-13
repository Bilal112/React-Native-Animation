import React, { Component } from "react";
import { View, Text, SafeAreaView, Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";


export default class Practice3 extends Component {
  state = {

    animated: new Animated.Value(1)
  }

  startAnimation = () => {
    Animated.timing(this.state.animated, {
      toValue: 0,
      duration: 350
    }).start(()=>{
      this.state.animated.setValue(0)
    })
  }
  render() {
    const animatedStyles = {
      transform: [{
        
        scaleX: this.state.animated
      }]
    }
    return (

      <View style={styles.Container}>


        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box,
            animatedStyles]} />



        </TouchableWithoutFeedback>



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
  box: {

    width: 150,
    height: 150,
    backgroundColor: 'red'
  }

})