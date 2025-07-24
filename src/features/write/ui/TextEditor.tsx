'use client'
import React, { useState } from 'react'
import { useCreateBlockNote } from '@blocknote/react'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import '@blocknote/core/fonts/inter.css'
import { Block } from '@blocknote/core'

export default function TextEditor() {
    const [blocks, setBlocks] = useState<Block[]>([])
    const editor = useCreateBlockNote({
        initialContent: [
            {
                type: 'paragraph',
                content: 'Welcome to this demo!'
            },
            {
                type: 'heading',
                content: 'This is a heading block'
            },
            {
                type: 'paragraph',
                content: 'This is a paragraph block'
            },
            {
                type: 'paragraph'
            }
        ]
    })

    return (
        <BlockNoteView
            editor={editor}
            onChange={() => {
                setBlocks(editor.document)
            }}
            theme={'light'}
        />
    )
}
