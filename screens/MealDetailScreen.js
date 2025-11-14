import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { use } from 'react';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

export default function MealDetailScreen() {
    const route = useRoute();
    const params = route.params;
    const selectedMeal = MEALS.find(item => item.id === params.mealId);

    return (
        <View>
            <ScrollView>
                <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
                <Text style={styles.title}>{selectedMeal.title}</Text>
                <MealDetails 
                    duration={selectedMeal.duration} 
                    complexity={selectedMeal.complexity} 
                    affordability={selectedMeal.affordability} 
                    textStyle={styles.detailText}
                />
                <View style={styles.listOuterContainer}>
                    <View style={styles.listContainer}>
                        <Subtitle>Ingredients</Subtitle>
                        <List data={selectedMeal.ingredients} />
                        <Subtitle>Steps</Subtitle>
                        <List data={selectedMeal.steps} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontFamily: "momo",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white"
    },
    detailText: {
        color: "white"
    },
    listOuterContainer: {
        alignItems: "center",
        marginBottom: 80
    },
    listContainer: {
        width: "80%",
    }
});