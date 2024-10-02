import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";
import MarkFav from "../MarkFav";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import ActivityItem from "./ActivityItem";

export default function LastActivity({}) {
  const [categoryList, setCategoryList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    GetCategories();
  }, []);

  const GetCategories = async () => {
    setCategoryList([]);

    const snapshot = await getDocs(collection(db, "Hebron_activity"));
    snapshot.forEach((doc) => {
      console.log(doc.data());
      setCategoryList((categoryList) => [...categoryList, doc.data()]);
    });
  };

  const router = useRouter();
  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
        Last Activity
      </Text>
      <FlatList
        data={categoryList}
        numColumns={1}
        refreshing={loader}
        onRefresh={GetCategories}
        renderItem={({ item, index }) => (
          <View style={{ margin: 5, marginBottom: 10, marginTop: 10 }}>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/activity-details",
                  params: activity,
                })
              }
              style={{
                padding: 5,
                marginRight: 10,
                backgroundColor: Colors.WHITE,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
              }}
            >
              <Image
                source={{ uri: item?.imageUrl }}
                style={{
                  width: 150,
                  height: 135,
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
              <View>
                <Text
                  style={{
                    fontFamily: "outfit-medium",
                    fontSize: 20,
                  }}
                >
                  {item?.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: Colors.GRAY, fontFamily: "outfit-regular" }}
                  >
                    {item?.category}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
