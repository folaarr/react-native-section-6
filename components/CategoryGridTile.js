import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import { shadow } from '../styles/shadow';

export default function CategoryGridTile({ title, color, onPress }) {
    // const navigation = useNavigation();
    return (
        <View style={[styles.gridItem, shadow]}>
            <Pressable 
                style={
                    ({pressed}) => Platform.select({
                        ios: pressed ? [styles.button, styles.buttonPressed] : styles.button, 
                        android: styles.button
                    })
                } 
                android_ripple={{color: "white", foreground: true}} 
                onPress={onPress} 
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
        borderRadius: 8,
        backgroundColor: "white",
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