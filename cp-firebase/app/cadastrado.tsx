import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
 
export default function Cadastrado() {
    const { email } = useLocalSearchParams()
 
    return(
        <View>
            <Text>Usuário cadastrado!</Text>
            <Text>Email: {email}</Text>
        </View>
    )
}