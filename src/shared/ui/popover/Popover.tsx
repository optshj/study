import { Popover as PopoverPrimitive } from 'radix-ui'
interface PopoverProps {
    content: React.ReactNode
    children: React.ReactNode
    side?: 'left' | 'right' | 'top' | 'bottom'
}
export function Popover({ content, children, side = 'bottom' }: PopoverProps) {
    return (
        <PopoverPrimitive.Root>
            <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>
            <PopoverPrimitive.Portal>
                <PopoverPrimitive.Content side={side} sideOffset={4} collisionPadding={10} className="text-text-primary bg-bg-primary rounded-md p-2 shadow-lg">
                    {content}
                    <PopoverPrimitive.Arrow className="fill-bg-primary" />
                </PopoverPrimitive.Content>
            </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
    )
}
