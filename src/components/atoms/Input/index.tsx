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
        backgroundColor: colors.lightGray,
        color: colors.primary,
        marginBottom: 16
    }
})