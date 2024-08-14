import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import ActivitySubInfoCard from "./ActivitySubInfoCard";

export default function ActivitySubInfo({ activity }) {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <ActivitySubInfoCard
          icon={require("./../../assets/images/calendar.png")}
          title="Created At"
          value={activity?.createdAt}
        />
        <ActivitySubInfoCard
          icon={require("./../../assets/images/options.png")}
          title="Category"
          value={activity?.category}
        />
      </View>
      {/* <View style={{ display: "flex", flexDirection: "row" }}>
        <ActivitySubInfoCard
          icon={require("./../../assets/images/sex.png")}
          title="Sex"
          value={activity?.sex}
        />
        <ActivitySubInfoCard
          icon={require("./../../assets/images/weight.png")}
          title="Weight"
          value={activity?.weight + " Kg"}
        />
      </View> */}
    </View>
  );
}
