import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "../../constants/Colors";
import ActivityByCategory from "../../components/Home/ActivityByCategory";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 20,
      }}
    >
      <Header />

      <Slider />

      <ActivityByCategory />

      <TouchableOpacity style={styles.donate}>
        {/* <MaterialIcons name="pets" size={24} color={Colors.PRIMARY} /> */}
        <Ionicons name="heart-sharp" size={24} color="red" />
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 19,
            color: Colors.WHITE,
          }}
        >
          Donate
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  donate: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    backgroundColor: Colors.SECONDARY,
    borderWidth: 1,
    borderColor: Colors.SECONDARY,
    borderRadius: 15,
    borderStyle: "dashed",
    justifyContent: "center",
  },
});
