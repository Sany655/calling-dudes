import { View, Text, Modal, Pressable, Alert, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';

const AboutModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
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
                <ScrollView style={{  }} contentContainerStyle={{ backgroundColor: "rgba(255,255,255,0.85)",flex: 1, alignItems:"center",padding:10 }}>
                    <Text style={{fontSize:20}}>Basic info</Text>
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text>Hide Modal</Text>
                    </Pressable>
                </ScrollView>
            </Modal>
        </>
    );
};

export default AboutModal;
