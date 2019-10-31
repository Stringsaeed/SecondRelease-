import { StyleSheet } from "react-native";
import AppStyles from "../../AppStyles";

// const { width, height } = Dimensions.get("window");
const optionBoxSize = 23;
const optionBoxMargin = 7;

const styles = StyleSheet.create({
  colorOptionBox: {
    height: optionBoxSize,
    width: optionBoxSize,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: optionBoxMargin
  },
  selectedColorIcon: {
    height: 17,
    width: 17,
    tintColor: AppStyles.colorSet.mainThemeForegroundColor
  }
});

export default styles;
