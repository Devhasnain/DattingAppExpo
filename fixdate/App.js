import { StatusBar } from "expo-status-bar";
import ThemeProvider from "./components/ThemeProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
import StackNavigations from "./navigations/StackNavigations";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar style="#1F82C4" backgroundColor="transparent" />
          <StackNavigations />
        </SafeAreaProvider>
      </Provider>
    </ThemeProvider>
  );
}
