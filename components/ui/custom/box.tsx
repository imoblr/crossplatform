import { cn } from "@/lib/utils";
import * as React from "react";
import { Platform, View } from "react-native";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type ComponentPropsWithAsChild<T extends React.ElementType<any>> =
	React.ComponentPropsWithoutRef<T> & {
		asChild?: boolean;
	};
type ViewRef = React.ElementRef<typeof View>;
type SlottableViewProps = ComponentPropsWithAsChild<typeof View>;

const Box = React.forwardRef<ViewRef, SlottableViewProps>(
	({ className, asChild = false, ...props }, ref) => {
		return (
			<View
				className={cn(
					Platform.OS === "web"
						? "relative z-0 m-0 box-border flex min-h-0 min-w-0 list-none flex-col items-stretch border-0 bg-transparent p-0 text-decoration-none"
						: "",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Box.displayName = "Box";

export { Box };
