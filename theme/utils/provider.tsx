import type React from "react";
import { View, type ViewStyle } from "react-native";
import { useColorScheme } from "nativewind";
import { type Themes, themes } from "../themes";

export const AppThemesProvider = (props: {
	name: Themes;
	children: React.ReactNode;
}) => {
	const { colorScheme } = useColorScheme();

	const themeStyle: ViewStyle = themes[props.name][colorScheme || "light"];

	return <View style={{ flex: 1, ...themeStyle }}>{props.children}</View>;
};
