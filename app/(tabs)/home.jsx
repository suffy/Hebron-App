import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "../../constants/Colors";
import ActivityByCategory from "../../components/Home/ActivityByCategory";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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

      <Link href="/add-new" style={styles.addNewContainer}>
        <View>
          <FontAwesome5 name="plus-circle" size={24} color={Colors.PRIMARY} />
        </View>
        <View>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 19,
              color: Colors.PRIMARY,
            }}
          >
            Add New Activity
          </Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  addNewContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 20,
    marginTop: 50,
    backgroundColor: Colors.LIGHT_PRIMARY,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 15,
    borderStyle: "dashed",
    justifyContent: "center",
    textAlign: "center",
  },
});
