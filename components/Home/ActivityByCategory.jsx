import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import ActivityItem from "./ActivityItem";

export default function ActivityByCategory() {
  const [activityList, setActivityList] = useState([]);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    GetActivityList("Konseling");
  }, []);

  const GetActivityList = async (category) => {
    setLoader(true);
    setActivityList([]);
    // console.log("category", category);
    const q = query(
      collection(db, "Hebron_activity"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setActivityList((activityList) => [...activityList, doc.data()]);
    });
    setLoader(false);
  };

  return (
    <View style={{ marginTop: 5 }}>
      <Category category={(value) => GetActivityList(value)} />

      <FlatList
        data={activityList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        refreshing={loader}
        onRefresh={() => GetActivityList("Konseling")}
        style={{ marginTop: 20 }}
        renderItem={({ item, index }) => <ActivityItem activity={item} />}
      />
    </View>
  );
}
