import { View, Text, Pressable, Modal, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons'

const ImageShowModal = ({ images, children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [pp, setPp] = useState(require('../../../assets/default_user.png'));
    useEffect(() => {
        if (images?.pp?.toString().startsWith('http')) {
            setPp(images?.pp)
        }
    }, [images]);

    return (
        <>
            <Pressable onPress={() => setModalVisible(true)} style={{}}>
                {children}
            </Pressable>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.7)" }}>
                    <IonIcons name='close' size={24} color="white" style={{ padding: 20, textAlign: 'right' }} onPress={() => setModalVisible(false)} />
                    <Image source={pp.toString().startsWith('http') ? { uri: pp } : pp} style={{ width: "100%",height:"100%" }} />
                </View>
            </Modal>
        </>
    );
};

export default ImageShowModal;
