import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SignIn } from "../components/screens/SignIn";
import { Home } from "../components/screens/Home";
import { SignUp } from "../components/screens/SignUp";

const Stack = createNativeStackNavigator(); 

export function Routes() {
    return (
        <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
        </Stack.Navigator>
    )
}