import { View, Text, Modal, ScrollView, Button } from 'react-native';
import React, { useState } from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons'
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
import useAuth from '../../../contexts/useAuth';

const UploadProfilePicModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { updateProfilePic } = useAuth();

    function uploadFromCamera() {
        launchCamera({mediaType:"photo"}).then((image)=>{
            updateProfilePic(image)
        }).catch(error=>console.log(error)).finally(()=>{
            setModalVisible(false)
        })
    }

    function uploadFromGallery() {
        launchImageLibrary({mediaType:"photo"}).then((image)=>{
            updateProfilePic(image)
        }).catch(error=>console.log(error)).finally(()=>{
            setModalVisible(false)
        })
    }


    return (
        <>
            <IonIcons style={{ position: "absolute", bottom: 0, right: 0, backgroundColor: "#f0f0f0", borderRadius: 100, padding: 5, borderColor: "gray", borderWidth: 1 }} name='camera' color="#000" size={25} onPress={() => setModalVisible(true)} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            // onRequestClose={() => {
            //     Alert.alert("Modal has been closed.");
            //     setModalVisible(!modalVisible);
            // }}
            >
                <ScrollView contentContainerStyle={{flex:1,backgroundColor:"white",padding:10,justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:20}}>Upload Profile Pic</Text>
                        <IonIcons name='close' size={24} onPress={()=>setModalVisible(false)}/>
                    </View>
                    <View style={{flexGrow:0.5}}>
                        <Button onPress={uploadFromGallery} title='Upload from gallery'/>
                        <View style={{margin:10}}></View>
                        <Button onPress={uploadFromCamera} title='Capture from camera'/>
                    </View>
                </ScrollView>
            </Modal>
        </>
    );
};

export default UploadProfilePicModal;
