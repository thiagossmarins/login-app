import { TextInput, TextInputProps, StyleSheet } from "react-native";

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
        backgroundColor: "#e1e1e1",
        color: "#333",
        marginBottom: 16
    }
})