import "@/global.css";

import { Slot } from "expo-router";
import * as React from "react";
import { Box } from "@/components/ui";
import { ImoblrSymbol } from "@/components";
import { Image } from "react-native";
import { useColorScheme } from "nativewind";

export default function RootLayout() {
	const { colorScheme } = useColorScheme();

	return (
		<Box className="flex-1 flex-row bg-background-darker">
			<Box className="h-full w-[80px] p-1.5">
				<Box className="h-full w-full items-center rounded-lg bg-gray-950 shadow-lg">
					<Box className="h-[48px] w-[48px]">
						<Image
							source={
								colorScheme === "light"
									? require("@/assets/logos/imoblr-symbol-dark-background.svg")
									: require("@/assets/logos/imoblr-symbol-light-background.svg")
							}
							alt="imoblr miniature logo"
							style={{ width: "100%", height: "100%" }}
							className="mt-3"
						/>
					</Box>
				</Box>
			</Box>
			<Slot />
		</Box>
	);
}
