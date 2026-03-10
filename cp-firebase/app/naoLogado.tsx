import { View, Text, Button } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
 
export default function NaoLogado() {
    const { error } = useLocalSearchParams()
 
    return(
        <View>
            <Text>Usuário não logado!</Text>
            <Text>Erro: {error}</Text>
            <Button title='Voltar' onPress={ () => { router.back() } }></Button>
        </View>
    )
}