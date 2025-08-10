import Toast from "react-native-toast-message"

type ToastAlertProps =  "success" | "error"

export function ToastAlert(type: ToastAlertProps, title: string, message: string) {
    Toast.show({
        type,
        text1: title,
        text2: message,
        position: "top"
    })
}