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

//import zabr1 from '../zabrscreen/zabr1';
//import zabr2 from '../zabrscreen/zabr2';

import check1 from '../simplescreen/check1';
import check2 from '../simplescreen/check2';

import TrackPlayer from 'react-native-track-player';

export default function screen4({navigation}){
	return(
		//<View>
		//<Text> This is second screen</Text>
		//<TouchableOpacity
		//	onPress={()=>navigation.goBack()}
		//>
		//		<AntDesign name='arrowleft' size={24} />
		//</TouchableOpacity>
		//</View>
<View>

		<View style={{ 
        backgroundColor: 'darkkhaki',
      
      TintColor: '#fff', flexDirection:'row' , justifyContent:"space-between" , padding:15 , borderWidth:1 }}>
				<View style={{fontSize:60, padding:5, width: 33,backgroundColor:'white',}}>
				
				<TouchableOpacity 
			//onPress={()=>navigation.goBack()}
			onPress={() => navigation.toggleDrawer()}
		>
				<Entypo name='menu' size={24} />
		</TouchableOpacity>

				</View>
				<View>
				<Text style={{  color: 'black', fontSize:22,  }} >Expert</Text>
				</View>
				<View>
				</View>

		</View>

	

 <ImageBackground 
        style={styles.window}//
     
        source= {require('../assets/f1.jpg')}
        >
        
        
<View  style={styles.mainheader}>


</View>


<View  style={styles.mainContainer}>
<View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('ps5')}   
  >     
 <Image 
source= {require('../assets/w5.jpg')}
 style={{  borderWidth: 1, borderColor:'steelblue',borderRadius: 100, height : 50, width:60 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('ps4')}   
 >     
 <Image 
 source= {require('../assets/w4.jpg')}
 style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60, backgroundColor:'white', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('ps3')}   
 >     
 <Image 
  source= {require('../assets/w3.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'white', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('ps2')}   
  >     
 <Image 
 source= {require('../assets/w2.jpg')}
  style={{    borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'white', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('ps1')}   
  >     
 <Image 
source= {require('../assets/w1.jpg')}
  style={{   borderWidth: 1 , borderColor:'steelblue', borderRadius: 100, height : 50, width:60, 
 }}       />
 </TouchableOpacity>
</View>
      

 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test10')}   
  >     
 <Image 
source= {require('../assets/w10.jpg')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test9')}   
  >     
 <Image 
 source= {require('../assets/w9.jpg')}
 style={{  borderWidth: 3, borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test8')}   
 >     
 <Image 
  source= {require('../assets/w8.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test7')}   
 >     
 <Image 
 source= {require('../assets/w7.jpg')}
  style={{    borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test6')}   
  >     
 <Image 
source= {require('../assets/w6.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

      
 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test15')}   
  >     
 <Image 
source= {require('../assets/w15.jpg')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test14')}   
  >     
 <Image 
 source= {require('../assets/w14.jpg')}
 style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test13')}   
  >     
 <Image 
  source= {require('../assets/w13.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test12')}   
  >     
 <Image 
 source= {require('../assets/w12.jpg')}
  style={{    borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test11')}   
  >     
 <Image 
source= {require('../assets/w11.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test20')}   
  >     
 <Image 
source= {require('../assets/w20.jpg')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test19')}   
  >     
 <Image 
 source= {require('../assets/w19.jpg')}
 style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test18')}   
  >     
 <Image 
  source= {require('../assets/w18.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test17')}   
  >     
 <Image 
 source= {require('../assets/w17.jpg')}
  style={{    borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test16')}   
 >     
 <Image 
source= {require('../assets/w16.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
</View>

 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test25')}   
  >     
 <Image 
source= {require('../assets/w25.jpg')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test24')}   
 >     
 <Image 
 source= {require('../assets/w24.jpg')}
 style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test23')}   
  >     
 <Image 
  source= {require('../assets/w23.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test22')}   
  >     
 <Image 
 source= {require('../assets/w22.jpg')}
  style={{    borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test21')}   
  >     
 <Image 
source= {require('../assets/w21.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

<View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
      
  ViewComponent={LinearGradient} 
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
 style={{  borderWidth: 1, borderRadius: 100, height : 50, width:60, 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
        
  ViewComponent={LinearGradient} 
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
// source= {require('../assets/c9.png')}
 style={{  borderWidth: 1, borderRadius: 100, height : 50, width:60,    
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test28')}   
  >     
 <Image 
  source= {require('../assets/w28.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test27')}   
  >     
 <Image 
 source= {require('../assets/w27.jpg')}
  style={{    borderWidth: 1,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test26')}   
 >     
 <Image 
source= {require('../assets/w26.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>



</View>

      </ImageBackground>


 </View>
)};



const styles = StyleSheet.create({
window:{
 
       width: 360,

        height: 620,
      
} , 

mainheader:{
marginTop:15,
},
mainContainer: {

  paddingTop: 10,
  
    marginTop: 7,
    marginLeft: 17,
    marginRight:17,
 
  },

  row1: {
  
    flexDirection:'row',
  //paddingTop: 20,
    alignItems: 'center',
  
    justifyContent: 'space-between',
  },
 row2: {
    //flex: 1,
    flexDirection:'row',
  paddingTop: 0,
    alignItems: 'center',
    marginTop: 25,
    marginBottom:0,
    //justifyContent: 'center',
    justifyContent: 'space-between',
  },
});
