import * as LabelPrimitive from "@rn-primitives/label";
import * as React from "react";
import { cn } from "@/lib/utils";

const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Text>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Text>
>(
	(
		{ className, onPress, onLongPress, onPressIn, onPressOut, ...props },
		ref,
	) => (
		<LabelPrimitive.Root
			className="web:cursor-default"
			onPress={() => {
				console.log("label.tsx: triggou o onPress");
			}}
			onLongPress={() => {
				console.log("label.tsx: triggou o onLongPress");
			}}
			onPressIn={() => {
				console.log("label.tsx: triggou o onPressIn");
			}}
			onPressOut={() => {
				console.log("label.tsx: triggou o onPressOut");
			}}
			// onPress={onPress}
			// onLongPress={onLongPress}
			// onPressIn={onPressIn}
			// onPressOut={onPressOut}
		>
			<LabelPrimitive.Text
				ref={ref}
				className={cn(
					"font-base text-medium text-text-secondary leading-none web:peer-disabled:cursor-not-allowed web:peer-disabled:opacity-70",
					className,
				)}
				{...props}
			/>
		</LabelPrimitive.Root>
	),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
