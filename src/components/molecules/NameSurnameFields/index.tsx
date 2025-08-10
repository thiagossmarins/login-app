import { View } from "react-native"
import { Input } from "../../atoms/Input"

interface Props {
    name: string,
    setName: (value: string) => void
    surname: string,
    setSurname: (value: string) => void,
}

export function NameSurnameFields({ name, setName, surname, setSurname }: Props) {
    return (
        <View style={{ flexDirection: "row", gap: "16", justifyContent: "center", alignItems: "center", width: "47%" }}>
            <Input placeholder="Nome" value={name} onChangeText={setName} placeholderTextColor={"#000"} />
            <Input placeholder="Sobrenome" value={surname} onChangeText={setSurname} placeholderTextColor={"#000"} />
        </View>
    )
}