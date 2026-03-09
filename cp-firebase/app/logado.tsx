import { useRouter } from 'expo-router'
import { SetStateAction, useEffect, useState } from 'react'
import { TextInput, View, Text } from 'react-native'
import { auth } from "@/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Logado() {
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
        } catch (error: any) {
            alert(`Usuário NÃO logado`);
            console.log(error);
        }
    };

    return(
        <View>
            <Text>Usuário Logado!</Text>
            <Text>Email: ${email}</Text>
        </View>
    )
}