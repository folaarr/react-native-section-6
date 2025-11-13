import { Text, View, Pressable, Image, StyleSheet } from "react-native";
import { Platform } from "react-native";

import { shadow } from "../styles/shadow";

export default function MealItem({ 
    title, 
    imageUrl, 
    duration, 
    complexity, 
    affordability 
}) {

    return (
        <View style={[styles.mealItem, shadow]}>
            <Pressable 
                android_ripple={{color: "white", foreground: true}}
                style={({pressed}) => pressed ? Platform.select({ios: styles.pressed}) : null} 
            >
                <View>
                    <Image style={styles.image} source={{uri: imageUrl}} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration} Minutes</Text>
                    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                </View>
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
    details: {
        flexDirection: "row", 
        alignItems: "center",
        padding: 8,
        justifyContent: "center"
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12 
    }
});