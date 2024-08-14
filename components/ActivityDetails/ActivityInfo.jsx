import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "./../../constants/Colors";
import MarkFav from "../MarkFav";

export default function ActivityInfo({ activity }) {
  return (
    <View>
      <Image
        source={{ uri: activity?.imageUrl }}
        style={{ width: "100%", height: 400, objectFit: "cover" }}
      />
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 27 }}>
            {activity?.name}
          </Text>
          <Text
            style={{
              fontFamily: "outfit-regular",
              fontSize: 16,
              color: Colors.GRAY,
            }}
          >
            {activity?.address}
          </Text>
        </View>
        <MarkFav activity={activity} />
      </View>
    </View>
  );
}
