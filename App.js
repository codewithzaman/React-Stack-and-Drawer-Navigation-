import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './Screens/ProfileScreen';
import UserScreen from './Screens/UserScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
const StackNav = ()=>{
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{
      statusBarColor: '#0163d2',
      headerStyle: {
      backgroundColor: '#0163d2'
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      }}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='User' component={UserScreen}/>

        
      </Stack.Navigator>
  )
}
const DrawerNav = ()=>{
  const Drawer = createDrawerNavigator();
  return (
      <Drawer.Navigator screenOptions={{
        statusBarColor: '#0163d2',
        headerStyle: {
        backgroundColor: '#0163d2'
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        }}>
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Profile' component={ProfileScreen}/>
        <Drawer.Screen name='User' component={UserScreen}/>
      </Drawer.Navigator>
  )
}
export default function App() {
  
  return (
    <NavigationContainer  >
      <DrawerNav/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
