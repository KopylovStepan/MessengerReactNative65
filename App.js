import React from 'react';
import {SafeAreaView, StatusBar, View, Button, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './src/screens/Profile/index';
import Home from './src/screens/Home/index';
import Friends from './src/screens/Friends/index';
import Search from './src/screens/Search/index';
import Settings from './src/screens/Settings/index';
import CustomDrawer from './src/components/CustomDrawer/index';
import styles from './AppStyle';
import colors from './src/constants/colors';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar backgroundColor={colors.ultramarineBlue} />
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}
          drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Friends" component={Friends} />
          <Drawer.Screen name="Search" component={Search} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

// const App = () => {
//   return (
//     <>
//       <StatusBar backgroundColor={colors.ultramarineBlue} />
//       <SafeAreaView style={styles.safeAreaView}>
//         <View style={styles.wrapper}>
//           <Home />
//           {/* <Profile /> */}
//         </View>
//       </SafeAreaView>
//     </>
//   );
// };

export default App;
