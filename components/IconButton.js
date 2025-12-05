import { StyleSheet, Pressable, View, Text } from "react-native";

export default function IconButton({icon, color, onPress}) {
    return (
        <Pressable 
            style={({pressed}) => pressed ? {opacity: 0.5} : null} 
            onPress={onPress} 
        >
            {icon}
        </Pressable>
    );
};

const styles = StyleSheet.create({

});