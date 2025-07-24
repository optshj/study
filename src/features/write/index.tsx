'use client'
import dynamic from 'next/dynamic'

export const TextEditor = dynamic(() => import('./ui/TextEditor').then((mod) => mod.default), { ssr: false })
