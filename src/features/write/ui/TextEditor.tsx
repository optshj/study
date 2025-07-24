'use client'
import React from 'react'
import { useCreateBlockNote } from '@blocknote/react'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import '@blocknote/core/fonts/inter.css'

export function TextEditor() {
    const editor = useCreateBlockNote()
    const referenceBlock = editor.document[0]
    editor.insertBlocks(
        [
            { type: 'heading', content: 'My Heading' },
            { type: 'paragraph', content: 'Some content' },
            { type: 'bulletListItem', content: 'List item 1' },
            { type: 'bulletListItem', content: 'List item 2' }
        ],
        referenceBlock
    )

    return <BlockNoteView editor={editor} theme={'light'} />
}
