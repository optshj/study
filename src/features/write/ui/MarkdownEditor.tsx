'use client'
import { useCreateBlockNote } from '@blocknote/react'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'
import '@blocknote/core/fonts/inter.css'
import { Block } from '@blocknote/core'
import { useEffect, useState } from 'react'
import './MarkdownEditor.css'

interface MarkdownEditorProps {
    value?: string
    onChange: (value: string) => void
    editable?: boolean
    sideMenu?: boolean
}
export default function MarkdownEditor({ value, onChange, editable = true, sideMenu = true }: MarkdownEditorProps) {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        const updateTheme = () => {
            setDarkMode(document.documentElement.classList.contains('dark'))
        }
        updateTheme()

        // 다크모드 toggle 시 classList 변화를 감지
        const observer = new MutationObserver(updateTheme)
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

        return () => observer.disconnect()
    }, [])

    const initialBlocks: Block[] = value ? JSON.parse(value) : [{ type: 'paragraph' }]

    const editor = useCreateBlockNote({
        initialContent: initialBlocks
    })

    return (
        <BlockNoteView
            editor={editor}
            onChange={() => {
                const json = JSON.stringify(editor.document)
                onChange(json)
            }}
            theme={darkMode ? 'dark' : 'light'}
            editable={editable !== false}
            sideMenu={sideMenu !== false}
        />
    )
}
