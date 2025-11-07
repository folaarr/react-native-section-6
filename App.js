import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CATEGORIES } from './data/dummy-data';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        <SafeAreaView style={{flex: 1}}>
          {/* <View style={styles.category}></View> */}
          {/* backgroundColor: "black", */}
          {CATEGORIES.map((item, index) => (
            <View key={index} style={[styles.category, {backgroundColor: item.color}]}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            ))}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: { 
    width: 75,
    height: 75,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  title: {
    textAlign: "center"
  }
});
