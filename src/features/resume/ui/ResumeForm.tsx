import { Button, DatePicker, Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label } from '@/shared/ui'
import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

interface ResumeFormProps<T extends { id: string }> {
    title: '프로필' | '보유스킬' | '학력' | '자격증' | '수상' | '경력사항'
    items: T[]
    onClick: (arg1: string, arg2: string, arg3: string) => void
    onDelete: (id: string) => void
    onEdit: (id: string, arg1: string, arg2: string, arg3: string) => void
    renderPrimary: (item: T) => React.ReactNode
    renderSecondary: (item: T) => React.ReactNode
}
const getLabel = (title: string) => {
    switch (title) {
        case '프로필':
            return ['프로필내용', '프로필정보', '']
        case '보유스킬':
            return ['보유스킬', '카테고리이름', '']
        case '학력':
            return ['학력내용', '입학일', '졸업일']
        case '자격증':
            return ['자격증', '자격증 취득일', '']
        case '수상':
            return ['수상내용', '수상일', '']
        case '경력사항':
            return ['경력사항', '입사일', '퇴사일']
        default:
            return ['', '', '']
    }
}
export function ResumeForm<T extends { id: string }>({ title, onClick, onEdit, onDelete, items, renderPrimary, renderSecondary }: ResumeFormProps<T>) {
    const [label1, label2, label3] = getLabel(title)
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')

    return (
        <div className="flex flex-1 flex-col gap-4">
            <h1 className="text-xl font-semibold">{title}</h1>
            {items && items.length === 0 ? (
                <p className="text-text-secondary">{title}이 없어요. 아래 버튼으로 추가해보세요!</p>
            ) : (
                // 아이템 렌더링 & 아이템 수정 폼 시작
                items.map((item) => (
                    <Dialog key={item.id}>
                        <DialogTrigger asChild>
                            <div className="group text-primary hover:bg-secondary flex cursor-pointer flex-row items-center justify-between gap-1 rounded-lg text-lg">
                                <div className="text-secondary ml-4 whitespace-nowrap">{renderPrimary(item)}</div>
                                <div className="flex items-center gap-1">
                                    <p className="line-clamp-1 max-w-full truncate overflow-hidden whitespace-nowrap">{renderSecondary(item)}</p>
                                    <button
                                        className="my-2 mr-2 cursor-pointer rounded-full text-red-400 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red-200 dark:hover:bg-red-900"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            onDelete(item.id)
                                        }}
                                        type="button"
                                    >
                                        <IoCloseOutline />
                                    </button>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>{title} 수정</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4">
                                <div className="grid gap-3">
                                    <Label htmlFor="label-2">{label1}</Label>
                                    <Input id="label-2" name={label1} defaultValue={value1} onChange={(e) => setValue1(e.target.value)} placeholder={`${label1}을 입력해주세요`} />
                                </div>
                                <div className="grid gap-3">
                                    <InputByTitle title={title} label1={label2} label2={label3} value1={value2} value2={value3} setValue1={setValue2} setValue2={setValue3} />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">취소</Button>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Button
                                        type="submit"
                                        onClick={() => {
                                            onEdit(item.id, value1, value2, value3)
                                            setValue1('')
                                            setValue2('')
                                            setValue3('')
                                        }}
                                    >
                                        수정
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                ))
                // 아이템 렌더링 & 아이템 수정 폼 종료
            )}
            {/** 아이템 추가 폼 시작 */}
            <Dialog>
                <DialogTrigger asChild>
                    <button className="text-border-gray border-border-gray hover:bg-secondary flex cursor-pointer items-center justify-center rounded-lg border border-dotted py-2">
                        + {title} 추가
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title} 추가</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="label-2">{label1}</Label>
                            <Input id="label-2" name={label1} defaultValue={value1} onChange={(e) => setValue1(e.target.value)} placeholder={`${label1}을 입력해주세요`} />
                        </div>
                        <div className="grid gap-3">
                            <InputByTitle title={title} label1={label2} label2={label3} value1={value2} value2={value3} setValue1={setValue2} setValue2={setValue3} />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">취소</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button
                                type="submit"
                                onClick={() => {
                                    onClick(value1, value2, value3)
                                    setValue1('')
                                    setValue2('')
                                    setValue3('')
                                }}
                            >
                                추가
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            {/** 아이템 추가 폼 종료 */}
        </div>
    )
}
interface InputByTitleProps {
    title: string
    label1: string
    label2: string
    value1: string
    value2: string
    setValue1: (value: string) => void
    setValue2: (value: string) => void
}
function InputByTitle({ title, label1, label2, value1, value2, setValue1, setValue2 }: InputByTitleProps) {
    if (title === '학력' || title === '경력사항')
        return (
            // 실제로는 value2 ,value3
            <div className="flex flex-row gap-3">
                <DatePicker label={label1} setValue={setValue1} value={value1} />
                <DatePicker label={label2} setValue={setValue2} value={value2} />
            </div>
        )
    else if (title === '자격증' || title === '수상') {
        // 실제로는 value2
        return <DatePicker label={label1} setValue={setValue1} value={value1} />
    } else if (title === '보유스킬' || title === '프로필') {
        return (
            <div className="grid gap-3">
                <Label htmlFor={label1}>{label1}</Label>
                <Input id={label1} name={label1} placeholder={`${label1}을 입력해주세요`} onChange={(e) => setValue1(e.target.value)} value={value1} />
            </div>
        )
    }
    return <></>
}
