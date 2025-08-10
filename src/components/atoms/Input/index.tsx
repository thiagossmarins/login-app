import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { colors } from "../../../styles/theme/color";

export function Input(props: TextInputProps) {
    return (
        <TextInput style={styles.input} {...props} />
    );
}

const styles = StyleSheet.create({
    input: {
        width: "80%",
        padding: 12,
        borderRadius: 8,
        backgroundColor: "transparent",
        borderColor: colors.primary,
        borderWidth: 1,
        color: colors.primary,
        marginBottom: 16
    }
})