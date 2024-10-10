import * as React from "react";
import { Box } from "./box";
import { cva, type VariantProps } from "class-variance-authority";

const hstackVariants = cva("flex flex-row", {
	variants: {
		gap: {
			default: "gap-4",
			xs: "gap-2",
			sm: "gap-3",
			md: "gap-4",
			lg: "gap-6",
			xl: "gap-8",
		},
	},
	defaultVariants: {
		gap: "default",
	},
});

type HStackProps = React.ComponentPropsWithoutRef<typeof Box> &
	VariantProps<typeof hstackVariants>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type ComponentPropsWithAsChild<T extends React.ElementType<any>> =
	React.ComponentPropsWithoutRef<T> & {
		asChild?: boolean;
	};
type HStackRef = React.ElementRef<typeof Box>;
type SlottableViewProps = ComponentPropsWithAsChild<typeof Box>;

const HStack = React.forwardRef<React.ElementRef<typeof Box>, HStackProps>(
	({ className, gap, ...props }, ref) => {
		return (
			<Box
				className={hstackVariants({ gap, className })}
				ref={ref}
				{...props}
			/>
		);
	},
);
HStack.displayName = "HStack";

export { HStack, hstackVariants };
export type { HStackProps };
