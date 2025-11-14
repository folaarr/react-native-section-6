import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#baf5baff"
    },
    itemText: {
        color: "green",
        textAlign: "center"
    }
});

export default function List({ data }) {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <View key={index} style={styles.listItem}>
                        <Text style={styles.itemText}>{item}</Text>
                    </View>
                );
            })}
        </>
    );
};