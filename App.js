import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "MyApp",
    },
  }
);

export default createAppContainer(navigator);
