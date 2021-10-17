import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './src/screens/Profile/index';
import Home from './src/screens/Home/index';
import Friends from './src/screens/Friends/index';
import Search from './src/screens/Search/index';
import Settings from './src/screens/Settings/index';
import Post from './src/screens/Post/index';
import CustomDrawer from './src/components/CustomDrawer/index';
import styles from './AppStyle';
import colors from './src/constants/colors';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
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
            <Drawer.Screen name="Post" component={Post} />
          </Drawer.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
