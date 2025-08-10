import { Input } from "../../atoms/Input"

interface Props {
    email: string,
    setEmail: (value: string) => void
    password: string,
    setPassword: (value: string) => void
}

export function EmailPasswordFields({email, setEmail, password, setPassword}: Props) {
    return (
        <>
            <Input placeholder="E-mail" value={email} onChangeText={setEmail} placeholderTextColor={"#000"} />
            <Input placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} placeholderTextColor={"#000"} />
        </>
    )
}