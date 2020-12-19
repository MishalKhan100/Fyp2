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

export default function about({navigation}){
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
            <Text style={{ color: 'white', fontSize: 22, }} >📝 About </Text>
          </View>
          <View>
          </View>

        </View>
      
<View style={{marginTop:50, alignItems:'center'}}>

<Text> COMSATS UNIVERSITY ISLAMABAD </Text>
<Text> Final Year Project  </Text>
<Text> Arabic LEarning and Pronounciation Helper </Text>
<Text> ALEPH  </Text>
<Text> Made By </Text>
<Text> Mishal  </Text>
</View>
</View>
      </ImageBackground>
</View>


)};