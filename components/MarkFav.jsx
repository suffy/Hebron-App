import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Shared from "./../Shared/Shared";
import { useUser } from "@clerk/clerk-expo";
import { useState } from "react";
import Colors from "../constants/Colors";

export default function MarkFav({ activity, color = "black" }) {
  const { user } = useUser();
  const [favList, setFavList] = useState();

  useEffect(() => {
    user && GetFav();
  }, [user]);

  const GetFav = async () => {
    const result = await Shared.GetFavList(user);
    console.log(result);
    setFavList(result?.favorites ? result?.favorites : []);
  };

  const AddToFav = async () => {
    console.log("add to fav");
    const favResult = favList;
    favResult.push(activity.id);
    await Shared.UpdateFav(user, favResult);
    GetFav();
  };

  const removeFromFav = async () => {
    console.log("remove from fav");
    const favResult = favList.filter((item) => item != activity.id);
    await Shared.UpdateFav(user, favResult);
    GetFav();
  };

  return (
    <View>
      {favList?.includes(activity?.id) ? (
        <Pressable onPress={removeFromFav}>
          <Ionicons name="heart" size={30} color="red" />
        </Pressable>
      ) : (
        <Pressable onPress={() => AddToFav()}>
          <Ionicons name="heart-outline" size={30} color={color} />
        </Pressable>
      )}
    </View>
  );
}
