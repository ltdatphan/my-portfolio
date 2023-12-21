'use client'

import { ThemeProvider } from 'next-themes'

type Props = {
    children: string | React.ReactNode
}

const Providers = ({ children }: Props) => {
    return (
        <ThemeProvider
            enableSystem={true}
            attribute="class"
            defaultTheme="system"
        >
            {children}
        </ThemeProvider>
    )
}

export default Providers
