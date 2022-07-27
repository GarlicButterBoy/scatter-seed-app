import React, { useRef, Component } from "react";
import { Animated, View, StyleSheet, PanResponder, Text, Dimensions } from "react-native";
import GardenPlanner from "./GardenPlanner";

const WSIZE = Dimensions.get('window').width;
class Testc extends Component {
  pan = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value
      });
    },
    onPanResponderMove: Animated.event([
      null,
      { dx: this.pan.x, dy: this.pan.y }
    ]),
    onPanResponderRelease: () => {
      this.pan.flattenOffset();
    }
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Animated.View
          style={{
            transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }]
          }}
          {...this.panResponder.panHandlers}
        >
          <View style={styles.box} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  }
});

export default Testc;
/*import React, { useRef } from 'react';
import {
  Animated,
  useWindowDimensions,
  View,
  Dimensions,
  ToastAndroid
} from 'react-native';
import GardenPlanner from './GardenPlanner';


const WSIZE = Dimensions.get('window').width;
const CURSOR_SIDE_SIZE = WSIZE/8;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 4;
export default (props) => {
  const touch = useRef(
    new Animated.ValueXY({ x: 0, y: 0 })
  ).current;

  
  const dimensions = useWindowDimensions();
  
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff",width: WSIZE, height: WSIZE }}>
      <Animated.View
        onStartShouldSetResponder={() => true}
            onResponderMove={(event) => {
                touch.setValue({
                x: event.nativeEvent.locationX,
                y: event.nativeEvent.locationY,
                });
            }}
        style={{
            position: 'absolute',
            right: Animated.subtract(WSIZE, touch.x),
            bottom: Animated.subtract(WSIZE, touch.y),
            height: CURSOR_SIDE_SIZE,
            width: CURSOR_SIDE_SIZE,
            
            backgroundColor: 'orange',
        }}
        onResponderRelease={() => {
            
        }
        }>
        </Animated.View>
    </View>
  );
};//*/