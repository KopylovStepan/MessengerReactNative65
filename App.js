import React from 'react';
import {SafeAreaView, StatusBar, View, Button} from 'react-native';
import Profile from './src/screens/Profile/index';
import Home from './src/screens/Home/index';
import styles from './AppStyle';
import colors from './src/constants/colors';

// const Drawer = createDrawerNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.ultramarineBlue} />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.wrapper}>
          <Home />
          {/* <Profile /> */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
