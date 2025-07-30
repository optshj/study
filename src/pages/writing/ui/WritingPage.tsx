import { AiButton } from '@/features/ai'
import { TextEditor } from '@/features/write'

export function WritingPage() {
    return (
        <div className="mx-auto max-w-5xl py-20">
            <TextEditor />
            <AiButton />
        </div>
    )
}
