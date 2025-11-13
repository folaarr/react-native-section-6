import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter(item => item.categoryIds.includes(catId));
    const categoryTitle = CATEGORIES.find(item => item.id === catId).title;

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(item => item.id === catId).title;
        navigation.setOptions({title: categoryTitle});
    }, [catId, navigation]);

    function renderMealItem(itemData) {
        const mealItemProps = {
            title: itemData.title,
            imageUrl: itemData.imageUrl,
            duration: itemData.duration,
            complexity: itemData.complexity,
            affordability: itemData.affordability
        }

        return (
            <MealItem {...mealItemProps} />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals} 
                renderItem={itemData => renderMealItem(itemData.item)} 
                keyExtractor={item => item.id} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    }
});