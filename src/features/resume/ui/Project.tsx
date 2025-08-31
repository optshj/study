'use client'
import { Button, DatePicker, Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label } from '@/shared/ui'
import { getPeriodDisplay } from '../lib/Resume.lib'
import { useResumeItem } from '../api/Resume.mutation'
import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { MarkdownEditor } from '@/features/write'

export function Project() {
    const { items, addItem, deleteItem, editItem } = useResumeItem('project')
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')

    const clearValue = () => {
        setValue1('')
        setValue2('')
        setValue3('')
        setValue4('')
    }

    return (
        <div>
            <h1 className="mb-4 text-xl font-semibold">프로젝트</h1>
            <div className="grid grid-cols-2 gap-4">
                {items.length === 0 && <p className="text-text-secondary col-span-2">프로젝트가 없어요. 아래 버튼으로 추가해보세요!</p>}
                {items.map((item) => (
                    // 아이템 렌더링 및 수정 폼 시작
                    <Dialog
                        key={item.id}
                        onOpenChange={() => {
                            setValue1(item.title)
                            setValue2(item.startDate ? item.startDate : '')
                            setValue3(item.endDate ? item.endDate : '')
                            setValue4(item.text ? item.text : '')
                        }}
                    >
                        <DialogTrigger asChild>
                            <div className="group flex max-h-60 cursor-pointer flex-col gap-2 overflow-hidden rounded-lg border border-[#e5e5e5] p-5 whitespace-nowrap">
                                <div className="flex flex-row justify-between">
                                    <h3 className="text-md text-sm font-semibold">{item.title}</h3>
                                    <button
                                        className="h-4 w-4 cursor-pointer rounded-full text-red-400 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red-200 dark:hover:bg-red-900"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            deleteItem(item.id)
                                        }}
                                    >
                                        <IoCloseOutline />
                                    </button>
                                </div>
                                <p className="text-text-secondary text-sm">{getPeriodDisplay(item)}</p>
                                <MarkdownEditor value={item.text} onChange={() => {}} editable={false} />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-h-[80vh] max-w-5xl overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>프로젝트 수정</DialogTitle>
                            </DialogHeader>
                            <div className="flex flex-grow flex-col gap-4 overflow-y-auto">
                                <div className="grid gap-3">
                                    <Label htmlFor="title">프로젝트명</Label>
                                    <Input id="title" name="title" placeholder="프로젝트명을 입력해주세요" value={value1} onChange={(e) => setValue1(e.target.value)} />
                                </div>
                                <div className="flex flex-row gap-3">
                                    <DatePicker label={'시작일'} setValue={setValue2} value={value2} />
                                    <DatePicker label={'종료일'} setValue={setValue3} value={value3} />
                                </div>
                                <div className="grid gap-3">
                                    <Label>프로젝트 설명</Label>
                                    <div className="px-8">
                                        <MarkdownEditor value={value4} onChange={setValue4}></MarkdownEditor>
                                    </div>
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
                                            editItem({ id: item.id, title: value1, startDate: value2, endDate: value3, text: value4 })
                                            clearValue()
                                        }}
                                    >
                                        수정
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    // 아이템 렌더링 및 수정 폼 종료
                ))}
                {/** 새 프로젝트 추가 다이얼로그 시작 */}
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="text-border-gray border-border-gray hover:bg-secondary flex cursor-pointer items-center justify-center rounded-lg border border-dotted p-5">
                            + 새 프로젝트 추가
                        </button>
                    </DialogTrigger>
                    <DialogContent className="flex h-[80vh] flex-col">
                        <DialogHeader>
                            <DialogTitle>프로젝트 추가</DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-grow flex-col gap-4 overflow-y-auto">
                            <div className="grid gap-3">
                                <Label htmlFor="title">프로젝트명</Label>
                                <Input id="title" name="title" placeholder="프로젝트명을 입력해주세요" value={value1} onChange={(e) => setValue1(e.target.value)} />
                            </div>
                            <div className="flex flex-row gap-3">
                                <DatePicker label={'시작일'} setValue={setValue2} value={value2} />
                                <DatePicker label={'종료일'} setValue={setValue3} value={value3} />
                            </div>
                            <div className="grid gap-3">
                                <Label>프로젝트 설명</Label>
                                <div className="px-8">
                                    <MarkdownEditor value={value4} onChange={setValue4}></MarkdownEditor>
                                </div>
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
                                        addItem({ id: '0', title: value1, startDate: value2, endDate: value3, text: value4 })
                                        clearValue()
                                    }}
                                >
                                    추가
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                {/** 새 프로젝트 추가 다이얼로그 종료 */}
            </div>
        </div>
    )
}
