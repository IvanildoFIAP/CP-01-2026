import { auth } from "@/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import { useRouter } from 'expo-router'
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Login() {

    const router = useRouter()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            const credential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const token = await credential.user.getIdToken();
            console.log(token);

            router.push({
                pathname: './logado',
                params: { email }
            })

        } catch (error: any) {

            console.log(error);

            router.push({
                pathname: './naoLogado',
                params: { error }
            })

        }
    };

    const signUp = async () => {

        try {

            const credential = await createUserWithEmailAndPassword(auth, email, password)

            router.push({
                pathname: './cadastrado',
                params: { email }
            })

            const token = await credential.user.getIdToken()
            console.log(token)

        } catch (error: any) {

            console.log(error)

            router.push({
                pathname: './naoCadastrado',
                params: { error }
            })

        }

    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Login Firebase</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu E-mail"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />

            <View style={styles.buttonContainer}>
                <Button title="Login" onPress={login} />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Cadastrar" onPress={signUp} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        padding: 25,
        backgroundColor: "#f5f5f5",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
        color: "#333"
    },

    input: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#ddd"
    },

    buttonContainer: {
        marginTop: 8
    }

});