import { cn } from "@/lib/utils";
import * as React from "react";
import { Center } from "./center";
import { Separator } from "../separator";
import { Text } from "../text";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type ComponentPropsWithLabel<T extends React.ElementType<any>> =
	React.ComponentPropsWithoutRef<T> & {
		label?: string;
	};
type CenterRef = React.ElementRef<typeof Center>;
type SlottableViewProps = ComponentPropsWithLabel<typeof Center>;

const LabelSpacer = React.forwardRef<CenterRef, SlottableViewProps>(
	({ className, label = null, ...props }, ref) => {
		return (
			<Center className={cn("w-full flex-row", className)} ref={ref} {...props}>
				<Separator className="w-[unset] flex-1" />
				{label && (
					<Text className="mx-4 text-muted-foreground text-sm">{label}</Text>
				)}
				<Separator className="w-[unset] flex-1" />
			</Center>
		);
	},
);
LabelSpacer.displayName = "LabelSpacer";

export { LabelSpacer };
