import { View, ViewProps } from "react-native"
import { StyleSheet } from "react-native"
import { colors } from "../../../styles/theme/color"

export function Container({children, style, ...rest}: ViewProps) {
    return (
        <View style={[styles.container, style]} {...rest}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondary,
    },
})