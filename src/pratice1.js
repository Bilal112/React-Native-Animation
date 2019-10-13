import React, { Component } from "react";
import { View, Text, SafeAreaView, Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";


export default class practice1 extends Component {
  state ={

    animated: new Animated.Value(1)
  }

  startAnimation=()=>{
    Animated.timing(this.state.animated,{
      toValue:0,
      duration:350
    }).start(
    ()=>{
      Animated.timing(this.state.animated,{
        toValue:1,
        duration:350
      }).start()
    }
    )
  }
  render() {
    const animatedStyles={
      opacity : this.state.animated
    }
    return (

      <View style={styles.Container}>
      

          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.box,
              animatedStyles]}/>

           

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