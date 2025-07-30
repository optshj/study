import { BsQuestionCircleFill } from 'react-icons/bs'
export function AiButton() {
    return (
        <div className="border-border-primary mt-10 flex justify-center border-t py-10">
            <button className="bg-bg-primary border-border-primary text-text-primary flex w-full items-center justify-center rounded-lg border py-6">
                <BsQuestionCircleFill className="mr-2 inline-block" />
                AI로 연습문제 생성하기
            </button>
        </div>
    )
}
