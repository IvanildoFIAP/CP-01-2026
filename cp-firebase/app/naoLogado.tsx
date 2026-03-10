import { View, Text, Button, StyleSheet } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
 
export default function NaoLogado() {

    const { error } = useLocalSearchParams()
 
    return(
        <View style={styles.container}>

            <Text style={styles.title}>Usuário não logado!</Text>

            <Text style={styles.label}>Erro:</Text>

            <Text style={styles.errorBox}>{error}</Text>

            <View style={styles.button}>
                <Button 
                    title='Voltar' 
                    onPress={() => { router.back() }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
        backgroundColor: "#f5f5f5"
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#d32f2f"
    },

    label: {
        fontSize: 16,
        color: "#555"
    },

    errorBox: {
        fontSize: 16,
        marginTop: 8,
        marginBottom: 20,
        padding: 12,
        backgroundColor: "#fdecea",
        borderRadius: 8,
        color: "#b71c1c",
        textAlign: "center"
    },

    button: {
        marginTop: 10
    }

})