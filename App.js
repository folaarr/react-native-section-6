import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

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
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="MealsCategories" 
            screenOptions={{
              contentStyle: styles.screen,
              headerTintColor: "white",
              headerStyle: {backgroundColor: "#e90"},
              headerTitleAlign: "center",
              headerTitleStyle: {fontFamily: "momo", fontSize: 22}, 
            }}
          >
            <Stack.Screen 
              name="MealsCategories" 
              component={CategoriesScreen} 
              options={{
                title: "All Categories",
              }}
            />
            <Stack.Screen 
              name="MealsOverview" 
              component={MealsOverviewScreen} 
              // options={({route, navigation}) => {
              //   const catId = route.params.categoryId
              //   return {
              //     title: catId
              //   }
              // }}  

            />
            <Stack.Screen 
              title="" 
              component={MealDetailScreen} 
            />
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "green"
    }
});
