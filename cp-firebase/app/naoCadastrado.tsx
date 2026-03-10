import { View, Text, Button } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
 
export default function NaoCadastrado() {
    const { error } = useLocalSearchParams()
 
    return(
        <View>
            <Text>Usuário não cadastrado!</Text>
            <Text>Erro: {error}</Text>
            <Button title='Voltar' onPress={ () => { router.back() } }></Button>
        </View>
    )
}