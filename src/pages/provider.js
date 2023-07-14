"use client";
import { ThemeProvider } from 'next-themes'

const provider = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default provider
