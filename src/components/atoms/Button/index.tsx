import { TouchableOpacity, TouchableOpacityProps,  StyleSheet, Text} from "react-native";
import { colors } from "../../../styles/theme/color";

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
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        borderRadius: 8,
    },
    buttonText: {
        color: colors.secondary,
        fontWeight: "bold",
        textTransform: "uppercase"
    }
})