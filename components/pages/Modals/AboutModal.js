import { View, Text, Modal, Pressable, Alert, Button, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons'
import useAuth from '../../../contexts/useAuth';

const AboutModal = () => {
    const { user, updateProfile } = useAuth();
    const [modalVisible, setModalVisible] = useState(false);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        birthdate: "",
        gender: "",
        interest: "",
        relationship: "",
        languages: [],
        language: "",
        religeon: "",
        websites: [],
        website: {
            name: "",
            link: ""
        }
    });

    useEffect(() => {
        setForm({
            name: user.name?user.name:"",
            phone: user.phone?user.phone:"",
            birthdate: user.birthdate?user.birthdate:"",
            gender: user.gender?user.gender:"",
            interest: user.interest?user.interest:"",
            relationship: user.relationship?user.relationship:"",
            languages: user.languages?user.languages:[],
            language: "",
            religeon: user.religeon?user.religeon:"",
            websites: user.websites?user.websites:[],
            website: {
                name: "",
                link: ""
            }
        })
    }, [])

    return (
        <>
            <Button title='edit profile' onPress={() => setModalVisible(true)} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            // onRequestClose={() => {
            //     Alert.alert("Modal has been closed.");
            //     setModalVisible(!modalVisible);
            // }}
            >
                <ScrollView contentContainerStyle={{ backgroundColor: "rgb(255,255,255)", flex: 1, padding: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 20 }}>About</Text>
                        <IonIcons name='close' size={24} onPress={() => setModalVisible(!modalVisible)} />
                    </View>
                    <TextInput onChangeText={text=>setForm({...form,name:text})} style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 5 }} placeholder='Name' defaultValue={form.name} />
                    <TextInput onChangeText={text=>setForm({...form,phone:text})} defaultValue={form.phone} style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 5 }} placeholder='Phone' />
                    <TextInput onChangeText={text=>setForm({...form,birthdate:text})} defaultValue={form.birthdate} style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 5 }} placeholder='Birth Daate' />
                    <TextInput onChangeText={text=>setForm({...form,gender:text})} defaultValue={form.gender} style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 5 }} placeholder='Gender' />
                    <TextInput onChangeText={text=>setForm({...form,interest:text})} defaultValue={form.interest} style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 5 }} placeholder='Interest' />
                    <TextInput onChangeText={text=>setForm({...form,relationship:text})} defaultValue={form.relationship} style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 5 }} placeholder='Relationship Status' />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 5 }}>
                        <TextInput onChangeText={text => setForm({ ...form, language: text })} defaultValue={form.language} placeholder='Languages' style={{ flexGrow: 1 }} />
                        <IonIcons name='add' size={24} onPress={() => { setForm({ ...form, languages: [...form.languages, form.language], language: "" }) }} />
                    </View>
                    {form.languages.map((language, index) => (
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} key={index}>
                            <Text style={{ fontSize: 16 }}>{language}</Text>
                            <IonIcons name='trash' onPress={() => setForm({ ...form, languages: form.languages.filter(lang => lang !== language) })} size={24} color={"orange"} />
                        </View>
                    ))}
                    <TextInput onChangeText={text=>setForm({...form,religeon:text})} defaultValue={form.religeon} style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 5 }} placeholder='Religeon' />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TextInput onChangeText={text => setForm({ ...form, website: { ...form.website, name: text } })} defaultValue={form.website.name} placeholder='Website Name' style={{ flexGrow: 0.4, fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 5 }} />
                        <TextInput onChangeText={text => setForm({ ...form, website: { ...form.website, link: text } })} defaultValue={form.website.link} placeholder='Website Link' style={{ flexGrow: 0.4, fontSize: 16, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 5 }} />
                        <IonIcons name='add' size={24} onPress={() => setForm({ ...form, websites: [...form.websites, { name: form.website.name, link: form.website.link }], website: { name: "", link: "" } })} />
                    </View>
                    {form.websites.map((website, index) => (
                        <View key={index} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 2 }}>
                            <Text style={{ fontSize: 16 }}>{website.name} : {website.link}</Text>
                            <IonIcons name='trash' size={24} color={"orange"} />
                        </View>
                    ))}
                    <Button title='Save' onPress={() => {setModalVisible(false);updateProfile(form);}} />
                    <Button title='Cancel' onPress={() => {setModalVisible(false)}} color={"red"}/>
                </ScrollView>
            </Modal>
        </>
    );
};

export default AboutModal;
