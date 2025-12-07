import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext, useEffect } from "react";
import { useSelector } from 'react-redux';

import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../MealsList/MealsList";

export default function FavoritesScreen () {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    // const favoriteIds = favoriteMealsCtx.ids;

    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

    return (
        favoriteMealIds.length !== 0 ? <MealsList items={MEALS.filter(item => favoriteMealIds.includes(item.id))} /> : <View style={styles.container}><Text style={styles.text}>You have no favorite meals yet. Start adding some!</Text></View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white"
    }
});