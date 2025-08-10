import { useState } from "react";
import { Alert } from "react-native";
import { saveUser, getUser } from "../../../services/authStorage";
import { NameSurnameFields } from "../../molecules/NameSurnameFields";
import { EmailPasswordFields } from "../../molecules/EmailPasswordFields";
import { Button } from "../../atoms/Button";
import { AuthLink } from "../../molecules/AuthLink";
import { useNavigation } from "@react-navigation/native";

export function SignUpForm() {
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
        <>
            <NameSurnameFields name={name} setName={setName} surname={surname} setSurname={setSurname} />
            <EmailPasswordFields email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
            <Button title="Cadastre-se" onPress={handleSignUp} />
            <AuthLink question="Já tem uma conta?" actionText="Entrar" onPress={() => navigation.navigate("SignIn" as never)} />
        </>
    )
}