'use client'
import { useState } from 'react'
import { Modal, ToggleGroupButton } from '@/shared/ui'
import { BsQuestionCircleFill } from 'react-icons/bs'
import { Dialog } from 'radix-ui'

export function AiButton() {
    const [difficulty, setDifficulty] = useState('')
    const [problemType, setProblemType] = useState('')
    const [problemCount, setProblemCount] = useState('')
    const isActive = difficulty && problemType && problemCount

    return (
        <Modal
            trigger={
                <div className="border-border-primary mt-10 flex justify-center border-t py-10">
                    <button className="bg-bg-primary border-border-primary text-text-primary flex w-full cursor-pointer items-center justify-center rounded-lg border py-6">
                        <BsQuestionCircleFill className="mr-2 inline-block" />
                        AI로 연습문제 생성하기
                    </button>
                </div>
            }
            title={'AI로 연습문제 생성하기'}
        >
            <div className="flex flex-col items-center justify-center gap-2">
                <ToggleGroupButton title={'난이도'} values={['상', '중', '하']} onValueChange={setDifficulty} />
                <ToggleGroupButton title={'문제유형'} values={['주관식', '객관식', '서술형']} onValueChange={setProblemType} />
                <ToggleGroupButton title={'문제수'} values={['20개', '10개', '5개']} onValueChange={setProblemCount} />
            </div>
            <div className="mt-4 flex w-full items-center justify-center gap-4">
                <Dialog.Close asChild>
                    <button className={`bg-emphasis flex-1 rounded-xl py-3 text-white ${isActive ? 'opacity-100' : 'bg-bg-primary cursor-not-allowed'}`} disabled={!isActive}>
                        문제 생성하기
                    </button>
                </Dialog.Close>
                <Dialog.Close asChild>
                    <button className="flex-1 cursor-pointer rounded-xl bg-[#FF6E6E] py-3 text-white">뒤로가기</button>
                </Dialog.Close>
            </div>
        </Modal>
    )
}
