import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesContextProvider from './store/context/favorites-context';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
      <Drawer.Navigator 
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {backgroundColor : "#e90"},
          headerTintColor: "white",
          sceneStyle: styles.screen,
          drawerContentStyle: {backgroundColor: "green"},
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "green",
          drawerActiveBackgroundColor: "lightgreen"
        }}
      >
        <Drawer.Screen 
          name="Categories" 
          component={CategoriesScreen} 
          options={{
            title: "All categories"
          }}
        />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
      </Drawer.Navigator>
    );
};

export default function App() {
    const [loaded, error] = useFonts({
    'momo': require('./fonts/MomoTrustDisplay-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
        <FavoritesContextProvider>
          <NavigationContainer>
            <Stack.Navigator 
              initialRouteName="DrawerScreen" 
              screenOptions={{
                contentStyle: styles.screen,
                headerTintColor: "white",
                headerStyle: {backgroundColor: "#e90"},
                headerTitleAlign: "center",
                headerTitleStyle: {fontFamily: "momo", fontSize: 22}, 
                animation: "slide_from_right",
              }}
            >
              <Stack.Screen 
                name="DrawerScreen" 
                component={DrawerNavigator} 
                options={{
                  title: "All categories",
                  headerShown: false,
                }}
              />
              <Stack.Screen 
                name="MealsOverview" 
                component={MealsOverviewScreen} 
              />
              <Stack.Screen 
                name="MealDetail" 
                component={MealDetailScreen} 
                options={{
                  title: "About the Meal"
                }} 
              />
            </Stack.Navigator>
          </NavigationContainer>
        </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "green"
    }, 
    header: {
      color: "white"
    }
});
