import * as React from "react";
import { View } from "react-native";
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
	const [progress, setProgress] = React.useState(78);
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

	function updateProgressValue() {
		setProgress(Math.floor(Math.random() * 100));
	}
	return (
		<View className="flex-1 items-center justify-center gap-5 bg-secondary/30 p-6">
			<Card className="w-full max-w-sm rounded-2xl p-6">
				<CardHeader className="items-center">
					<Avatar alt="Rick Sanchez's Avatar" className="h-24 w-24">
						<AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
						<AvatarFallback>
							<Text>RS</Text>
						</AvatarFallback>
					</Avatar>
					<View className="p-3" />
					<CardTitle className="pb-2 text-center">Rick Sanchez</CardTitle>
					<View className="flex-row">
						<CardDescription className="font-semibold text-base">
							Scientist
						</CardDescription>
						<Tooltip delayDuration={150}>
							<TooltipTrigger className="px-2 pb-0.5 active:opacity-50">
								<Info
									size={14}
									strokeWidth={2.5}
									className="h-4 w-4 text-foreground/70"
								/>
							</TooltipTrigger>
							<TooltipContent className="px-4 py-2 shadow">
								<Text className="native:text-lg">Freelance</Text>
							</TooltipContent>
						</Tooltip>
					</View>
				</CardHeader>
				<CardContent>
					<View className="flex-row justify-around gap-3">
						<View className="items-center">
							<Text className="text-muted-foreground text-sm">Dimension</Text>
							<Text className="font-semibold text-xl">C-137</Text>
						</View>
						<View className="items-center">
							<Text className="text-muted-foreground text-sm">Age</Text>
							<Text className="font-semibold text-xl">70</Text>
						</View>
						<View className="items-center">
							<Text className="text-muted-foreground text-sm">Species</Text>
							<Text className="font-semibold text-xl">Human</Text>
						</View>
					</View>
				</CardContent>
				<CardFooter className="flex-col gap-3 pb-0">
					<View className="flex-row items-center overflow-hidden">
						<Text className="text-muted-foreground text-sm">Productivity:</Text>
						<LayoutAnimationConfig skipEntering>
							<Animated.View
								key={progress}
								entering={FadeInUp}
								exiting={FadeOutDown}
								className="w-11 items-center"
							>
								<Text className="font-bold text-muted-foreground text-sm">
									{progress}%
								</Text>
							</Animated.View>
						</LayoutAnimationConfig>
					</View>
					<Progress
						value={progress}
						className="h-2"
						indicatorClassName="bg-primary"
					/>
					<View />
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
					<Button size="lg" onPress={updateProgressValue}>
						<Text>Acessar minha conta</Text>
					</Button>
				</CardFooter>
			</Card>
		</View>
	);
}
