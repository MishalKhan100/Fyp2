/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Button,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


export var appSounds = {};


/*         <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;



function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function about() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>aaaaa</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerRoutes(){
  return(

<Drawer.Navigator initialRouteName= "Home">
<Drawer.Screen name="Home" component= {HomeScreen} />
<Drawer.Screen name="about" component= {about} />
</Drawer.Navigator>

    );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen name="about" component={about} />
        <Stack.Screen name="Home" component={DrawerRoutes} />
  
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/
import {

  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,

  drawerIcon,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import home from './screen/home'
import dua from './screen/dua'
import Splash from './screen/Splash'
import about from './screen/about'
import screen2 from './screen/screen2'
import instruction from './screen/instruction'
import check1 from './simplescreen/check1'
import screen3 from './screen/screen3'
import screen4 from './screen/screen4'
import check2 from './simplescreen/check2'
import check3 from './simplescreen/check3'
import check4 from './simplescreen/check4'
import check5 from './simplescreen/check5'
import check6 from './simplescreen/check6'
import check7 from './simplescreen/check7'
import check8 from './simplescreen/check8'
import check9 from './simplescreen/check9'
import check10 from './simplescreen/check10'
import check11 from './simplescreen/check11'
import check12 from './simplescreen/check12'
import check13 from './simplescreen/check13'
import check14 from './simplescreen/check14'
import check15 from './simplescreen/check15'
import check16 from './simplescreen/check16'
import check17 from './simplescreen/check17'
import check18 from './simplescreen/check18'
import check19 from './simplescreen/check19'
import check20 from './simplescreen/check20'
import check21 from './simplescreen/check21'
import check22 from './simplescreen/check22'
import check23 from './simplescreen/check23'
import check24 from './simplescreen/check24'
import check25 from './simplescreen/check25'
import check26 from './simplescreen/check26'
import check27 from './simplescreen/check27'
import check28 from './simplescreen/check28'
import ps1 from './screen3/ps1'
import ps2 from './screen3/ps2'
import ps3 from './screen3/ps3'
import ps4 from './screen3/ps4'
import ps5 from './screen3/ps5'

import test1 from './screen2/test1'
import test2 from './screen2/test2'
import test3 from './screen2/test3'
import test4 from './screen2/test4'
import test5 from './screen2/test5'
import test6 from './screen2/test6'
import test7 from './screen2/test7'
import test8 from './screen2/test8'
import test9 from './screen2/test9'
import test10 from './screen2/test10'
import test11 from './screen2/test11'
import test12 from './screen2/test12'
import test13 from './screen2/test13'
import test14 from './screen2/test14'
import test15 from './screen2/test15'
import test16 from './screen2/test16'
import test17 from './screen2/test17'
import test18 from './screen2/test18'
import test19 from './screen2/test19'
import test20 from './screen2/test20'
import test21 from './screen2/test21'
import test22 from './screen2/test22'
import test23 from './screen2/test23'
import test24 from './screen2/test24'
import test25 from './screen2/test25'
import test26 from './screen2/test26'
import test27 from './screen2/test27'
import test28 from './screen2/test28'



import DrawerStyle from './screen/customerdrawer'
import gaming from './gamemode/gaming'
import gamescreen from './gamemode/gamescreen'
import help from './gamemode/help'
import help1 from './gamemode/help1'
import help2 from './gamemode/help2'
import help3 from './gamemode/help3'
import game2 from './gamemode/game2'
import game3 from './gamemode/game3'
import puzzle1 from './gamemode/game3images/puzzle1'
import puzzle2 from './gamemode/game3images/puzzle2'
import level1 from './gamemode/game2levels/level1'
import level2 from './gamemode/game2levels/level2'

import puzzle5 from './gamemode/game3images/puzzle5';
import puzzle4 from './gamemode/game3images/puzzle4';
import puzzle3 from './gamemode/game3images/puzzle3';

const splashStack = createStackNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const homedrawer = () => (
  <Stack.Navigator
    headerMode='none'
  //
  //initialRouteName='home'
  >
    <Stack.Screen
      name='homedrawer'
      component={home}
    />
    <Stack.Screen
      name='secondScreen'
      component={screen2}
    />
    <Stack.Screen
      name='check1'
      component={check1}
    />
    <Stack.Screen
      name='check2'
      component={check2}
    />
    



    <Stack.Screen
      name='screen3'
      component={screen3}
    />
  </Stack.Navigator>
)
// const  homeStack2 =()=>(
//       <Stack.Navigator
//            headerMode='none'
//           initialRouteName='homeMain'
//       >
//          <Stack.Screen   
//               name='homeMain' 
//               component={homesrc}
//          />

//           <Stack.Screen   
//               name='screen3'   
//               component={screen3}
//          />
//       </Stack.Navigator>
//   )



const drawerNav = () => (
  //function Mydrawer(){
  // return(
  <Drawer.Navigator

    drawerContent={props => <DrawerStyle {...props}

    />}

    drawerStyle={{
      backgroundColor: 'lightblue',
      width: 200,
    }}
    drawerContentOptions={{
      activeTintColor: 'blue',
      itemStyle: { marginVertical: 30 },
      labelStyle: {
        fontSize: 18,
        color: 'black',
      },
    }}
  >

    <Drawer.Screen
      name='homedrawer'
      component={home}
    // options={{    
    //            drawerIcon: config => <Icon
    //                size={25}
    //                name={Platform.OS === 'android' ? 'md-book' : 'ios-create'}></Icon>
    //    }}    
    />
    <Drawer.Screen
      name='secondScreen'
      component={screen2}

    />
    <Drawer.Screen
      name='dua'
      component={dua}

    />
    <Drawer.Screen
      name='screen3'
      component={screen3}

    />
    <Drawer.Screen
      name='screen4'
      component={screen4}

    />
      <Drawer.Screen
      name='about'
      component={about}

    />
    <Drawer.Screen
      name='check1'
      component={check1}
    />
    <Drawer.Screen
      name='check2'
      component={check2}
    />
    <Drawer.Screen
      name='check3'
      component={check3}
    />
    <Drawer.Screen
      name='check4'
      component={check4}
    />
    <Drawer.Screen
      name='check5'
      component={check5}
    />
    <Drawer.Screen
      name='check6'
      component={check6}
    />
    <Drawer.Screen
      name='check7'
      component={check7}
    />
    <Drawer.Screen
      name='check8'
      component={check8}
    />
    <Drawer.Screen
      name='check9'
      component={check9}
    />
    <Drawer.Screen
      name='check10'
      component={check10}
    />
    <Drawer.Screen
      name='check11'
      component={check11}
    />
    <Drawer.Screen
      name='check12'
      component={check12}
    />
    <Drawer.Screen
      name='check13'
      component={check13}
    />
    <Drawer.Screen
      name='check14'
      component={check14}
    />
    <Drawer.Screen
      name='check15'
      component={check15}
    />
    <Drawer.Screen
      name='check16'
      component={check16}
    />
    <Drawer.Screen
      name='check17'
      component={check17}
    />
    <Drawer.Screen
      name='check18'
      component={check18}
    />
    <Drawer.Screen
      name='check19'
      component={check19}
    />
    <Drawer.Screen
      name='check20'
      component={check20}
    />
    <Drawer.Screen
      name='check21'
      component={check21}
    />
    <Drawer.Screen
      name='check22'
      component={check22}
    />
    <Drawer.Screen
      name='check23'
      component={check23}
    />
    <Drawer.Screen
      name='check24'
      component={check24}
    />
    <Drawer.Screen
      name='check25'
      component={check25}
    />
    <Drawer.Screen
      name='check26'
      component={check26}
    />
    <Drawer.Screen
      name='check27'
      component={check27}
    />
    <Drawer.Screen
      name='check28'
      component={check28}
    />
    <Drawer.Screen
      name='ps1'
      component={ps1}
    />
    <Drawer.Screen
      name='ps2'
      component={ps2}
    />
    <Drawer.Screen
      name='ps3'
      component={ps3}
    />
    <Drawer.Screen
      name='ps4'
      component={ps4}
    />
    <Drawer.Screen
      name='ps5'
      component={ps5}
    />


    <Drawer.Screen
      name='gaming'
      component={gaming}
    />
     <Drawer.Screen
      name='test1'
      component={test1}
    />
      <Drawer.Screen
      name='test2'
      component={test2}
    />
      <Drawer.Screen
      name='test3'
      component={test3}
    />
      <Drawer.Screen
      name='test4'
      component={test4}
    />
      <Drawer.Screen
      name='test5'
      component={test5}
    />
      <Drawer.Screen
      name='test6'
      component={test6}
    />
      <Drawer.Screen
      name='test7'
      component={test7}
    />
      <Drawer.Screen
      name='test8'
      component={test8}
    />
      <Drawer.Screen
      name='test9'
      component={test9}
    />
      <Drawer.Screen
      name='test10'
      component={test10}
    />
      <Drawer.Screen
      name='test11'
      component={test11}
    />
      <Drawer.Screen
      name='test12'
      component={test12}
    />
      <Drawer.Screen
      name='test13'
      component={test13}
    />
      <Drawer.Screen
      name='test14'
      component={test14}
    />
      <Drawer.Screen
      name='test15'
      component={test15}
    />
      <Drawer.Screen
      name='test16'
      component={test16}
    />
      <Drawer.Screen
      name='test17'
      component={test17}
    />
      <Drawer.Screen
      name='test18'
      component={test18}
    />
      <Drawer.Screen
      name='test19'
      component={test19}
    />
      <Drawer.Screen
      name='test20'
      component={test20}
    />
      <Drawer.Screen
      name='test21'
      component={test21}
    />
      <Drawer.Screen
      name='test22'
      component={test22}
    />
      <Drawer.Screen
      name='test23'
      component={test23}
    />
      <Drawer.Screen
      name='test24'
      component={test24}
    />
      <Drawer.Screen
      name='test25'
      component={test25}
    />
      <Drawer.Screen
      name='test26'
      component={test26}
    />
     <Drawer.Screen
      name='test27'
      component={test27}
    />
     <Drawer.Screen
      name='test28'
      component={test28}
    />


    <Drawer.Screen
      name='gamescreen'
      component={gamescreen}
    />
     <Drawer.Screen
      name='help'
      component={help}
    />
      <Drawer.Screen
      name='help1'
      component={help1}
    />
      <Drawer.Screen
      name='help2'
      component={help2}
    />
      <Drawer.Screen
      name='help3'
      component={help3}
    />
    <Drawer.Screen
      name='game2'
      component={game2}
    />
    <Drawer.Screen
      name='game3'
      component={game3}
    />
      <Drawer.Screen
      name='instruction'
      component={instruction}
    />
    <Drawer.Screen
      name='puzzle1'
      component={puzzle1}
    />
    <Drawer.Screen
      name='puzzle2'
      component={puzzle2}
    />
    <Drawer.Screen
      name='puzzle3'
      component={puzzle3}
    />
    <Drawer.Screen
      name='puzzle4'
      component={puzzle4}
    />
    <Drawer.Screen
      name='puzzle5'
      component={puzzle5}
    />
    <Drawer.Screen
      name='level1'
      component={level1}
    />
    <Drawer.Screen
      name='level2'
      component={level2}
    />
  </Drawer.Navigator>

)


export default function App() {
  // const componentDidMount = () =>{
  // appSounds.likeSound = new Sound("001-alif.mp3", Sound.MAIN_BUNDLE, error => {
  //       if (error) {
  //         console.log("failed to load the sound", error);
  //       }
  //     });
  // }

  return (

    <NavigationContainer>
      <splashStack.Navigator
        headerMode='none'
      >
        <splashStack.Screen
          name='splash'
          component={Splash}
        />
        <splashStack.Screen

          name='home'
          component={drawerNav}

        />
      </splashStack.Navigator>

    </NavigationContainer>
  )
}


// function Home() {
//   return (
//      <View style={{ flexDirection: 'row' }}>

//         <TouchableOpacity >
// <Image source={require('./assets/d1.png')} />;

//         </TouchableOpacity>


//  </View>
//   );
// }

// function Root() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="Root" component={Root} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;

