
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,ScrollView,TouchableOpacity} from 'react-native';

export default class App extends Component
{
  render() {
    return (
      <View style={{position:'absolute',zIndex:111,right:20,bottom:70,backgroundColor:'#69AE8C',width:60,height:60,borderRadius:50,justifyContent:'center',alignItems:'center',elevation: 8}}>
        {this.props.children}
      </View>
    );
  }
}