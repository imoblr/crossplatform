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
import { useForm, type UseFormReturn } from "react-hook-form";
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
});

type FormWithInputs = z.infer<typeof formSchema>;
type FieldName = keyof FormWithInputs;

const signUpSteps = [
	{
		fields: ["email"],
	},
	{
		fields: ["password"],
	},
];

export default function Screen() {
	const { colorScheme } = useColorScheme();
	const [signUpStep, setSignUpStep] = React.useState(1);
	const form = useForm<FormWithInputs>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const continueToPassword = async () => {
		const fields = signUpSteps[0].fields;
		const output = await form.trigger(fields as FieldName[], {
			shouldFocus: true,
		});

		if (!output) return;

		setSignUpStep(2);
	};

	function onSubmit(values: FormWithInputs) {
		setSignUpStep(2);
	}

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
									onPress={continueToPassword}
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
				{/* form.handleSubmit(onSubmit) */}
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
