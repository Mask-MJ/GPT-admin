interface SiteConfig {
  name: string
  description: string
  url: string
  links: { github: string }
}

// 站点配置
export const siteConfig: SiteConfig = {
  name: 'NEXT',
  description:
    'Next.js boilerplate with TypeScript, ESLint, Prettier, Husky, Lint-Staged, and more.',
  url: 'https://next.moyaojun.com',
  links: {
    github: 'https://github.com/Mask-MJ',
  },
}
