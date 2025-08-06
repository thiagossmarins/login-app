import { View, Text, Alert } from "react-native";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { useState } from "react";
import { getUser, saveUser } from "../../../services/authStorage";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../styles/theme/color";
import { StyleSheet } from "react-native";

export function SignUp() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    async function handleSignUp() {
        try {
            if (!name || !surname || !email || !password) {
                return Alert.alert("Erro", "Preencha todos os campos");
            }

            await saveUser({ name, surname, email, password });
            const user = await getUser();

            console.log("Usuário salvo:", user);
            Alert.alert("Sucesso", "Cadastro realizado!");
            setName("");
            setSurname("");
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
            <View style={{flexDirection: "row", gap: "16", justifyContent: "center", alignItems: "center", width: "47%"}}>
                <Input placeholder="Nome" value={name} onChangeText={setName} />
                <Input placeholder="Sobrenome" value={surname} onChangeText={setSurname} />
            </View>
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
        backgroundColor: colors.secondary,
    },
})