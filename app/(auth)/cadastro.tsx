import * as React from "react";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import {
	Box,
	Center,
	Form,
	FormField,
	FormInput,
	HStack,
	LabelSpacer,
} from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { ImoblrSymbol } from "@/components/ImoblrSymbol";
import { Link } from "expo-router";
import { Image } from "react-native";
import { useColorScheme } from "nativewind";
import { AnimatePresence, View } from "moti";

const formSchema = z.object({
	email: z.string().email({
		message: "O endereço de email precisa ser válido.",
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

function Shape({ bg }: { bg: string }) {
	return (
		<View
			from={{
				opacity: 0,
				scale: 0.5,
			}}
			animate={{
				opacity: 1,
				scale: 1,
			}}
			exit={{
				opacity: 0,
				scale: 0.9,
			}}
			style={[styles.shape, { backgroundColor: bg }]}
		/>
	);
}

export default function Screen() {
	const [signUpStep, setSignUpStep] = React.useState(1);
	const { colorScheme } = useColorScheme();
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

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log("Submitted!", JSON.stringify(values, null, 2));
	}

	const EmailStep = () => {
		return (
			<View className="flex-1 flex-col items-center justify-center">
				<Text className="font-bold text-2xl">Sign Up</Text>
			</View>
		);
	};

	const PasswordStep = () => {
		return (
			<View className="flex-1 flex-col items-center justify-center">
				<Text className="font-bold text-2xl">Sign Up</Text>
			</View>
		);
	};

	const SuccessStep = () => {
		return (
			<View className="flex-1 flex-col items-center justify-center">
				<Text className="font-bold text-2xl">Sign Up</Text>
			</View>
		);
	};

	const signUpSteps = [EmailStep, PasswordStep, SuccessStep];

	return (
		<Center className="h-full w-full p-6">
			<AnimatePresence exitBeforeEnter>
				{signUpStep === 1 && (
					<View
						from={{
							opacity: 0,
							scale: 0.9,
						}}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						exit={{
							opacity: 0,
							scale: 0.9,
						}}
						exitTransition={{
							type: "timing",
							duration: 300,
						}}
						className="flex h-full w-full items-center justify-center"
						key="sign-up-step-1"
					>
						<Center className="mb-8">
							<ImoblrSymbol className="mb-4" />
							<Text className="text-2xl text-slate-100">
								Cadastre sua conta
							</Text>
							<Text className="text-sm text-text-quaternary">
								Já tem uma conta?{" "}
								<Link className="text-primary" href={{ pathname: "/entrar" }}>
									Clique aqui para entrar
								</Link>
							</Text>
						</Center>

						<Form {...form}>
							<Box className="w-full max-w-[360px] space-y-4">
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormInput
											className="w-full"
											autoFocus
											label="Email"
											placeholder="Email"
											{...field}
										/>
									)}
								/>
								<Button
									className="w-full"
									size="lg"
									onPress={form.handleSubmit(onSubmit)}
								>
									<Text className="bg-brand">Continuar com email</Text>
								</Button>
								<LabelSpacer label="Ou cadastre-se com" />
								<HStack className="w-full">
									<Button variant="outline" className="flex-1">
										<Image
											source={
												colorScheme === "light"
													? require("@/assets/logos/google-logo.svg")
													: require("@/assets/logos/google-logo.svg")
											}
											alt="imoblr miniature logo"
											// @ts-ignore
											style={{ width: "18px", height: "18.5px" }}
										/>
										<Text className="ml-4">Google</Text>
									</Button>
									<Button variant="outline" className="flex-1">
										<Image
											source={
												colorScheme === "light"
													? require("@/assets/logos/apple-logo.svg")
													: require("@/assets/logos/apple-logo.svg")
											}
											alt="imoblr miniature logo"
											// @ts-ignore
											style={{
												width: "16px",
												height: "19.8px",
												marginTop: "-3px",
											}}
										/>

										<Text className="ml-4">Apple</Text>
									</Button>
								</HStack>
							</Box>
						</Form>
					</View>
				)}
				{signUpStep === 2 && (
					<View
						from={{
							opacity: 0,
							scale: 0.9,
						}}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						exit={{
							opacity: 0,
							scale: 0.9,
						}}
						exitTransition={{
							type: "timing",
							duration: 300,
						}}
						className="flex h-full w-full items-center justify-center"
						key="sign-up-step-2"
					>
						<Center className="mb-8">
							<Text className="text-2xl text-slate-100">Defina sua senha</Text>
							<Text className="text-sm text-text-quaternary">
								Defina uma senha segura para sua conta.
							</Text>
						</Center>

						<Form {...form}>
							<Box className="w-full max-w-[360px] space-y-4">
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormInput
											className="w-full"
											autoFocus
											label="Escolha uma senha"
											placeholder="Escolha uma senha"
											{...field}
										/>
									)}
								/>
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormInput
											className="w-full"
											label="Repita sua senha"
											placeholder="Repita sua senha"
											{...field}
										/>
									)}
								/>
								<Button
									className="w-full"
									size="lg"
									onPress={() => {
										setSignUpStep(1);
									}}
								>
									<Text className="bg-brand">Criar minha conta</Text>
								</Button>
							</Box>
						</Form>
					</View>
				)}
			</AnimatePresence>
		</Center>
	);
}
