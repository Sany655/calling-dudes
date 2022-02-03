import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import React from 'react';

const Suggestion = () => {
    return (
        <View style={{ padding: 10, paddingBottom: 30 }}>
            <ScrollView style={{ marginVertical: 30 }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1].map((friend, id) => (
                    <Pressable key={id} style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, padding: 20, marginTop: 10 }} onPress={() => alert("goto friends")}>
                        <Image source={{ uri: "https://scontent.fcgp2-1.fna.fbcdn.net/v/t39.30808-6/p720x720/254221152_3209242459309678_9104189625065174454_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHanir1dRlCDsRRmGNq5RWHz3ZXHvjXe-HPdlce-Nd74REEU8YPaGOU6-T-W2vd2i8K6sTTgJw9XkYZ0ZY-H5Sj&_nc_ohc=P9HBTlIPkWUAX_yMOMM&tn=HQLqMJU1RvdxjoF7&_nc_ht=scontent.fcgp2-1.fna&oh=00_AT_GLnrCNr9wtzJ7fLxM620VY_E6CsDv-tgRPWmLSdkbSw&oe=61FD0E05" }} style={{ height: 50, width: 50, borderRadius: 100 }} />
                        <Text style={{ flexGrow: 1, fontSize: 20, paddingHorizontal: 20 }}>Lorem, ipsum dolor.</Text>
                        <View style={{ width: 15, height: 15, backgroundColor: "green", borderRadius: 100, borderWidth: 1, borderColor: "#000" }}></View>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
};

export default Suggestion;
