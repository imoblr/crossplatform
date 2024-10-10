import { cn } from "@/lib/utils";
import * as React from "react";
import { Box } from "./box";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type ComponentPropsWithAsChild<T extends React.ElementType<any>> =
	React.ComponentPropsWithoutRef<T> & {
		asChild?: boolean;
	};
type BoxRef = React.ElementRef<typeof Box>;
type SlottableViewProps = ComponentPropsWithAsChild<typeof Box>;

const Center = React.forwardRef<BoxRef, SlottableViewProps>(
	({ className, asChild = false, ...props }, ref) => {
		return (
			<Box
				className={cn("flex items-center justify-center", className)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Center.displayName = "Center";

export { Center };
