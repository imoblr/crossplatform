import * as React from "react";
import { TextInput } from "react-native";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
	React.ElementRef<typeof TextInput>,
	React.ComponentPropsWithoutRef<typeof TextInput>
>(({ className, placeholderClassName, ...props }, ref) => {
	return (
		<TextInput
			ref={ref}
			className={cn(
				"web:flex h-12 web:w-full rounded-md border border-border bg-background px-4 web:py-2 native:text-lg text-base text-foreground native:leading-[1.25] shadow-xs web:ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground web:focus-visible:border-primary-600 web:focus-visible:outline-none web:focus-visible:ring-4 web:focus-visible:ring-primary-50 web:focus-visible:ring-offset-0 lg:text-sm",
				props.editable === false && "web:cursor-not-allowed opacity-50",
				className,
			)}
			placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
			{...props}
		/>
	);
});

Input.displayName = "Input";

export { Input };
