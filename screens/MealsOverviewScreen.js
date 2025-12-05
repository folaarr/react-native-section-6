import { useLayoutEffect } from 'react';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../MealsList/MealsList';

export default function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter(item => item.categoryIds.includes(catId));
    const categoryTitle = CATEGORIES.find(item => item.id === catId).title;

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(item => item.id === catId).title;
        navigation.setOptions({title: categoryTitle});
    }, [catId, navigation]);

    return <MealsList items={displayedMeals} />;
}
