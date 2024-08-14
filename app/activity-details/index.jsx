import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import ActivityInfo from "../../components/ActivityDetails/ActivityInfo";
import ActivitySubInfo from "../../components/ActivityDetails/ActivitySubInfo";
import About from "../../components/ActivityDetails/About";
import PenanggungJawab from "../../components/ActivityDetails/PenanggungJawab";
import Colors from "../../constants/Colors";

export default function ActivityDetails() {
  const activity = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  return (
    <View>
      <ScrollView>
        {/* Activity Info */}
        <ActivityInfo activity={activity} />

        <ActivitySubInfo activity={activity} />

        <About activity={activity} />

        <PenanggungJawab activity={activity} />

        <View style={{ height: 100 }}></View>

        {/* Adopt me button */}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.adoptBtn}>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Contact Me
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  adoptBtn: {
    padding: 20,
    backgroundColor: Colors.SECONDARY,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
