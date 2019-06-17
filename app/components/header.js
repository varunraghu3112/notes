
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,ScrollView,TouchableOpacity} from 'react-native';

export default class App extends Component
{
  render() {
    return (
      <View style={{height:90,width:'100%',
        backgroundColor: '#69AE8C',}}>
        {this.props.children}
      </View>
    );
  }
}
