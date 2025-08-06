import { useState } from "react";
import { View, Text, Alert } from "react-native";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { getUser } from "../../../services/authStorage";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigation();
    
    async function handleSignIn() {
        if (!email || !password) {
            return Alert.alert("Erro", "Preencha todos os campos");
        }

        const user = await getUser();

        if (!user) {
            return Alert.alert("Erro", "Nenum usuário encontrado");
        }

        if (user.email === email && user.password === password) {
            navigation.navigate("Home" as never);
        } else {
            Alert.alert("Erro", "E-mail ou senha incorretos");
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Input placeholder="email" value={email} onChangeText={setEmail} />
            <Input placeholder="senha" value={password} secureTextEntry onChangeText={setPassword} />
            <Button title="Entrar" onPress={handleSignIn} />
        </View>
    )
}