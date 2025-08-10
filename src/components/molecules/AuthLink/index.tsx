import { View, Text, TouchableOpacity } from "react-native"

interface Props {
    question: string,
    actionText: string,
    onPress: () => void;
}

export function AuthLink({question, actionText, onPress}: Props) {
    return (
        <View style={{ marginTop: 16, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <Text>{question} </Text>
            <TouchableOpacity>
                <Text
                    onPress={onPress}
                    style={{ color: "#0D3FBD", fontWeight: "600", textDecorationLine: "underline" }}>
                    {actionText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}