import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './styles/globals.css'
import '@radix-ui/themes/styles.css'
import { ReactQueryProvider } from './provider/ReactQueryProvider'

export const metadata: Metadata = {
    title: 'LearnRun | AI 문제 생성 및 학습 관리 플랫폼',
    description:
        'LearnRun은 AI를 활용하여 연습문제를 생성하고, 학습을 관리할 수 있는 플랫폼입니다. 포트폴리오 작성과 생산성 향상을 도와줍니다. AI를 통해 효율적인 학습을 경험하세요.',
    keywords: ['AI', '문제 생성', '학습 관리', 'LearnRun', '포트폴리오', '생산성', '학습', '연습문제'],
    verification: {
        google: 'huSHYvBftuJFa028T6tGdShVcrWecu4qHuQWqhyKrmU',
        other: {}
    },
    openGraph: {
        title: 'LearnRun',
        locale: 'ko_KR',
        siteName: 'LearnRun',
        url: 'https://learnrun.vercel.app/',
        type: 'website'
    }
}

export default function App({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko">
            <body className={`font-inter bg-background antialiased`}>
                <ReactQueryProvider>{children}</ReactQueryProvider>
                <Analytics />
            </body>
        </html>
    )
}
