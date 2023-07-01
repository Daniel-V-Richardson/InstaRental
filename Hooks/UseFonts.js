import * as Font from "expo-font";
import { FONT } from "../constants";

export default UseFonts = async () => {
  await Font.loadAsync({
    InterBlack: require("../assets/fonts/Inter-Black.ttf"),
    InterBold: require("../assets/fonts/Inter-Bold.ttf"),
    InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
  });
};
