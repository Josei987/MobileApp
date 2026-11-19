import {Pressable, Text, StyleSheet} from "react-native";
import {colors} from "../constants/themes";

type Props = {
    label: string;
    onPress?: () => void;
};

export default function AppButton({ label, onPress }: Props ) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.buttonBg,
        borderColor: colors.buttonBorder,
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
    },
    pressed: { opacity: 0.7 },
    text: { color: colors.buttonText, fontWeight: "bold", fontSize: 16 },
});