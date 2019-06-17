
import React, { Component } from 'react';
import { Alert,Platform, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity,AsyncStorage } from 'react-native';
import Header from './header'
import Roundbutton from './roundbutton'
import Note from './notearea'
export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            notearray:[],
            notetext:'',
            loading: true
        }
    }
    
    getData = async () => {
        this.setState({loading:true})
        await AsyncStorage.getItem('data').then((response)=>{
            this.setState({loading:false})
            if(JSON.parse(response).length)
            { 
                this.setState({
                    notearray:JSON.parse(response)
                });
            }
        }).catch(e => {
            this.setState({loading:false,notearray:[]})
        })
    }

    componentDidMount()
    {
        this.getData()
    }

    addnote()
    {
        
        
            var d=new Date();
            this.state.notearray.push({'date':d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear(),'note':this.state.notetext})
            this.setState({notearray:this.state.notearray})
            this.setState({notetext:''})  
            AsyncStorage.setItem('data',JSON.stringify(this.state.notearray));
            // alert(JSON.stringify(this.state.notearray))      
        
    }
    // onbuttonpressed=()=>{
    //     this.state.notearray.push(this.state.notetext)
    //             let notearray=this.state.notearray
    //             this.setState({notearray,notetext:''})
    //             AsyncStorage.setItem('data',JSON.stringify(this.state.notearray));
    //             alert(JSON.stringify(this.state.notearray))
    // }
    deletenote(key)
    {
        this.state.notearray.splice(key,1)
        this.setState({notearray:this.state.notearray})
        AsyncStorage.setItem('data',JSON.stringify(this.state.notearray));
    }
    render() {
   


        if(this.state.loading)
        return <Text> Loading ... </Text>
        
        return (
            
            <View style={{ flex: 1 }}>
                <Header>
                    <Text style={{ marginTop: 45, marginLeft: 5, fontSize: 30 }}>Notes
  </Text>
                </Header>
                <ScrollView style={{
                    flex: 1,
                    backgroundColor: '#44504b',
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

    
    {
        (this.state.notearray.length>0)?
        this.state.notearray.map((val,key)=>{
            return <Note key={key} keyval={key} val={val} deletemethod={()=>{this.deletenote(key)}}/>
        }):<View><Text style={{marginTop:10,fontSize:20}}>Your notes looks empty :(</Text></View>
        
    }
    
                       
          </View>
                </ScrollView>
                <View >
                    <TextInput 
                    style={{ 
                        height: 40,
                         width: '100%', 
                         backgroundColor: '#69AE8C' }} 
                         onChangeText={(notetext)=>{this.setState({notetext})}}
                         value={this.state.notetext}
                         placeholder='Enter the text here' 
                         placeholderTextColor='#44504b'></TextInput>
                </View>
                
                <TouchableOpacity onPress={()=>{
                    if (this.state.notetext == '') {
                        Alert.alert(
                            "It's empty",
                            "Trying to add empty note",
                            [
                                { text: 'Add anyway', onPress: () =>  this.addnote() },
                                {
                                    text: 'Cancel',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                }
                            ])
                      }
                    else{
                    this.addnote()
                    }
                    }
                    }>
                    <Roundbutton>
                        <Text style={{ color: 'white', fontSize: 35 }}>+</Text>
                    </Roundbutton>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
