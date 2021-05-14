import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainStackNavigator } from "./StackNavigator";
import Apps from "../screens/Apps";
import Arcade from "../screens/Arcade";
import Games from "../screens/Games";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Today from "../screens/Today";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Today') {
            iconName = focused
              ? 'ios-newspaper'
              : 'ios-newspaper-sharp';
          } 
          else if (route.name === 'Games') {
            iconName = focused 
            ? 'ios-rocket'
             : 'ios-rocket-sharp';
          }
          else if (route.name === 'Apps') {
            iconName = focused 
            ? 'ios-layers'
             : 'ios-layers-sharp';
          }
          else if (route.name === 'Arcade') {
            iconName = focused 
            ? 'ios-archive'
             : 'ios-archive-sharp';
          }
          else if (route.name === 'Search') {
            iconName = focused 
            ? 'ios-search'
             : 'ios-search-sharp';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        
      }}
    
    >
      <Tab.Screen name="Today" component={MainStackNavigator} />
      <Tab.Screen name="Games" component={Games} />
      <Tab.Screen name="Apps" component={Apps} />
      <Tab.Screen name="Arcade" component={Arcade} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;