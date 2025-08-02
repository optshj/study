'use client'
import React, { useState, useEffect, useRef } from 'react'
interface CarouselProps {
    children: React.ReactNode
    interval?: number
    className?: string
}
export function Carousel({ children, interval = 3000, className = '' }: CarouselProps) {
    const [current, setCurrent] = useState(0)
    const length = React.Children.count(children)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
        }, interval)
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [current, interval, length])

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div
                className={`flex transition-transform duration-1000 ease-in-out`}
                style={{
                    transform: `translateX(-${current * 100}%)`
                }}
            >
                {React.Children.map(children, (child, idx) => (
                    <div className={`h-full w-full flex-shrink-0`}>{child}</div>
                ))}
            </div>
        </div>
    )
}
