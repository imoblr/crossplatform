import * as React from "react";
import { Platform, StyleSheet } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { TextClassContext } from "@/components/ui/text";
import * as TooltipPrimitive from "@rn-primitives/tooltip";
import { cn } from "@/lib/utils";

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
		portalHost?: string;
	}
>(({ className, sideOffset = 4, portalHost, ...props }, ref) => (
	<TooltipPrimitive.Portal hostName={portalHost}>
		<TooltipPrimitive.Overlay
			style={Platform.OS !== "web" ? StyleSheet.absoluteFill : undefined}
		>
			<Animated.View
				entering={Platform.select({ web: undefined, default: FadeIn })}
				exiting={Platform.select({ web: undefined, default: FadeOut })}
			>
				<TextClassContext.Provider value="text-sm native:text-base text-popover-foreground">
					<TooltipPrimitive.Content
						ref={ref}
						sideOffset={sideOffset}
						className={cn(
							"rounded-sm border border-[#D5D7DA] bg-[#FFF]",
							"px-2 py-1",
							className,
						)}
						{...props}
					/>
				</TextClassContext.Provider>
			</Animated.View>
		</TooltipPrimitive.Overlay>
	</TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipContent, TooltipTrigger };
