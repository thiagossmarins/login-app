import AsyncStorage from "@react-native-async-storage/async-storage";

// é a "chave" usada para armazenar os dados
const USER_KEY = "@login-app:user";

// salva um objeto com email e senha no AsyncStorage
export async function saveUser(user: { name: string, surname: string, email: string; password: string }) {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user))
}

// busca e retorna os dados salvos
export async function getUser() {
    const data = await AsyncStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
}