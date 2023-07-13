import '@/styles/globals.css'

import type { Metadata } from 'next'

// 导入谷歌字体
import { Inter } from 'next/font/google'
// 导入本地字体
import localFont from 'next/font/local'

// 导入站点配置
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/common/theme-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const calSans = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-calSans',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: '%s | ' + siteConfig.name,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
  ],
  authors: [
    {
      name: 'mask',
      url: 'https://moyaojun.com',
    },
  ],
  creator: 'mask',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.className,
          calSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
