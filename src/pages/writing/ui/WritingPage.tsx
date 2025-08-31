import { AiButton } from '@/features/ai'
import { TextEditor } from '@/features/write'

export function WritingPage() {
    return (
        <div className="w-full">
            <TextEditor />
            <AiButton />
        </div>
    )
}
