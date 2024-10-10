import { Box, Center } from "@/components/ui";
import { Slot } from "expo-router";
import { MotiImage, AnimatePresence, Text } from "moti";
import { wrap } from "popmotion";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { useWindowDimensions, View } from "react-native";

const TestimonialImage1 = require("../../assets/images/testimonial-henrico.jpg");
const TestimonialImage2 = require("../../assets/images/testimonial-monica.jpg");

export default function AuthLayout() {
	const { width } = useWindowDimensions();
	const [[index, direction], setState] = useState([0, 0]);

	const paginate = (direction: 1 | -1) => () => {
		setState(([index]) => {
			return [index + direction, direction];
		});
	};

	const url = photos[wrap(0, photos.length, index)];

	return (
		<View className="flex-1 flex-row bg-background p-16">
			<Box className="w-[50%] flex-row justify-around gap-3">
				<Slot />
			</Box>
			<Box className="position-relative w-[50%] flex-row justify-around gap-3 overflow-hidden rounded-xl p-6">
				<Box className="absolute bottom-0 left-0 z-10 w-full bg-background-darkest-a3 px-8 py-6 bg-blend-overlay backdrop-blur-sm">
					<Text className="pr-16 font-medium text-[#FFF] text-xl">
						"A Imoblr nos ajudou a otimizar nossas oportunidades de negócio e
						diminuiu nossos custos operacionais"
					</Text>
					<Box className="w-full flex-row justify-between gap-2">
						<Box>sdfsd</Box>
						<Box>
							<View style={styles.actions}>
								<Pressable onPress={paginate(-1)}>
									<Center className="h-[50px] w-[50px] rounded-full bg-background-a3">
										<Text selectable={false} className="">
											👈
										</Text>
									</Center>
								</Pressable>
								<Pressable onPress={paginate(1)}>
									<Center className="h-[50px] w-[50px] rounded-full bg-background-a3">
										<Text selectable={false} className="">
											👉
										</Text>
									</Center>
								</Pressable>
							</View>
						</Box>
					</Box>
				</Box>
				<AnimatePresence initial={false} custom={direction}>
					<MotiImage
						resizeMode="cover"
						from={{
							opacity: 0,
							translateX: direction * width,
						}}
						animate={{
							opacity: 1,
							translateX: 0,
							zIndex: 1,
						}}
						exit={(custom) => {
							"worklet";
							return {
								opacity: 0,
								translateX: custom * width * -1,
								zIndex: 0,
							};
						}}
						style={[styles.image, { width }]}
						key={index}
						source={url}
						transition={{
							translateX: { type: "spring", stiffness: 300, damping: 30 },
							opacity: { duration: 200, type: "timing" },
						}}
					/>
				</AnimatePresence>
			</Box>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#0D1117",
	},
	padded: {
		padding: 16,
	},
	image: {
		width: "auto",
		height: "100%",
		alignSelf: "center",
	},
	actions: {
		flexDirection: "row",
		margin: 16,
		justifyContent: "space-between",
		zIndex: 1,
	},
	button: {
		fontSize: 42,
		backgroundColor: "white",
		height: 75,
		width: 75,
		borderRadius: 100,
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		lineHeight: 75,
	},
	action: {},
});

const photos = [TestimonialImage1, TestimonialImage2];
