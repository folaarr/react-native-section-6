import { FlatList, StyleSheet, View } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id
            });
        };

        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
    };
    return (
        <FlatList 
        data={CATEGORIES}
        renderItem={itemData => renderCategoryItem(itemData)}
        keyExtractor={(item, index) => item.id} 
        numColumns={2} 
        />
    );
};

const styles = StyleSheet.create({ 

});

export default CategoriesScreen;