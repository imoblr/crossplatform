import { MotiImage, AnimatePresence, Text } from "moti";
import React, { useState } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { wrap } from "popmotion";
import { Box } from "@/components/ui";

export default function Gallery() {
	const { width } = useWindowDimensions();
	const [[index, direction], setState] = useState([0, 0]);

	const paginate = (direction: 1 | -1) => () => {
		setState(([index]) => {
			return [index + direction, direction];
		});
	};

	const url = photos[wrap(0, photos.length, index)];

	return (
		<View className="flex-1 flex-row bg-secondary/30 p-6">
			<Box className="w-[50%] flex-row justify-around gap-3">
				sodfkoskfsokdfs
			</Box>
			<Box className="w-[50%] flex-row justify-around gap-3 overflow-hidden rounded-xl">
				<AnimatePresence initial={false} custom={direction}>
					<MotiImage
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
						source={{ uri: url }}
						transition={{
							translateX: { type: "spring", stiffness: 300, damping: 30 },
							opacity: { duration: 200, type: "timing" },
						}}
					/>
				</AnimatePresence>
				<View style={styles.actions}>
					<Text selectable={false} style={styles.button} onPress={paginate(-1)}>
						👈
					</Text>
					<Text selectable={false} style={styles.button} onPress={paginate(1)}>
						👉
					</Text>
				</View>
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
		...StyleSheet.absoluteFillObject,
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

const photos = [
	"https://images.unsplash.com/photo-1551871812-10ecc21ffa2f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=929&q=80",
	"https://images.unsplash.com/photo-1530447920184-b88c8872?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJvY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
	"https://images.unsplash.com/photo-1581069700310-8cf2e1b6baf0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHJvY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
	"https://images.unsplash.com/photo-1562802378-063ec186a863?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1c2hpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
];
