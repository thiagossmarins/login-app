import { View, Text, Alert } from "react-native";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { useState } from "react";
import { getUser, saveUser } from "../../../services/authStorage";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../styles/theme/color";
import { StyleSheet } from "react-native";

export function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    async function handleSignUp() {
        try {
            if (!email || !password) {
                return Alert.alert("Erro", "Preencha todos os campos");
            }

            await saveUser({ email, password });
            const user = await getUser();

            console.log("Usuário salvo:", user);
            Alert.alert("Sucesso", "Cadastro realizado!");
            setEmail("");
            setPassword("");

            navigation.navigate("SignIn" as never)
        } catch (error) {
            console.error("Erro no cadastro:", error);
            Alert.alert("Erro", "Algo deu errado no cadastro.");
        }
    }

    return (
        <View style={styles.container}>
            <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
            <Input placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
            <Button title="Cadastre-se" onPress={handleSignUp} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: colors.primary,
    }
})