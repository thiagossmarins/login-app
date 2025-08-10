import { useState } from "react";
import { getUser } from "../../../services/authStorage";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EmailPasswordFields } from "../../molecules/EmailPasswordFields";
import { Button } from "../../atoms/Button";
import { AuthLink } from "../../molecules/AuthLink";

export function SignInForm() {
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
        <>
            <EmailPasswordFields email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
            <Button title="Entrar" onPress={handleSignIn} />
            <AuthLink question="Não tem uma conta?" actionText="Cadastre-se" onPress={() => navigation.navigate("SignUp" as never)} />
        </>
    )
}