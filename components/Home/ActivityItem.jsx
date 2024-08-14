import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";
import MarkFav from "../MarkFav";

export default function ActivityItem({ activity }) {
  useEffect(() => {
    console.log(activity);
  }, []);

  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/activity-details",
          params: activity,
        })
      }
      style={{
        padding: 10,
        marginRight: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          right: 10,
          top: 10,
        }}
      ></View>
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          right: 10,
          top: 10,
        }}
      >
        <MarkFav activity={activity} />
      </View>
      <Image
        source={{ uri: activity?.imageUrl }}
        style={{
          width: 150,
          height: 135,
          objectFit: "cover",
          borderRadius: 10,
        }}
      />
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 18,
        }}
      >
        {activity?.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: Colors.GRAY, fontFamily: "outfit-regular" }}>
          {activity?.category}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
