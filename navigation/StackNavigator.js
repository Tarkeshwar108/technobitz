import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Apps from "../screens/Apps";
import Arcade from "../screens/Arcade";
import Games from "../screens/Games";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Today from "../screens/Today";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#9AC4F8",
           
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
          headerTitleAlign:'center'

        }}
  >
       <Stack.Screen name="Today" component={Today}  />
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="Apps" component={Apps} />
        <Stack.Screen name="Arcade" component={Arcade} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    );
  }


export { MainStackNavigator };