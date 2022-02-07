import { View, Text, TextInput, Button, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import useAuth from '../../contexts/useAuth'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Register = ({ navigation }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });
  const { registration, error, setError } = useAuth();
  const [secure, setSecure] = useState(true);
  const [status, setStatus] = useState(true);
  useEffect(() => {
    setError(null)
    if (form.email !== '' && form.password !== '' && form.name !== '' && form.phone) {
      setStatus(false)
    } else {
      setStatus(true)
    }
  }, [form.email, form.password]);

  useEffect(() => {
    setForm({
      name: "",
      email: "",
      password: "",
      phone: ""
    })
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 100 }}>
      <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 10 }}>Registration</Text>
      {error ? <Text style={{ fontSize: 12, color: "orange" }}>{error}</Text> : null}
      <TextInput style={{ borderBottomWidth: 1, borderBottomColor: "gray", fontSize: 16, marginBottom: 10 }} placeholder='Full Name' defaultValue={form.name} onChangeText={text => setForm({ ...form, name: text })} keyboardType='name-phone-pad' />
      <TextInput style={{ borderBottomWidth: 1, borderBottomColor: "gray", fontSize: 16, marginBottom: 10 }} placeholder='Email' defaultValue={form.email} onChangeText={text => setForm({ ...form, email: text })} keyboardType='email-address' />
      <TextInput style={{ borderBottomWidth: 1, borderBottomColor: "gray", fontSize: 16, marginBottom: 10 }} placeholder='Phone number' defaultValue={form.phone} onChangeText={text => setForm({ ...form, phone: text })} keyboardType='phone-pad'/>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "gray", marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingEnd: 10 }}>
        <TextInput defaultValue={form.password} onChangeText={text => setForm({ ...form, password: text })} style={{ fontSize: 16, flexGrow: 1 }} placeholder='Password' secureTextEntry={secure} keyboardType='default'/>
        <Ionicons name={secure ? 'eye-off-outline' : 'eye-outline'} style={{}} onPress={() => setSecure(!secure)} />
      </View>
      <Button disabled={status} title='Submit' onPress={() => registration(form)} />
      <View style={{ marginTop: 10, flexDirection: 'row' }}>
        <Text style={{ fontSize: 12 }}>already have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{ fontSize: 10 }}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
