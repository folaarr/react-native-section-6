import { View, StyleSheet, FlatList } from "react-native";

import MealItem from "./MealItem";

export default function MealsList({ items }) {
    function renderMealItem(itemData) {
        const mealItemProps = {
            id: itemData.id,
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
                data={items} 
                renderItem={itemData => renderMealItem(itemData.item)} 
                keyExtractor={item => item.id} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    }
});