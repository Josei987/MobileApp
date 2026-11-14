import {View, Text, Pressable, StyleSheet} from "react-native";
import {Image} from "expo-image";
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {colors} from "../constants/themes";
import Logo from "./logo";

//fake until weave gets the points wired.
const points: number | null = 120;

export default function TopBar() {
    const handleOrder = () => {
        //also temp empty until weave is implemented
    };

    return (
        <SafeAreaView edges={["top"]} style={styles.safe}>
            <View style={styles.bar}>
                {/*left side*/}
                <View style={styles.side}>
                    <Pressable style={styles.button} onPress={handleOrder}>
                        <Text style={styles.buttonText}>Order now</Text>
                    </Pressable>
                </View>

                {/*center logo*/}
                <Link href="/" asChild>
                    <Pressable>
                        <Logo width={120}/>
                    </Pressable>
                </Link>
                {/*right side*/}
                <View style={[styles.side, styles.right]}>
                    {points !== null ? (
                        <Text style={styles.points}>{points} pts</Text>
                    ) : (
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}> Login</Text>
                        </Pressable>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        backgroundColor: colors.background,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    bar: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    side: {flex: 1},
    right: {alignItems: "flex-end"},
    logo: {width: 70, height: 70},
    button: {
        backgroundColor: colors.buttonBg,
        borderColor: colors.buttonBorder,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 20,
        alignSelf: "flex-start"
    },
    buttonText: {color: colors.buttonText, fontWeight: "bold"},
    points: {color: colors.brand, fontWeight: "bold", fontSize: 16}
});