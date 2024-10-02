import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useCallback } from "react";
import Colors from "./../../constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { Link } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    console.log("startOAuthFlow");
    try {
      console.log("try");
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/(tabs)/home", { scheme: "myapp" }),
          reloadApp: true,
        });

      if (createdSessionId) {
        console.log("createdSessionId");
        setActive({ session: createdSessionId });
      } else {
        console.log("else");
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <ScrollView style={{ backgroundColor: Colors.WHITE, height: "100%" }}>
      <View style={{ display: "flex", flex: 1 }}>
        <Image
          source={require("./../../assets/images/login.jpg")}
          style={{ width: "100%", height: 500 }}
        />
        <View
          style={{
            padding: 20,
            backgroundColor: Colors.WHITE,
            marginTop: -20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 35,
              textAlign: "center",
            }}
          >
            Yayasan Jala Hebron
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-regular",
              fontSize: 18,
              color: Colors.GRAY,
              marginTop: 30,
            }}
          >
            Konseling, Kemanusiaan, Beasiswa, Pelayanan, Kesehatan, Others
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={onPress}
            style={{
              padding: 14,
              marginTop: 30,
              backgroundColor: Colors.PRIMARY,
              width: "90%",
              borderRadius: 14,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
                textAlign: "center",
                color: Colors.WHITE,
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
