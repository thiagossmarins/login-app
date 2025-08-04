import { View, Text, Alert } from "react-native";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { useState } from "react";
import { getUser, saveUser } from "../../../services/authStorage";

export function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        } catch (error) {
            console.error("Erro no cadastro:", error);
            Alert.alert("Erro", "Algo deu errado no cadastro.");
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
            <Input placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
            <Button title="Criar sua conta" onPress={handleSignUp} />
        </View>
    )
}