import 'react-native-gesture-handler'

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import Home from './components/Home'
import List from './components/List'
import Details from './components/Details'
import Actions from './components/Actions'


// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

const store=createStore(rootReducer);

const Tab = createBottomTabNavigator();


const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{ title: "Home", headerTitleAlign: "center" }} />
      <HomeStack.Screen name="Details" component={Details} options={{ title: "Details", headerTitleAlign: "center" }} />
    </HomeStack.Navigator>
  )
}

const ListStack = createStackNavigator();
const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={List} options={{ title: "List", headerTitleAlign: "center" }} />
      <ListStack.Screen name="Details" component={Details} options={{ title: "Details", headerTitleAlign: "center" }} />
    </ListStack.Navigator>
  )
}

const ActionStack = createStackNavigator();
const ActionStackScreen = () => {
  return (
    <ActionStack.Navigator>
      <ActionStack.Screen name="Actions" component={Actions} options={{title:"Actions", headerTitleAlign:"center"}} />
      <ActionStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
    </ActionStack.Navigator>
  )
}

const tabBarOptions = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      // focus가 있으면 'home', 'home-outline'
      case 'Home':
        iconName = focused
          ? 'home'
          : 'home-outline';
        break;
      case 'List':
        iconName = focused
          ? 'list'
          : 'list-outline';
        break;
      case 'Actions':
        iconName = focused
          ? 'checkmark'
          : 'checkmark-outline';
        break;
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="List" component={ListStackScreen} />
            <Tab.Screen name="Actions" component={ActionStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

