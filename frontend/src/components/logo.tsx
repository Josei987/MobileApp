import {View} from "react-native";
import {Image} from "expo-image";

const WINGS_RATIO = 277 / 122;
const NAME_RATIO = 314 / 83;

type Props = {width?: number};

export default function Logo({width = 120}: Props) {
    const wingsWidth = width * 0.8;
    const wingsHeight = wingsWidth / WINGS_RATIO;
    const nameHeight = width / NAME_RATIO;

    return (
        <View style={{ width, alignItems: "center"}}>
            <Image
                source={require("../../assets/images/logo-wings.png")}
                style={{ width: wingsWidth, height: wingsHeight}}
                contentFit="contain"
            />
            <Image
                source={require("../../assets/images/logo-name.png")}
                style={{ width, height: nameHeight, marginTop: -wingsHeight *0.2}}
                contentFit="contain"
            />
        </View>
    );
}