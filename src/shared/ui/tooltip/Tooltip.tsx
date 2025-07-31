import { Tooltip as TooltipPrimitive } from 'radix-ui'

export function Tooltip({ content, children }: { content: string; children: React.ReactNode }) {
    return (
        <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content sideOffset={4} collisionPadding={10} asChild={false} className="text-text-primary bg-bg-primary rounded-md p-2 shadow-lg">
                        {content}
                        <TooltipPrimitive.Arrow className="fill-bg-primary" />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    )
}
