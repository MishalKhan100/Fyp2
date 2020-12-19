import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, StyleSheet, View, Text, ImageBackground, Image, Button ,BackHandler} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo'

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import SoundPlayer from 'react-native-sound-player';

import Sound from 'react-native-sound';
import { Col, Row, Grid } from "react-native-easy-grid";

import TrackPlayer from 'react-native-track-player';
import { RNVoiceRecorder } from 'react-native-voice-recorder'
let recordingPath;


const start = async () => {
  TrackPlayer.setupPlayer();
  await TrackPlayer.add({
    id: 'track',
    url: require('../letters/002-ba.mp3'),
  })
  await TrackPlayer.play();
};


export default class test28 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: true,
      showlebal :false,
      acc:'',
    }
  }
  backAction = () => {
    this.setState({
      showlebal:false,
      acc:'',
    })
    this.props.navigation.goBack();
    return true;
  };
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }


  testing() {
    RNVoiceRecorder.Record({
      format: 'wav',
      onDone: (path) => {
        console.log('record done: ' + path)
        recordingPath = path;
        this.setState({
          showlebal:true,
          acc:"Wrong Prouncation 0%",
        })
      }})}



  _onRecord() {
    RNVoiceRecorder.Record({
      format: 'wav',
      onDone: (path) => {
        console.log('record done: ' + path)
        recordingPath = path;
  
      
    const test = `file://${path}`
    console.log(test)
     const data1 = new FormData()
     data1.append('file',{ uri: test, name:`recorded_audio.wav`, type:`audio/wav`})
     
     try{
      fetch('http://192.168.10.9:8080/', {
       method: 'POST',
       headers: { 
         'Accept': 'application/json',
         'Content-Type': 'multipart/form-data'
       },
       body: data1
     })
     .then(response => response.json())
      .then(check => { 
       console.log("check" + check)
       this.setState({
         acc:check,
         showlebal:true
       })
    })}
     catch(err){
       alert(err)
     }
      
     }
    })}
 
  render() {
    return (
      <View>

        <View style={{
          backgroundColor: 'steelblue',

          TintColor: '#fff', flexDirection: 'row', justifyContent: "space-between", padding: 15, borderWidth: 1
        }}>
          <View style={{ fontSize: 60, padding: 5, width: 35, backgroundColor: 'white', }}>

            <TouchableOpacity
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Entypo name='menu' size={24} />
            </TouchableOpacity>

          </View>
          <View>
            <Text style={{ color: 'white', fontSize: 22, }} >Arabic Learning</Text>
          </View>
          <View>
          </View>

        </View>



        <View style={styles.mainContainer}>

          <View style={styles.mainheader}>
            <TouchableOpacity activeOpacity={1}
              onPress={() => this.props.navigation.navigate('homedrawer')}      
            >
              <Image
                source={require('../assets/home.png')}
                style={{ borderRadius: 200, height: 50, width: 50, marginTop: 11, marginLeft: 5 }} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1}
             // onPress={() => this.props.navigation.navigate('check3')}                 
            >
             
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ flexDirection: 'column', width: 100 }}>
              <TouchableOpacity activeOpacity={0.5}
                onPress={() => {start() }
                }>
                <Image
                  source={require('../assets/play.jpg')}
                  style={{
                    marginLeft: 10, marginTop: 55, borderWidth: 3, borderColor: 'black', borderRadius: 200, height: 60, width: 60,
                    backgroundColor: 'black',
                    flexDirection: 'row',
                  }} />

              </TouchableOpacity>
              


              <TouchableOpacity activeOpacity={0.5}
                onPress={() => { this._onRecord() }}
              >
                <Image
                  source={require('../assets/mic.png')}
                  style={{
                    marginLeft: 10, marginTop: 45, borderWidth: 3, borderColor: 'black', borderRadius: 200, height: 60, width: 60, backgroundColor: 'blue',
                  }} />
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={1}
                onPress={() => { this.testing() }}
              >
              <Text style={{color:'white',  marginLeft: 20, marginTop: 6, borderWidth: 3, 
              borderColor: 'white',  height: 20, width: 70,}}>hello</Text> 
              </TouchableOpacity>

            </View>


            <View style={{ flexDirection: 'column' }}>


              <TouchableOpacity activeOpacity={0.5}

              >
                <Image
                  source={require('../without2/g28.png')}
                  style={{
                    marginTop: 20, borderWidth: 2, borderRadius: 20, borderColor: 'black',
                    height: 245, width: 230, marginLeft: 20,

                  }} />
              </TouchableOpacity>
            </View>


          </View>


         
          <View style={styles.footer}>

        
            <TouchableOpacity activeOpacity={0.5}
            >
              <Image
                source={require('../withoutback/child2.png')}
                style={{
                  height: 220, width: 240, marginTop: 20, marginLeft: 40,
                }} />
            </TouchableOpacity>
            {this.state.showlebal == true ? (
              <TouchableOpacity
                style={{width:'100%' , height:40 , backgroundColor:"green" , padding:10}}
              >
                  <Text style={{textAlign:"center", color:'white'}}>{this.state.acc}</Text>
              </TouchableOpacity>

            ): null}
            

          </View>

        </View>
      </View>



    )
  };
}

const styles = StyleSheet.create({
  window: {
    justifyContent: 'center',
    height: 780,
    width: 470,
    borderWidth: 1,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },

  mainContainer: {
    backgroundColor: 'white',
  
  },
  mainheader: {
    flexDirection: 'row',

  },
  row1:
  {
    flexDirection: 'row',
  },
  row2: {
    flexDirection: 'row',
  },

  footer: {
    backgroundColor:'white',
    color:'white'
   
  },
});


