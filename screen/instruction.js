import React from 'react'
import {Dimensions,TouchableOpacity,StyleSheet,  View, Text, ImageBackground, Image, Button} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'  
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo' 

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import { appSounds } from '../App';
import Sound from 'react-native-sound';

import check1 from '../simplescreen/check1';

export default function instruction({navigation}){
	return(
		
<View>

	


<ImageBackground 
        style={{ width:360, height:700}}
     
        source= {require('../assets/z1.jpeg')}
        
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
            <Text style={{ color: 'white', fontSize: 22, }} >❓ Instructions</Text>
          </View>
          <View>
          </View>

        </View>
      
<View style={{marginTop:5}}>

<Text> There are two modes of learning in this application </Text>
<Text> First is the learning mode and other is the gaming mode </Text>
<Text> For the Learning Mode there are 3 levels </Text>
<Text> Start the level click on any letter button to view the display  </Text>
<Text> After view the letter screen there are two button as audio play and microphone recording </Text>
<Text> As by clicking on the microphone button audio start recording  </Text>
<Text> As the recording complete just click on thick button present on the top of the screen  </Text>
<Text> If you want to check your recording just click on play button present in that recording screen </Text>
<Text> After that just wait for a second and view the resultant percentage of the predicted audio </Text>
<Text> As same steps proceed for all the letters and levels present in the learning mode </Text>
<Text> Now just check the gaming mode  </Text>
<Text> There are three games in the gaming mode and a help for all the games </Text>
<Text> Play the games and enjoy your time! </Text>
</View>
</View>
      </ImageBackground>
</View>


)};