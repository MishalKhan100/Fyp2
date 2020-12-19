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

export default function screen3({navigation}){
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
				<Text style={{  color: 'black', fontSize:22,  }} >Intermediate</Text>
				</View>
				<View>
				</View>

		</View>

	

 <ImageBackground 
        style={styles.window}//
       //width: 340, height:200, justifyContent:'center', textAlign: 'center'}}
        //We are using online image to set background
 //       source={{
   //       uri:
     //       'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
        //}}
        source= {require('../assets/f1.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
   //   onPress={()=>this.props.navigation.navigate('aboutscreen')}
        >
        
        
<View  style={styles.mainheader}>


</View>


<View  style={styles.mainContainer}>
<View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test5')}   
  >     
 <Image 
source= {require('../assets/d5.jpg')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderColor:'steelblue',borderRadius: 100, height : 50, width:60 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test4')}   
 >     
 <Image 
 source= {require('../assets/d4.jpg')}
 style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60, backgroundColor:'white', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test3')}   
 >     
 <Image 
  source= {require('../assets/d3.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'white', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test2')}   
  >     
 <Image 
 source= {require('../assets/d2.jpg')}
  style={{    borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'white', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test1')}   
  >     
 <Image 
source= {require('../assets/d1.jpg')}
  style={{   borderWidth: 1 , borderColor:'steelblue', borderRadius: 100, height : 50, width:60, 
 }}       />
 </TouchableOpacity>
</View>
      

 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test10')}   
  >     
 <Image 
source= {require('../assets/d10.jpg')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test9')}   
  >     
 <Image 
 source= {require('../assets/d9.jpg')}
 style={{  borderWidth: 3, borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test8')}   
 >     
 <Image 
  source= {require('../assets/d8.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test7')}   
 >     
 <Image 
 source= {require('../assets/d7.jpg')}
  style={{    borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test6')}   
  >     
 <Image 
source= {require('../assets/d6.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

      
 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test15')}   
  >     
 <Image 
source= {require('../assets/d15.jpg')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test14')}   
  >     
 <Image 
 source= {require('../assets/d14.jpg')}
 style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test13')}   
  >     
 <Image 
  source= {require('../assets/d13.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test12')}   
  >     
 <Image 
 source= {require('../assets/d12.jpg')}
  style={{    borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test11')}   
  >     
 <Image 
source= {require('../assets/d11.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test20')}   
  >     
 <Image 
source= {require('../assets/d20.jpg')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test19')}   
  >     
 <Image 
 source= {require('../assets/d19.jpg')}
 style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test18')}   
  >     
 <Image 
  source= {require('../assets/d18.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test17')}   
  >     
 <Image 
 source= {require('../assets/d17.jpg')}
  style={{    borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test16')}   
 >     
 <Image 
source= {require('../assets/d16.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
</View>

 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test25')}   
  >     
 <Image 
source= {require('../assets/d25.jpg')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test24')}   
 >     
 <Image 
 source= {require('../assets/d24.jpg')}
 style={{  borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test23')}   
  >     
 <Image 
  source= {require('../assets/d23.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test22')}   
  >     
 <Image 
 source= {require('../assets/d22.jpg')}
  style={{    borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test21')}   
  >     
 <Image 
source= {require('../assets/d21.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

<View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
      
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
//source= {require('../assets/c25.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderRadius: 100, height : 50, width:60, 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
        
  ViewComponent={LinearGradient} // Don't forget this!
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
  source= {require('../assets/d28.jpg')}
  style={{   borderWidth: 1, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test27')}   
  >     
 <Image 
 source= {require('../assets/d27.jpg')}
  style={{    borderWidth: 1,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('test26')}   
 >     
 <Image 
source= {require('../assets/d26.jpg')}
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
 
        //alignSelf: 'stretch',
        //alignSelf: 'center',
        //justifyContent: 'center',
       width: 360,

        height: 620,
        // borderWidth: 1,
         //marginTop:200,
    //borderRadius: 75,
    //alignSelf: 'stretch',
        //width: win.width,
       // height: win.height,
     //position: 'relative',
    //resizeMode:'contain',
} , 

mainheader:{
marginTop:15,
//marginLeft: 215, 


},
mainContainer: {
 //  flex: 1,
  //  flexDirection:'row',
  paddingTop: 10,
  //  alignItems: 'center',
    marginTop: 7,
    marginLeft: 17,
    marginRight:17,
  // borderRadius:2,
    //sborderWidth:1,
//    justifyContent: 'center',
    //justifyContent: 'space-between',
  },

  row1: {
  //  flex: 1,
    flexDirection:'row',
  //paddingTop: 20,
    alignItems: 'center',
    //marginTop: 10,
    //justifyContent: 'center',
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
