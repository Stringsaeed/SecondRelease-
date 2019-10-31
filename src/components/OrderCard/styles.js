import { StyleSheet, Dimensions } from "react-native";
import AppStyles from "../../AppStyles";

const borderRadius = 6;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  OrderCardConainer: {
    width: 0.94 * width,
    // height: 0.48 * height,
    margin: 10,
    overflow: "visible",
    backgroundColor: "white",
    borderRadius: borderRadius,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  imageBackgroundContainer: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    height: 0.13 * height
  },
  imageBackground: {
    borderRadius: borderRadius
  },
  orderStatusContainer: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.55)",
    borderRadius: borderRadius
  },
  statusContainer: {
    flex: 4.5,
    width: "100%",
    alignItems: "stretch",
    justifyContent: "center"
  },
  dateContainer: {
    flex: 1.5,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  status: {
    color: "white",
    textAlign: "center",
    opacity: 1.0,
    fontFamily: AppStyles.fontFamily.semiBoldFont
  },
  date: {
    color: AppStyles.colorSet.hairlineColor,
    textAlign: "center",
    paddingRight: 10,
    paddingBottom: 10,
    opacity: 1.0,
    fontFamily: AppStyles.fontFamily.semiBoldFont
  },
  productContainer: {
    width: "95%",
    height: 0.11 * height,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5
  },
  productImageContainer: {
    flex: 1
  },
  productImage: {
    height: "90%",
    width: "85%",
    borderRadius: borderRadius
  },
  productDescriptionContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  productDescription: {
    color: AppStyles.colorSet.mainSubtextColor,
    fontFamily: AppStyles.fontFamily.semiBoldFont,
    paddingLeft: 10
  },
  footerContainer: {
    flexDirection: "row",
    height: 0.07 * height,
    width: "90%",
    alignSelf: "center",
    marginBottom: 10
  },
  totalPriceContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  actionContainer: {
    flex: 2.4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: AppStyles.colorSet.mainThemeForegroundColor
  },
  totalPrice: {
    color: AppStyles.colorSet.mainThemeForegroundColor,
    fontFamily: AppStyles.fontFamily.semiBoldFont,
    paddingRight: 70
  },
  action: {
    color: "white",
    fontFamily: AppStyles.fontFamily.semiBoldFont
  }
});

export default styles;
