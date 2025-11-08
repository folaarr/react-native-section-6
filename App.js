import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CATEGORIES } from './data/dummy-data';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <CategoriesScreen />
  );
}

const styles = StyleSheet.create({
  
});
