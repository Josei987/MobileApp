import { Text, View } from "react-native";
import { colors } from "../constants/themes";

export default function Deals() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ color: colors.text, fontSize: 24 }}>Deals coming soon</Text>
    </View>
  );
}