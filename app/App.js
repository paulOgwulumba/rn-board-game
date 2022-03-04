import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreens from "./src/screens/ComponentScreens";
import ExerciseScreen from "./src/screens/ExerciseScreen";
import ListScreen from "./src/screens/ListScreen";
import NatureScreen from "./src/screens/NatureScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ColorSelectorScreen from "./src/screens/ColorSelectorScreen";
import PasswordScreen from "./src/screens/PasswordScreen";
import LayoutScreen from "./src/screens/LayoutScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreens,
    Exercise: ExerciseScreen,
    List: ListScreen,
    Nature: NatureScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    ColorSelector: ColorSelectorScreen,
    Password: PasswordScreen,
    Layout: LayoutScreen
  },
  {
    initialRouteName: "Layout",
    defaultNavigationOptions: {
      title: "My App",
    },
  }
);

export default createAppContainer(navigator);
