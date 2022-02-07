import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons'
import useAuth from '../../../contexts/useAuth';

const About = () => {
    const { user } = useAuth()
    return (
        <ScrollView style={{ paddingHorizontal: 30, marginBottom: 10 }}>
            <View style={{ borderBottomWidth: 1, borderColor: "gray" }}>
                <Text style={{ fontSize: 20, color: "black", marginVertical: 10 }}>Basic Contacts</Text>
                {user.phone ? <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='call' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>{user.phone}</Text>
                        <Text style={{ fontSize: 16 }}>Phone</Text>
                    </View>
                </View> : null}
                {user.email ? <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='mail' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>{user.email}</Text>
                        <Text style={{ fontSize: 16 }}>email</Text>
                    </View>
                </View> : null}
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: "gray" }}>
                <Text style={{ fontSize: 20, color: "black", marginVertical: 10 }}>Basic info</Text>
                {user.gender ? <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='person' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>{user.gender}</Text>
                        <Text style={{ fontSize: 16 }}>gender</Text>
                    </View>
                </View> : null}
                {user.interest ? <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='people' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>Female</Text>
                        <Text style={{ fontSize: 16 }}>interested in</Text>
                    </View>
                </View> : null}
                {user.relation ? <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='people-circle' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>{user.relation}</Text>
                        <Text style={{ fontSize: 16 }}>relationship</Text>
                    </View>
                </View> : null}
                {user.birthdate ? <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='calendar' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>{user.birthdate}</Text>
                        <Text style={{ fontSize: 16 }}>birthdate</Text>
                    </View>
                </View> : null}
                {user.languages ? <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='language' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <View style={{flexDirection:"row"}}>
                            {user.languages.map((language, index) => (<Text key={index} style={{ fontSize: 16,margin:2 }}>{language}</Text>))}
                        </View>
                        <Text style={{ fontSize: 16 }}>languages</Text>
                    </View>
                </View> : null}
                {user.religeon ? <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='eye' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>{user.religeon}</Text>
                        <Text style={{ fontSize: 16 }}>religeon</Text>
                    </View>
                </View> : null}
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: "gray" }}>
                <Text style={{ fontSize: 20, color: "black", marginVertical: 10 }}>Websites and social links</Text>
                {user.websites ? user.websites.map((website, index) => (<View key={index} style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='earth' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>{website.link}</Text>
                        <Text style={{ fontSize: 16 }}>{website.name}</Text>
                    </View>
                </View>)) : null}
            </View>
        </ScrollView>
    );
};

export default About;
