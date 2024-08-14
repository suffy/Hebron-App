import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import Colors from "./../../constants/Colors";

export default function AddNew() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Add New Activity",
    });
  }, []);

  const handleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
        Please Input New Activity
      </Text>

      <Image
        source={require("./../../assets/images/placeholder.png")}
        style={{
          width: 70,
          height: 70,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: Colors.GRAY,
        }}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Activity Name *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("name", value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange("breed", value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>About *</Text>
        <TextInput
          numberOfLines={5}
          multiline
          style={[styles.input, { textAlignVertical: "top" }]}
          onChangeText={(value) => handleInputChange("about", value)}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            fontFamily: "outfit-medium",
            color: Colors.WHITE,
            fontSize: 20,
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>

      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 5,
  },
  input: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 7,
    fontFamily: "outfit-regular",
  },
  label: {
    marginVertical: 5,
    fontFamily: "outfit-regular",
  },
  button: {
    backgroundColor: Colors.SECONDARY,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    marginTop: 20,
  },
});
