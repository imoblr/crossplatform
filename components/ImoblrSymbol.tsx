import { cva, type VariantProps } from "class-variance-authority";
import { Image } from "react-native";
import { useColorScheme } from "nativewind";

import { Box } from "./ui";
import { forwardRef } from "react";

const imoblrSymbolVariants = cva("flex", {
	variants: {
		size: {
			default: "w-[80px] h-[80px]",
			xs: "w-[40px] h-40px]",
			sm: "w-[60px] h-[60px]",
			md: "w-[80px] h-[80px]",
			lg: "w-[100px] h-[100px]",
			xl: "w-[100px] h-[100px]",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

type ImoblrSymbolProps = React.ComponentPropsWithoutRef<typeof Box> &
	VariantProps<typeof imoblrSymbolVariants>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type ComponentPropsWithAsChild<T extends React.ElementType<any>> =
	React.ComponentPropsWithoutRef<T> & {
		asChild?: boolean;
	};
type ImoblrSymbolRef = React.ElementRef<typeof Box>;
type SlottableViewProps = ComponentPropsWithAsChild<typeof Box>;

const ImoblrSymbol = forwardRef<
	React.ElementRef<typeof Box>,
	ImoblrSymbolProps
>(({ className, size, ...props }, ref) => {
	const { colorScheme } = useColorScheme();

	return (
		<Box
			className={imoblrSymbolVariants({ size, className })}
			ref={ref}
			{...props}
		>
			<Image
				source={
					colorScheme === "light"
						? require("@/assets/logos/imoblr-symbol-dark-background.svg")
						: require("@/assets/logos/imoblr-symbol-light-background.svg")
				}
				alt="imoblr miniature logo"
				style={{ width: "100%", height: "100%" }}
			/>
		</Box>
	);
});
ImoblrSymbol.displayName = "ImoblrSymbol";

export { ImoblrSymbol, imoblrSymbolVariants };
export type { ImoblrSymbolProps };
