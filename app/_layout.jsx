import * as SecureStore from "expo-secure-store";
import {
  ClerkProvider,
  ClerkLoaded,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-expo";
// import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as Font from "expo-font";
import useFonts from "./../hooks/useFonts";
import { useEffect, useState } from "react";
import LoginScreen from "./login";

const tokenCache = {
  async getToken(key) {
    console.log("SecureStore get item: ", key);
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout() {
  const [IsReady, SetIsReady] = useState(false);

  useEffect(() => {
    console.log("load fonts");
    LoadFonts();
  }, []);

  const LoadFonts = async () => {
    await useFonts();
  };

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <SignedIn>
        <Stack>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="login/index" options={{ headerShown: false }} />
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  );
}
