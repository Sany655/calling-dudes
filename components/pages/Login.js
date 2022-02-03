import { View, Text, Button, TextInput, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import useAuth from '../../contexts/useAuth';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
    const { login, error, setError } = useAuth();
    const [form, setForm] = useState({ email: "", password: "" });
    const [secure, setSecure] = useState(true);
    const [status, setStatus] = useState(true);

    useEffect(() => {
        setForm({ email: "", password: "" })
    }, []);

    useEffect(() => {
        setError(null)
        if (form.email !== '' && form.password !== '') {
            setStatus(false)
        } else {
            setStatus(true)
        }
    }, [form.email, form.password]);


    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 100 }}>
            <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 10 }}>Login</Text>
            <Text style={{ fontSize: 12, color: "orange", marginBottom: 10 }}>{error}</Text>
            <TextInput defaultValue={form.email} onChangeText={text => setForm({ ...form, email: text })} style={{ borderBottomWidth: 1, borderBottomColor: "gray", fontSize: 16, marginBottom: 10 }} placeholder='Email' />
            <View style={{ borderBottomWidth: 1, borderBottomColor: "gray", marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingEnd: 10 }}>
                <TextInput defaultValue={form.password} onChangeText={text => setForm({ ...form, password: text })} style={{ fontSize: 16, flexGrow: 1 }} placeholder='Password' secureTextEntry={secure} />
                <Ionicons name={secure ? 'eye-off-outline' : 'eye-outline'} style={{}} onPress={() => setSecure(!secure)} />
            </View>
            <Button title='Login' onPress={() => login(form)} disabled={status} />
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                <Text style={{ fontSize: 10 }}>don't have an account? </Text>
                <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={{ fontSize: 10 }}>Register</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;
