import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from "react-native";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
} from "@expo-google-fonts/raleway";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import AppScreen from "../screens/AppScreen";
import theme from "../styles/theme";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  AppScreen: undefined;
};

type LayoutsType = {
  screen: {
    width: number;
    height: number;
  };
};

type AnimationProgressType = {
  progress: {
    interpolate: (config: {
      inputRange: number[];
      outputRange: number[] | string[];
    }) => any;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

const Routes = () => {
  const [isReady, setIsReady] = useState(false);

  const loadResourcesAsync = async () => {
    try {
      // Pré-carregue fontes
      await Font.loadAsync({
        Raleway_400Regular,
        Raleway_500Medium,
        Raleway_600SemiBold,
        Raleway_700Bold,
        Raleway_800ExtraBold,
      });

      // Pré-carregue imagens
      await Asset.loadAsync([require("../assets/images/login.png")]);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    loadResourcesAsync();
  }, []);

  if (!isReady) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background,
        }}
      >
        <ActivityIndicator size="large" color={theme.colors.roxoPrincipal} />
      </View>
    );
  }

  // Transição de fade para todas as telas
  const customTransition = {
    cardStyleInterpolator: ({
      current,
    }: {
      current: AnimationProgressType;
    }) => {
      return {
        cardStyle: {
          opacity: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
        overlayStyle: {
          opacity: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.5],
          }),
        },
      };
    },
    headerStyleInterpolator: ({
      current,
    }: {
      current: AnimationProgressType;
    }) => {
      return {
        leftButtonStyle: {
          opacity: current.progress,
        },
        titleStyle: {
          opacity: current.progress,
        },
        rightButtonStyle: {
          opacity: current.progress,
        },
      };
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: "fade_from_bottom", // Usando a transição fade
          animationDuration: 300,
          ...customTransition,
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            animation: "fade",
            animationDuration: 400,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            animation: "fade",
            animationDuration: 300,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            animation: "fade",
            animationDuration: 300,
          }}
        />
        <Stack.Screen
          name="AppScreen"
          component={AppScreen}
          options={{
            animation: "fade",
            animationDuration: 350,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
