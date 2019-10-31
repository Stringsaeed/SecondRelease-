import { StyleSheet, Dimensions } from "react-native";
import AppStyles from "../../AppStyles";

const { width: screenWidth } = Dimensions.get("window");
const width = screenWidth * 0.7;
const carouselHeightMultiplier = 1.52;

const styles = StyleSheet.create({
  carouselProductViewContainer: {
    width: width,
    height: carouselHeightMultiplier * width,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.36,
    shadowRadius: 7,

    elevation: 11
  },
  carouselProductViewImage: {
    width: width - 15,
    height: carouselHeightMultiplier * width - 60,
    borderRadius: 7
  },
  carouselProductViewTitle: {
    textAlign: "center",
    color: AppStyles.colorSet.mainTextColor,
    fontSize: 14,
    fontFamily: AppStyles.fontFamily.semiBoldFont
  },
  carouselProductViewPrice: {
    textAlign: "center",
    color: AppStyles.colorSet.mainSubtextColor,
    fontSize: 14,
    marginTop: 3,
    fontFamily: AppStyles.fontFamily.mediumFont
  }
});

export default styles;
