import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListProfile } from "../../constants/Options";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Profile() {
  const [readMore, setReadMore] = useState(false);
  return (
    <SafeAreaView
      style={{ padding: 20, backgroundColor: "white", height: "100%" }}
    >
      <Text style={{ fontFamily: "outfit-bold", fontSize: 35 }}>
        Profil Kami
      </Text>

      <FlatList
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        data={ListProfile}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: Colors.LIGHT_GRAY,
              borderRadius: 20,
              marginVertical: 10,
            }}
          >
            <View style={{ marginVertical: 5, gap: 10 }}>
              <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
                {item.title}
              </Text>
              {/* <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 17,
                  color: Colors.GRAY,
                }}
              >
                {item.desc}
              </Text> */}

              <TouchableOpacity onPress={() => setReadMore(!readMore)}>
                <Text
                  numberOfLines={readMore ? null : 5}
                  style={{
                    fontFamily: "outfit-medium",
                    fontSize: 17,
                    color: Colors.GRAY,
                    textAlign: "auto",
                    lineHeight: 25,
                  }}
                >
                  {item?.desc}
                </Text>
              </TouchableOpacity>

              {/* {item.desc2 && (
                <Text
                  style={{
                    fontFamily: "outfit-medium",
                    fontSize: 17,
                    color: Colors.GRAY,
                  }}
                >
                  {item.desc2}
                </Text>
              )}

              {item.desc3 && (
                <Text
                  style={{
                    fontFamily: "outfit-medium",
                    fontSize: 17,
                    color: Colors.GRAY,
                  }}
                >
                  {item.desc3}
                </Text>
              )}

              {item.desc4 && (
                <Text
                  style={{
                    fontFamily: "outfit-medium",
                    fontSize: 17,
                    color: Colors.GRAY,
                  }}
                >
                  {item.desc4}
                </Text>
              )}
              {item.desc5 && (
                <Text
                  style={{
                    fontFamily: "outfit-medium",
                    fontSize: 17,
                    color: Colors.GRAY,
                  }}
                >
                  {item.desc5}
                </Text>
              )} */}
            </View>
          </View>
        )}
      />

      {/* <ScrollView>
        <View style={{ marginTop: 20 }}>
          <Image
            source={{
              uri: "https://muliaputramandiri.com/assets/images/hebron/logo-hebron.png",
            }}
            style={{ width: 100, height: 100 }}
          />
        </View>
          <Text>
            Pada tgl. 1 Februari 2012, sebuah langkah besar dijalankan : menyewa
            ruko untuk dijadikan tempat ibadah, yaitu di Ruko Tematik Blok N 15
            Komplek Pasar Modern Paramount Gading Serpong. Pada tahun ini, mulai
            diperkenalkan nama gereja, yaitu GPdI Hebron.
          </Text>
          <Text>
            Sejak 2012 itulah perjalanan GPdI Hebron semakin berkembang dalam
            menumbuhkan pekerjaan Tuhan, baik dalam hal pertumbuhan rohani
            maupun pertumbuhan jumlah jemaat Tuhan.
          </Text>
          <Text>
            Pada tanggal 01 Januari 2021, alamat gereja pindah ke ruko Tematik
            Blok L/39. Atas ruko tersebut, GPdI Hebron melakukan perjanjian sewa
            beli dengan pemiliknya.
          </Text>
          <Text>
            Saat ini GPdI Hebron diberi perluasan dalam beberapa divisi, yaitu :
            Anak, Remaja, Pemuda, Keluarga Muda dan Dewasa-Lansia. GPdI Hebron
            terus fokus dalam pertumbuhan kualitas rohani jemaat dan pelayanan,
            mempersiapkan diri menjadi gereja yang sempurna.
          </Text>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
            Contact US
          </Text>
          <Text>Telp : 081387243736 dan 085311902150</Text>
          <Text>Email 1 : gpdihebronserpong@gmail.com</Text>
          <Text>Email 2 : gpdihebronserpong@gmail.com</Text>
          <Text>
            Alamat : Jl. Boulevard Gading Serpong, Ruko Thematic Blok L39 & L50
            Gading Serpong (Komplek Pasar Modern Paramount Gading Serpong)
          </Text>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
            Pelayanan Panggung Boneka
          </Text>
          <Text>085311902150 / 081387243736</Text>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
            Donasi
          </Text>
          <Text>BCA 883.074.4178 An Raimond Sumaa</Text>
          <Text>Untuk: Pembangunan Gedung Gereja</Text>
        </View>
        <View style={{ height: 50 }}></View>
      </ScrollView> */}
    </SafeAreaView>
  );
}
