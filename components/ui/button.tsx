import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Pressable } from "react-native";
import { TextClassContext } from "@/components/ui/text";
import { cn } from "@/utils";

const buttonVariants = cva(
	"group flex flex-row items-center justify-center web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
	{
		variants: {
			variant: {
				default:
					"border shadow-[inset_1px_0_0.4px_0_var(--color-gray-800),inset_0_1px_0.4px_0_var(--color-gray-700),inset_-1px_0_0.4px_0_var(--color-gray-800),inset_0_-1px_0.4px_0_var(--color-gray-900)] border-gray-950 bg-gray-950 web:hover:opacity-90 active:opacity-90",
				brand:
					"border shadow-[inset_1px_0_0.4px_0_var(--color-primary-600),inset_0_1px_0.4px_0_var(--color-primary-500),inset_-1px_0_0.4px_0_var(--color-primary-600),inset_0_-1px_0.4px_0_var(--color-primary-700)] border-primary-700 bg-primary web:hover:opacity-90 active:opacity-90",
				destructive: "bg-destructive web:hover:opacity-90 active:opacity-90",
				outline:
					"border border-border bg-background shadow-[inset_0_-1px_0.4px_0_var(--color-shadow-dark),0_1px_3px_0_var(--color-shadow)] web:hover:bg-gray-50 web:hover:text-accent-foreground active:bg-accent",
				secondary: "bg-secondary web:hover:opacity-80 active:opacity-80",
				ghost:
					"web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
				link: "web:underline-offset-4 web:hover:underline web:focus:underline ",
			},
			size: {
				default:
					"h-10 px-4 py-2 rounded-lg native:h-12 native:px-5 native:py-3",
				sm: "h-9 rounded-md px-3",
				lg: "h-12 rounded-lg px-6 native:h-14",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

const buttonTextVariants = cva(
	"web:whitespace-nowrap flex-row text-sm native:text-base font-medium text-foreground web:transition-colors",
	{
		variants: {
			variant: {
				default: "text-text-on-brand textshadow-lg",
				destructive: "text-destructive-foreground",
				outline: "group-active:text-accent-foreground text-text-secondary",
				secondary:
					"text-secondary-foreground group-active:text-secondary-foreground",
				ghost: "group-active:text-accent-foreground",
				link: "text-primary group-active:underline",
			},
			size: {
				default: "text-md",
				sm: "text-sm",
				lg: "text-md",
				icon: "",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
	VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<
	React.ElementRef<typeof Pressable>,
	ButtonProps
>(({ className, variant, size, ...props }, ref) => {
	return (
		<TextClassContext.Provider
			value={cn(
				props.disabled && "web:pointer-events-none",
				buttonTextVariants({ variant, size }),
			)}
		>
			<Pressable
				className={cn(
					props.disabled && "web:pointer-events-none opacity-50",
					buttonVariants({ variant, size, className }),
				)}
				ref={ref}
				role="button"
				{...props}
			/>
		</TextClassContext.Provider>
	);
});
Button.displayName = "Button";

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
