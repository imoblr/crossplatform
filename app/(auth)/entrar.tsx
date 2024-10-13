import * as React from "react";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import {
	Box,
	Center,
	Form,
	FormCheckbox,
	FormField,
	FormInput,
	HStack,
	// ImoblrSymbol,
} from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { ImoblrSymbol } from "@/components/ImoblrSymbol";
import { Link } from "expo-router";

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
		<Center className="h-full w-full p-6">
			<Center className="mb-10">
				<ImoblrSymbol className="mb-4" />
				<Text className="text-2xl">Bem-vindo de volta!</Text>
				<Text className="text-muted-foreground">
					Ainda não tem uma conta?{" "}
					<Link className="text-primary" href={{ pathname: "(auth)/cadastro" }}>
						Crie uma agora
					</Link>
				</Text>
			</Center>

			{/* <ThemeToggle /> */}
			<Form {...form}>
				<Box className="w-full max-w-[400px] space-y-4">
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

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormInput
								className="w-full"
								label="Senha"
								placeholder="Senha"
								{...field}
							/>
						)}
					/>

					<FormField
						control={form.control}
						name="tos"
						render={({ field }) => (
							<FormCheckbox
								className="my-2"
								// checked={placeType.value}
								label="Continuar logado por 30 dias"
								{...field}
							/>
						)}
					/>
					<Button className="w-full" size="lg" onPress={updateProgressValue}>
						<Text className="bg-brand">Acessar minha conta</Text>
					</Button>
					<HStack className="w-full">
						<Button variant="outline" className="flex-1">
							<Text>Entrar com Google</Text>
						</Button>
						<Button variant="outline" className="flex-1">
							<Text>Entrar com Apple</Text>
						</Button>
					</HStack>
				</Box>
			</Form>
		</Center>
	);
}
