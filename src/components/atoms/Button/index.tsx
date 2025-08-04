import { TouchableOpacity, TouchableOpacityProps,  StyleSheet, Text} from "react-native";

interface ButtonProps extends TouchableOpacityProps{
    title: string;
    onPress: () => void;
}

export function Button({title, onPress}:ButtonProps){
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        borderRadius: 8,
    },
    buttonText: {
        color: "#444",
        fontWeight: "bold",
    }
})