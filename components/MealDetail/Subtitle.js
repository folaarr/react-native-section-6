import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    subtitle: {
        color: "#baf5baff",
        fontSize: 18,
        fontFamily: "momo",
        margin: 4,
        marginHorizontal: 12,
        padding: 6,
        textAlign: "center",
        borderBottomColor: "#baf5baff",
        borderBottomWidth: 2
    }
});

export default function Subtitle({ children }) {
    return <Text style={styles.subtitle}>{children}</Text>
};