'use client'
import { ChevronDownIcon } from 'lucide-react'
import { Label } from '../label/label'
import { Popover, PopoverContent, PopoverTrigger } from '../popover/popover'
import { Button } from '../button/button'
import { Calendar } from './calendar'
import { useState } from 'react'

interface DatePickerProps {
    label: string
    setValue: (date: string) => void
    value: string
}
export function DatePicker({ label, setValue, value }: DatePickerProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex flex-1 flex-col gap-3">
            <Label htmlFor="date">{label}</Label>
            <Popover modal={true} open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" id="date" className="flex-1 justify-between font-normal">
                        {value ? value : `${label}을 선택해주세요`}
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start" forceMount side="bottom">
                    <Calendar
                        mode="single"
                        selected={value ? new Date(value) : undefined}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                            setValue(date?.toISOString().split('T')[0] ?? '')
                            setOpen(false)
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
