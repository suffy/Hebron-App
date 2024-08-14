import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PenanggungJawab({ activity }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Image
          source={{ uri: activity?.userImage }}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
        <View>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 17 }}>
            {activity?.pic}
          </Text>
          <Text style={{ fontFamily: "outfit-regular", color: Colors.GRAY }}>
            Penanggung Jawab
          </Text>
        </View>
      </View>
      <Ionicons name="send-sharp" size={24} color={Colors.PRIMARY} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor: Colors.WHITE,
    justifyContent: "space-between",
    borderColor: Colors.PRIMARY,
  },
});
