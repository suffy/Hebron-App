import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "../../constants/Colors";
import ActivityByCategory from "../../components/Home/ActivityByCategory";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import LastActivity from "../../components/Home/LastActivity";

export default function Home() {
  return (
    <ScrollView
      style={{
        padding: 20,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Header />

      <Slider />

      <ActivityByCategory />

      <LastActivity />

      {/* <Link href="/add-new" style={styles.addNewContainer}>
        <FontAwesome5 name="plus-circle" size={24} color={Colors.PRIMARY} />
        <View style={{ width: 10 }}></View>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 19,
            color: Colors.PRIMARY,
          }}
        >
          Add New Activity
        </Text>
      </Link> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  addNewContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    backgroundColor: Colors.LIGHT_GRAY,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 15,
    borderStyle: "dashed",
    justifyContent: "center",
    textAlign: "center",
  },
});
