import { Outlet } from 'react-router'
import { CategoryNav } from '@/shared/ui/CategoryNav'
import { Footer } from '@/shared/ui/Footer'
import { Header } from '@/shared/ui/Header'
import { SubNav } from '@/shared/ui/SubNav'

export function AppLayout() {
  return (
    <div className="app-shell">
      <Header />
      <CategoryNav />
      <SubNav />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
