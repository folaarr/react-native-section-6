import { Text, View, Pressable, Image, StyleSheet } from "react-native";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { shadow } from "../styles/shadow";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

export default function MealItem({ 
    id,
    title, 
    imageUrl, 
    duration, 
    complexity, 
    affordability 
}) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate("MealDetail", {
            mealId: id,
            imgUrl: imageUrl,
            mealTitle: title
        });
    };

    return (
        <View style={[styles.mealItem, shadow]}>
            <Pressable 
                android_ripple={{color: "white", foreground: true}}
                style={({pressed}) => pressed ? Platform.select({ios: styles.pressed}) : null} 
                onPress={selectMealItemHandler}
            >
                <View>
                    <Image style={styles.image} source={{uri: imageUrl}} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        // overflow: "hidden",
        backgroundColor: "white", 
    },
    pressed: {
        opacity: 0.5
    },
    image: {
        width: '100%', 
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    }, 
    title: {
        fontFamily: "momo",
        textAlign: "center",
        fontSize: 18,
        margin: 8
    },
});