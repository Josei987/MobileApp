import { Text, View, ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import { colors } from "../constants/themes";
import AppButton from "../components/app-button";

export default function Index() {
  const {width} = useWindowDimensions();
  const isWide = width > 768; //determines if using laptop/desktop vs phone
  
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.hero}>
        <Text style={[styles.title, { fontSize: isWide? 56 : 36}]}>
          The Green Angel
        </Text>
        <Text style={styles.subtitle}>
          Everyone's favirote Los Angeles Dispensary
        </Text>

        <View style={styles.buttonRow}>
          <AppButton label="Deals" onPress={() => router.push("/deals" as any)} />
          <AppButton label="Menu" />
          <AppButton label="Delivery" onPress={() => router.push("/delivery" as any)} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {flexGrow: 1, padding: 16},
  hero: {
    alignItems: "center",
    paddingVertical: 48,
  },
  title: {
    color: colors.title,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: colors.text,
    fontSize: 18,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 32,
  },
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
});
