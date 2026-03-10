import { View, Text, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function Cadastrado() {

    const { email } = useLocalSearchParams()

    return(
        <View style={styles.container}>

            <Text style={styles.title}>Usuário cadastrado!</Text>

            <Text style={styles.label}>Email:</Text>
            <Text style={styles.email}>{email}</Text>

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
        color: "#1976d2"
    },

    label: {
        fontSize: 16,
        color: "#555"
    },

    email: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 5,
        color: "#333"
    }

})