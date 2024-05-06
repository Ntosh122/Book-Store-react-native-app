import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { BookDetail, Login } from "./screens";

import Tabs from "./navigation/tabs";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Login'}
      >
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* TABS */}
        <Stack.Screen name="Home" component={Tabs} />
        {/* SCREENS*/}
        <Stack.Screen name="BookDetail" component={BookDetail} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App