import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import { SignUp } from "../screens/SignUp";

const Stack = createNativeStackNavigator(); 

export function Routes() {
    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
        </Stack.Navigator>
    )
}