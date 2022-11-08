import { Text, View } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";



export default function GateGuard() {
    return (
        <View>
            <Text>
                GateGuard Admin
            </Text>
            <View>
            <QRCodeScanner />
            </View>
        </View>
    )
}