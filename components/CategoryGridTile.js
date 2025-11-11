import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

export default function CategoryGridTile({ title, color, onPress }) {
    // const navigation = useNavigation();
    return (
        <View style={styles.gridItem}>
            <Pressable 
            style={
                ({pressed}) => Platform.select({
                    ios: pressed ? [styles.button, styles.buttonPressed] : styles.button, 
                    android: styles.button
                })
            } 
            android_ripple={{color: "white", foreground: true}} 
            onPress={onPress} 
            // onPress={() => navigation.navigate("MealsOverview")}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        elevation: 8,
        borderRadius: 8,
        backgroundColor: "white",
        shadowRadius: 8,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "black",
        overflow: Platform.select({android: "hidden"})
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.33
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        // fontWeight: "bold",
        fontSize: 18,
        fontFamily: "momo"
    }
});