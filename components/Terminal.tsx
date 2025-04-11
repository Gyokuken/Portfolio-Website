"use client"

import { useEffect, useState, useRef } from "react"

interface TerminalProps {
  text: string
  typingSpeed?: number
  className?: string
  showPrompt?: boolean
  onComplete?: () => void
  contentType?: 'main-heading' | 'sub-heading' | 'description'
  hideHeader?: boolean
}

export function Terminal({ 
  text, 
  typingSpeed = 50, 
  className = "", 
  showPrompt = true, 
  onComplete,
  contentType = 'description',
  hideHeader = false
}: TerminalProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let currentIndex = 0
    setDisplayedText("")
    setIsTyping(true)

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1))
        currentIndex++
        timerRef.current = setTimeout(typeNextCharacter, typingSpeed)
      } else {
        setIsTyping(false)
        if (onComplete) {
          onComplete()
        }
      }
    }

    timerRef.current = setTimeout(typeNextCharacter, typingSpeed)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [text, typingSpeed, onComplete])

  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-button terminal-button-red"></div>
        <div className="terminal-button terminal-button-yellow"></div>
        <div className="terminal-button terminal-button-green"></div>
        <div className="terminal-title">terminal</div>
      </div>
      <div className={`terminal-content ${contentType}`}>
        <span className="text-primary">$ </span>
        <span>{displayedText}</span>
        {isTyping && <span className="terminal-cursor"></span>}
      </div>
    </div>
  )
}