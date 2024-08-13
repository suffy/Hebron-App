import { useUser } from "@clerk/clerk-expo";
import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const { user } = useUser();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* <Text>Hello</Text> */}
      {user ? <Redirect href="/(tabs)/home" /> : <Redirect href="/login" />}
    </View>
  );
}
