import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useLayoutEffect, useContext } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
// import { FavoritesContext } from '../store/context/favorites-context';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

export default function MealDetailScreen({ navigation }) {
    // const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const route = useRoute();
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(item => item.id === mealId);

    const mealIsFavorite = favoriteMealIds.includes(mealId); 

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            // favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({id: mealId}));
        } else {
            // favoriteMealsCtx.addFavorite(mealId);
            dispatch(addFavorite({id: mealId}));
        };
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton 
                        icon={mealIsFavorite ? <Entypo name="star" size={24} color="white" /> : <Entypo name="star-outlined" size={24} color="white" />} 
                        onPress={changeFavoriteStatusHandler}    
                    />
                );
            }
        });
    }, [navigation, changeFavoriteStatusHandler])

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