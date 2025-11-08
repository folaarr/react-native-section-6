import { FlatList, StyleSheet, View } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
};

function CategoriesScreen() {
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