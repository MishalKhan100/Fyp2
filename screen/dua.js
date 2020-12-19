import React from 'react'
import {Dimensions,TouchableOpacity,StyleSheet,  View, Text, ImageBackground, Image, Button} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'  
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo' 

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import SoundPlayer from 'react-native-sound-player';

import { appSounds } from '../App';
import Sound from 'react-native-sound';

import check1 from '../simplescreen/check1';
//import check2 from '../simplescreen/check2';

import TrackPlayer from 'react-native-track-player';
const start1 = () => {
    TrackPlayer.setupPlayer();
   TrackPlayer.add({
            id: 'track',
          url: require('../letters/happy.mp3'),
   }) 
     TrackPlayer.play();  
  };
  const start2 = () => {
    TrackPlayer.setupPlayer();
   TrackPlayer.add({
            id: 'track',
          url: require('../letters/sad.mp3'),
   }) 
     TrackPlayer.play();  
  };
export default function dua({navigation}){
	return(
		
<View>

	


<ImageBackground 
        style={{ width:360, height:700}}
     
        source= {require('../assets/sky.jpg')}
        
        >
<View>
<View style={{
          backgroundColor: 'steelblue',

          TintColor: '#fff', flexDirection: 'row', justifyContent: "space-between", padding: 15, borderWidth: 1
        }}>
          <View style={{ fontSize: 60, padding: 5, width: 35, backgroundColor: 'white', }}>

            <TouchableOpacity
              //onPress={()=>navigation.goBack()}
              onPress={() => navigation.toggleDrawer()}
            >
              <Entypo name='menu' size={24} />
            </TouchableOpacity>

          </View>
          <View>
            <Text style={{ color: 'white', fontSize: 22, }} >🤲🏻 Dua</Text>
          </View>
          <View>
          </View>

        </View>


 <TouchableOpacity activeOpacity={0.5}
onPress={() =>{start1()}}   
 >     
 <Image 
source= {require('../assets/smile.png')}
  style={{   marginTop:130, marginLeft:130, height : 150, width:150,  }}       />
 </TouchableOpacity>


 <TouchableOpacity activeOpacity={0.5}
onPress={() =>{start2()}}   
 >     
 <Image 
source= {require('../assets/sad.png')}
  style={{   marginTop:80, marginLeft:130, height : 180, width:165,  }}       />
 
 </TouchableOpacity>

 </View>
      </ImageBackground>
</View>


)};