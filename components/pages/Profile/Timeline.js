import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons'

const Timeline = () => {
  return (
    <ScrollView style={{paddingHorizontal:20,}}>
      <View style={{ borderWidth: 1, borderColor: "gray", marginVertical: 10,marginTop:10 }}>
        <View style={{ flexDirection: "row", alignItems: "stretch", padding: 20, paddingBottom: 10 }}>
          <Image source={{ uri: "https://scontent.fcgp2-1.fna.fbcdn.net/v/t1.6435-1/c0.20.200.200a/p200x200/48392103_2324506877783245_5235417395538952192_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHsg0pIUo1CvkX7FZ5G6GCBZFwZW7xZOiBkXBlbvFk6IPh2evo4at5b0_8YjpgArKIJhEyx07Mb2F4mnzagukoP&_nc_ohc=1nQaqUevPXMAX9aaoCz&tn=HQLqMJU1RvdxjoF7&_nc_ht=scontent.fcgp2-1.fna&oh=00_AT-QlagAwEIdK5_uwTzJrEkGA1FsKVr3loO9xBT4nygIqg&oe=621C670E" }} style={{ height: 40, width: 40, borderRadius: 100, marginRight: 20 }} />
          <Text style={{ fontSize: 20, flexGrow: 1 }}>Mohammad mazharul alam</Text>
          <IonIcons name='ellipsis-vertical' size={24} onPress={() => alert("elipsis clicked")} />
        </View>
        <Image source={{ uri: "https://scontent.fcgp2-1.fna.fbcdn.net/v/t39.30808-6/p720x720/254221152_3209242459309678_9104189625065174454_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHanir1dRlCDsRRmGNq5RWHz3ZXHvjXe-HPdlce-Nd74REEU8YPaGOU6-T-W2vd2i8K6sTTgJw9XkYZ0ZY-H5Sj&_nc_ohc=P9HBTlIPkWUAX_yMOMM&tn=HQLqMJU1RvdxjoF7&_nc_ht=scontent.fcgp2-1.fna&oh=00_AT_GLnrCNr9wtzJ7fLxM620VY_E6CsDv-tgRPWmLSdkbSw&oe=61FD0E05" }} style={{ height: 200 }} />
        <Text style={{ fontSize: 16, padding: 10 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero architecto, culpa, porro consequuntur ea dolores odio possimus asperiores dicta, distinctio ipsum! Laborum dignissimos saepe laudantium reiciendis expedita omnis id at!</Text>
        <View style={{ flexDirection: "row", flex: 1, padding: 10, justifyContent: "space-between" }}>
          <Pressable style={{ flexGrow: 0.49, borderWidth: 1, borderColor: "gray" }} onPress={() => alert("liked")}>
            <Text style={{ textAlign: "center", padding: 5 }}><IonIcons name='thumbs-up' /> Like</Text>
          </Pressable>
          <Pressable style={{ flexGrow: 0.49, borderWidth: 1, borderColor: "gray" }} onPress={() => alert("comment")}>
            <Text style={{ textAlign: "center", padding: 5 }}><IonIcons name='chatbox' /> Comment</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Timeline;
