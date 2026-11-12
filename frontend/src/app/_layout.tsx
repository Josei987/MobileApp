import { Stack } from "expo-router";
import { View } from "react-native";
import TopBar from "../components/top-bar";
import { colors } from "../constants/themes";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.gold }}>
    <TopBar />
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gold },
      }}
    />
  </View>
  );
}
