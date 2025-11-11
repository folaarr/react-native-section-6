import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { MEALS } from '../data/dummy-data';

export default function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter(item => item.categoryIds.includes(catId));

    function renderMealItem(itemData) {
        return <Text>{itemData.title}</Text>
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