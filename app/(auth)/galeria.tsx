import * as React from "react";
import { Dimensions, View } from "react-native";
import Animated, {
	FadeInUp,
	FadeOutDown,
	LayoutAnimationConfig,
} from "react-native-reanimated";
import { Info } from "@/lib/icons/Info";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Text } from "@/components/ui/text";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Form, FormCheckbox, FormField, FormInput } from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
	type ICarouselInstance,
	Pagination,
} from "react-native-reanimated-carousel";

const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;

const isWeb = typeof window !== "undefined";

const GITHUB_AVATAR_URI =
	"https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg";

const formSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	password: z.string().min(8, {
		message: "Password must be at least 8 characters.",
	}),
	about: z.string().min(1, {
		message: "We need to know.",
	}),
	accountType: z.enum(["staff", "admin", "owner"]),
	framework: z.object(
		{ value: z.string(), label: z.string() },
		{
			invalid_type_error: "Please select a framework.",
		},
	),
	favoriteEmail: z.object(
		{ value: z.string(), label: z.string() },
		{
			invalid_type_error: "Please select a favorite email.",
		},
	),
	enableNotifications: z.boolean(),
	dob: z
		.string()
		.min(1, { message: "Please enter your date of birth" })
		.refine(
			(dob) => {
				const currentDate = new Date();
				const year = currentDate.getFullYear();
				const month = String(currentDate.getMonth() + 1).padStart(2, "0");
				const day = String(currentDate.getDate()).padStart(2, "0");
				const today = `${year}-${month}-${day}`;
				return new Date(today).getTime() !== new Date(dob).getTime();
			},
			{
				message: "You cannot be born today.",
			},
		),
	tos: z.boolean().refine((value) => value, {
		message: "You must accept the terms & conditions",
	}),
});

export default function Screen() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			about: "",
			enableNotifications: false,
			tos: false,
		},
	});

	return (
		<View className="flex-1 items-center justify-center gap-5 p-6a">
			<Form {...form}>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormInput label="Email" placeholder="Email" {...field} />
					)}
				/>

				<FormField
					control={form.control}
					name="tos"
					render={({ field }) => (
						<FormCheckbox
							// checked={placeType.value}
							label="Accept terms & conditions"
							{...field}
						/>
					)}
				/>
			</Form>
			<Button size="lg">
				<Text className="bg-brand">Acessar minha conta</Text>
			</Button>
		</View>
	);
}
