import { auth } from "@/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = async () => {
        try {
            const credential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            alert(`Usuário logado: ${email}`);
            const token = await credential.user.getIdToken();
            console.log(token);
        } catch (error: any) {
            alert(`Usuário NÃO logado`);
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Digite seu E-mail"
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Digite sua senha"
                onChangeText={(text) => setPassword(text)}
            />
            <Button title="Login" onPress={login} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
});