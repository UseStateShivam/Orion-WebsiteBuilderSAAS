import React from 'react'

interface TextProps {
    text: string
    align?: 'left' | 'right' | 'center' | 'justify'
    className?: string
    alt?: string
}

const Text = ({ text, align, className, alt }: TextProps) => {
    return (
        <p 
            style={{ textAlign: align }}
            className={className}
            id={alt}
        >
            {text}
        </p>
    )
}

export default Text
