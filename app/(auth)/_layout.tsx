import { Box, Center, Text } from "@/components/ui";
import { Slot } from "expo-router";
import { Image } from "react-native";
import { useRef, useState } from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import { useWindowDimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
	type ICarouselInstance,
	Pagination,
} from "react-native-reanimated-carousel";
import { cn } from "@/lib";

const TestimonialImage1 = require("../../assets/images/testimonial-henrico.jpg");
const TestimonialImage2 = require("../../assets/images/testimonial-monica.jpg");

const testimonials = [
	{
		name: "Henrico Chagas",
		image: TestimonialImage1,
		text: "A Imoblr nos ajudou a otimizar nossas oportunidades de negócio e diminuiu nossos custos operacionais.",
	},
	{
		name: "Monica Oliveira",
		image: TestimonialImage2,
		text: "Conseguimos colocar nossos processos repetitivos no piloto automático e economizamos muito tempo!",
	},
];
const width = 480;

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
		<View className="flex-1 flex-row p-16">
			<Box className="flex flex-1 flex-row rounded-l-xxl pr-16">
				<Slot />
			</Box>
			<Box className="position-relative w-[480px] flex-row justify-around gap-3 overflow-hidden rounded-xxl shadow-3xl">
				<Carousel
					ref={ref}
					width={width}
					height="100%"
					data={testimonials}
					onProgressChange={progress}
					renderItem={({ index }) => (
						<Center
							className={cn(
								"h-full w-[480px] overflow-hidden bg-background-a3",
								index % 2 === 0
									? "bg-background-darkest-a3"
									: "bg-background-a3",
							)}
						>
							<Image
								source={testimonials[index].image}
								style={{ height: "100%", minWidth: width }}
							/>
						</Center>
					)}
				/>
				<Box className="absolute bottom-0 left-0 z-10 w-full bg-background-darkest-a3 px-8 py-6 bg-blend-saturation backdrop-blur-sm">
					<Pagination.Basic
						progress={progress}
						data={testimonials}
						dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
						containerStyle={{ gap: 5, marginTop: 10 }}
						onPress={onPressPagination}
					/>
					<Text className="pr-16 font-medium text-[#FFF] text-xl">
						{testimonials[progress.value].text}
					</Text>
					<Box className="w-full flex-row justify-between gap-2">
						<Box>{progress.value}</Box>
					</Box>
				</Box>
			</Box>
		</View>
	);
}
const photos = [TestimonialImage1, TestimonialImage2];
