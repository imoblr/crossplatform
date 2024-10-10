import { Box, Center, Text } from "@/components/ui";
import { Slot } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import { useWindowDimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
	type ICarouselInstance,
	Pagination,
} from "react-native-reanimated-carousel";

const TestimonialImage1 = require("../../assets/images/testimonial-henrico.jpg");
const TestimonialImage2 = require("../../assets/images/testimonial-monica.jpg");

const data = [...new Array(6).keys()];
const width = 520;

export default function AuthLayout() {
	const ref = useRef<ICarouselInstance>(null);
	const progress = useSharedValue<number>(0);

	const onPressPagination = (index: number) => {
		ref.current?.scrollTo({
			/**
			 * Calculate the difference between the current index and the target index
			 * to ensure that the carousel scrolls to the nearest index
			 */
			count: index - progress.value,
			animated: true,
		});
	};

	return (
		<View className="flex-1 flex-row bg-background p-16">
			<Box className="flex flex-1 flex-row justify-around gap-3">
				<Slot />
			</Box>
			<Box className="position-relative w-[520px] flex-row justify-around gap-3 overflow-hidden rounded-xl bg-slate-10">
				<Carousel
					ref={ref}
					width={width}
					height="100%"
					data={data}
					onProgressChange={progress}
					renderItem={({ index }) => (
						<View
							style={{
								flex: 1,
								borderWidth: 1,
								justifyContent: "center",
							}}
						>
							<Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
						</View>
					)}
				/>
				<Box className="absolute bottom-0 left-0 z-10 w-full bg-background-darkest-a3 px-8 py-6 bg-blend-overlay backdrop-blur-sm">
					<Pagination.Basic
						progress={progress}
						data={data}
						dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
						containerStyle={{ gap: 5, marginTop: 10 }}
						onPress={onPressPagination}
					/>
					<Text className="pr-16 font-medium text-[#FFF] text-xl">
						"A Imoblr nos ajudou a otimizar nossas oportunidades de negócio e
						diminuiu nossos custos operacionais"
					</Text>
					<Box className="w-full flex-row justify-between gap-2">
						<Box>sdfsd</Box>
					</Box>
				</Box>
			</Box>
		</View>
	);
}
const photos = [TestimonialImage1, TestimonialImage2];
