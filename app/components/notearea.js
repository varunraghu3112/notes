
import React, { Component } from 'react';
import { Alert,Platform, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Header from './header'
import Roundbutton from './roundbutton'

export default class noteArea extends Component {

viewing()
{
    return(
    <View style={ {alignSelf: 'stretch',
    borderRadius: 6,
    backgroundColor: 'yellow',
    top: 0, right: 0, start: 0, left: 0,
    borderWidth: 0,
    padding: 5,
    marginBottom: 9}}>

    </View>)
}
    render() {
        return (  
            <TouchableOpacity  onLongPress={()=>{alert("long pressed")}} style={{width:'100%'}}>
            <View style={{    
                alignSelf: 'stretch',
                borderRadius: 6,
                top: 0, right: 0, start: 0, left: 0,
                borderWidth: 1,
                margin:4,
                marginLeft:4,
                padding: 5,
                marginBottom: 9,
                borderColor:'#69AE8C',
                width:-100
                
            }}>
            <View  key={this.props.keyval}>
            <Text style={{fontSize:30,marginBottom:15}}>
                {this.props.val.date}
            </Text>
            <View style={{flexDirection:'row',alignContent:'space-between',justifyContent:'space-between'}}>
                <View style={{width:'75%'}}>
            <Text style={{fontSize:25}}>
                {this.props.val.note}
            </Text>
            </View>
            <View>
            <TouchableOpacity onPress={
                ()=>{
                 Alert.alert(
                    "Delete note",
                    this.props.val.note,
                    [
                        
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },{ text: 'Confirm', onPress:this.props.deletemethod },{ cancelable: true }
                    ])}
                }>
            <View style={{height:30,width:30,backgroundColor:'#e24742',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:25,justifyContent:'center',alignItems:'center'}}>x</Text>
            </View>
            </TouchableOpacity>
            </View>
            </View>

            </View>
            </View>
            </TouchableOpacity>
            
           

        );
    }
}
