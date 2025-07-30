import { ComponentProps } from 'react'
import { Switch } from 'radix-ui'

interface SwitchProps extends ComponentProps<typeof Switch.Root> {
    checked: boolean
    onCheckedChange: (checked: boolean) => void
    label?: string
}
export function SwitchButton({ checked, onCheckedChange, label, ...props }: SwitchProps) {
    return (
        <Switch.Root
            className="border-background-secondary relative flex h-6 w-12 cursor-pointer items-center justify-center rounded-full bg-[#E5E5E5] transition-colors duration-300 data-[state=checked]:bg-green-500"
            checked={checked}
            onCheckedChange={onCheckedChange}
            {...props}
        >
            <Switch.Thumb className="block h-5 w-5 -translate-x-3 transform rounded-full bg-white shadow transition-transform duration-200 data-[state=checked]:translate-x-3" />
        </Switch.Root>
    )
}
