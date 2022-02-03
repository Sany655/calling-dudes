import { View, Text, ScrollView, TextInput, Pressable, Dimensions } from 'react-native';
import React, { useState } from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons'

const Chat = ({ route }) => {
    const [text, setText] = useState();
    return (
        <View>
            <ScrollView style={{ padding: 10,marginBottom:70 }}>
                {[...Array(20)].map((a, i) => (
                    <View key={i}>
                        <View style={{ marginRight: "auto", flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ backgroundColor: "white", paddingVertical: 5, paddingHorizontal: 15, borderRadius: 15, fontSize: 16, color: "black" }}>this is a chat {i}</Text>
                            <Text style={{ fontSize: 12, marginLeft: 10, color: "black" }}>{new Date().toISOString()}</Text>
                        </View>
                        <View style={{ marginLeft: "auto", flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: 12, marginRight: 10, color: "black" }}>{new Date().toISOString()}</Text>
                            <Text style={{ backgroundColor: "#2196F3", paddingVertical: 5, paddingHorizontal: 15, borderRadius: 15, fontSize: 16, color: "white" }}>this is a chat {i}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={{ flexDirection: "row", padding: 10, alignItems: "center", backgroundColor: "white",position:"absolute",bottom:0 }}>
                <TextInput multiline onChangeText={txt=>setText(txt)} placeholder='Write message' style={{ fontSize: 16, flexGrow: 1,flexShrink:1, color: "black" }} />
                <IonIcons name='send' size={24} onPress={()=>alert(text)} />
            </View>
        </View>
    );
};

export default Chat;
