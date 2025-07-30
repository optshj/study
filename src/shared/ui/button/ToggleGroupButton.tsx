import { ToggleGroup } from 'radix-ui'
interface ToggleGroupButtonProps {
    values: string[]
    title?: string
    onValueChange?: (value: string) => void
}
export function ToggleGroupButton({ values, title, onValueChange }: ToggleGroupButtonProps) {
    return (
        <>
            <span className="text-text-primary text-lg">{title}</span>
            <ToggleGroup.Root type="single" defaultValue="option1" className="flex gap-2" onValueChange={onValueChange}>
                {values?.map((value) => (
                    <ToggleGroup.Item
                        key={value}
                        value={value}
                        className="bg-bg-primary text-text-primary data-[state=on]:bg-emphasis hover:bg-text-secondary cursor-pointer rounded-lg px-4 py-2 transition-colors duration-300 data-[state=on]:text-white"
                    >
                        {value}
                    </ToggleGroup.Item>
                ))}
            </ToggleGroup.Root>
        </>
    )
}
