import "@/global.css";
import "react-native-reanimated";
import "react-native-gesture-handler";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	type Theme,
	ThemeProvider as ReactNativeThemeProvider,
} from "@react-navigation/native";
import { Slot, SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform, View } from "react-native";
import { NAV_THEME } from "@/lib/constants";
import { useColorScheme } from "@/lib/useColorScheme";
import { PortalHost } from "@rn-primitives/portal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { setAndroidNavigationBar } from "@/lib/android-navigation-bar";
import { AppThemesProvider } from "@/theme";
import { useFonts } from "expo-font";

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

const LIGHT_THEME: Theme = {
	dark: false,
	colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
	dark: true,
	colors: NAV_THEME.dark,
};

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
	const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
	const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);
	const [loaded, error] = useFonts({
		Figtree: require("../assets/fonts/Figtree.ttf"),
	});

	React.useEffect(() => {
		(async () => {
			const theme = await AsyncStorage.getItem("theme");
			if (Platform.OS === "web") {
				// Adds the background color to the html element to prevent white background on overscroll.
				document.documentElement.classList.add("bg-background");
			}
			if (!theme) {
				AsyncStorage.setItem("theme", colorScheme);
				setIsColorSchemeLoaded(true);
				return;
			}
			const colorTheme = theme === "dark" ? "dark" : "light";
			if (colorTheme !== colorScheme) {
				setColorScheme(colorTheme);
				setAndroidNavigationBar(colorTheme);
				setIsColorSchemeLoaded(true);
				return;
			}
			setAndroidNavigationBar(colorTheme);
			setIsColorSchemeLoaded(true);
		})().finally(() => {
			if (loaded || error) {
				SplashScreen.hideAsync();
			}
		});
	}, [loaded, error, colorScheme, setColorScheme]);

	if (!isColorSchemeLoaded) {
		return null;
	}

	return (
		<ReactNativeThemeProvider
			value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}
		>
			<AppThemesProvider name="brand">
				<Slot />
				<PortalHost />
			</AppThemesProvider>
		</ReactNativeThemeProvider>
	);
}
