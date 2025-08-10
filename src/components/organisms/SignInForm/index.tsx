import { useState } from "react";
import { getUser } from "../../../services/authStorage";
import { useNavigation } from "@react-navigation/native";
import { EmailPasswordFields } from "../../molecules/EmailPasswordFields";
import { Button } from "../../atoms/Button";
import { AuthLink } from "../../molecules/AuthLink";
import { ToastAlert } from "../../feedback/ToastAlert";

export function SignInForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigation();

    async function handleSignIn() {
        if (!email || !password) {
            return ToastAlert("error", "Erro", "Preencha todos os campos")
        }

        const user = await getUser();

        if (!user) {
            return ToastAlert("error", "Erro", "Nenum usuário encontrado");
        }

        if (user.email === email && user.password === password) {
            ToastAlert("success", "Sucesso", "Login realizado com sucesso")
            navigation.navigate("Home" as never);
        } else {
            ToastAlert("error", "Erro", "E-mail ou senha incorretos");
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