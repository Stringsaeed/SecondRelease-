import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import OnboardingScreen from "../screens/OnboardingScreen/OnboardingScreen";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";
import StackViewStyleInterpolator from "react-navigation-stack/src/views/StackView/StackViewStyleInterpolator";
import AppStyles from "../AppStyles";

const AuthStackNavigator = createStackNavigator(
  {
    // Start: { screen: StartScreen },
    Onboarding: {
      screen: OnboardingScreen,
      screen: WelcomeScreen,
      navigationOptions: { header: null }
    },
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: { header: null }
    },
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen }
  },
  {
    initialRouteName: "Welcome",
    headerMode: "float",
    headerBackTitleVisible: false,
    cardStyle: {
      backgroundColor: AppStyles.colorSet.mainThemeBackgroundColor
    },
    transitionConfig: () => ({
      screenInterpolator: sceneProps => {
        // Disable the transition animation when resetting to the main screen
        if (sceneProps.index === 0 && sceneProps.scenes.length > 2) {
          return null;
        }

        // Otherwise, use the usual animation
        return Platform.OS === "ios"
          ? StackViewStyleInterpolator.forHorizontal(sceneProps)
          : StackViewStyleInterpolator.forFadeFromBottomAndroid(sceneProps);
      }
    })
  }
);

export default AuthStackNavigator;