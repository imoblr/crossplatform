import React from "react";
import { useColorScheme } from "nativewind";
import { Image } from "react-native";
import { Box } from "./ui";

const ImoblrLogo = () => {
	const { colorScheme } = useColorScheme();
	return (
		<Box className="h-[100px] w-[100px]">
			<Image
				source={
					colorScheme === "light"
						? require("@/assets/logos/imoblr-symbol-light-background.svg")
						: require("@/assets/logos/imoblr-symbol-light-background.svg")
				}
				alt="imoblr logo"
				style={{ width: "100%", height: "100%" }}
			/>
		</Box>
	);
};

export default ImoblrLogo;
