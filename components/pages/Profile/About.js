import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons'

const About = () => {
    return (
        <ScrollView style={{ paddingHorizontal: 30,marginBottom:10 }}>
            <View style={{borderBottomWidth:1,borderColor:"gray"}}>
                <Text style={{ fontSize: 20, color: "black", marginVertical: 10 }}>Basic Contacts</Text>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='people' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>Mohammad mazharul alam</Text>
                        <Text style={{ fontSize: 16 }}>name</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='call' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>+8801876626011</Text>
                        <Text style={{ fontSize: 16 }}>mobile</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='mail' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>mazharulalam26@gmail.com</Text>
                        <Text style={{ fontSize: 16 }}>email</Text>
                    </View>
                </View>
            </View>
            <View style={{borderBottomWidth:1,borderColor:"gray"}}>
                <Text style={{ fontSize: 20, color: "black", marginVertical: 10 }}>Websites and social links</Text>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='earth' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>http://portfolio-sany.web.app/</Text>
                        <Text style={{ fontSize: 16 }}>website</Text>
                    </View>
                </View>
            </View>
            <View style={{borderBottomWidth:1,borderColor:"gray"}}>
                <Text style={{ fontSize: 20, color: "black", marginVertical: 10 }}>Basic info</Text>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='person' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>Male</Text>
                        <Text style={{ fontSize: 16 }}>gender</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='people' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>Female</Text>
                        <Text style={{ fontSize: 16 }}>interested in</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='people-circle' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>Single</Text>
                        <Text style={{ fontSize: 16 }}>relationship</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='calendar' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>01-09-1998</Text>
                        <Text style={{ fontSize: 16 }}>birthdate</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='language' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>Bangla - English - Arabic - Urdu - Hindi</Text>
                        <Text style={{ fontSize: 16 }}>languages</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <IonIcons name='eye' size={24} style={{ paddingRight: 10 }} />
                    <View>
                        <Text style={{ fontSize: 16 }}>Islam</Text>
                        <Text style={{ fontSize: 16 }}>religion</Text>
                    </View>
                </View>
            </View>
            <View style={{borderBottomWidth:1,borderColor:"gray"}}>
                <Text style={{ fontSize: 20, color: "black", marginVertical: 10 }}>About Me</Text>
                <Text style={{fontSize:16}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, similique, dolores alias aliquam facilis debitis porro molestiae odit recusandae nostrum aut quia voluptas labore? Maiores, eius praesentium! Officia, praesentium modi.</Text>
            </View>
        </ScrollView>
    );
};

export default About;
