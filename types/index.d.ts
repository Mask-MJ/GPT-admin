declare interface LayoutProps {
  children: React.ReactNode
}

declare interface MainNavItem {
  title: string
  href: string
  disabled?: boolean
}

declare interface NavProps {
  items: MainNavItem[]
  children?: React.ReactNode
}
