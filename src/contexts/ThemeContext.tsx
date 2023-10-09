"use client"

import { ThemeProvider } from "next-themes"

type Props = {
    children: React.ReactNode;
}

export const ThemeContext = ({ children }: Props) => {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>
}