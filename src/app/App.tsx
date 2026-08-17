import { BrowserRouter, Route, Routes } from 'react-router'
import { AppLayout } from './AppLayout'
import { AuthProvider } from '@/modules/auth/AuthContext'
import { LoginPage, NotificationsPage, ProfilePage } from '@/modules/auth/AuthPages'
import { CalendarPage } from '@/modules/calendar/CalendarPage'
import { CategoryHubPage } from '@/modules/category/CategoryHubPage'
import { CircuitDetailPage, CircuitsPage } from '@/modules/circuits/CircuitsPages'
import { DriverProfilePage, DriversListPage } from '@/modules/drivers/DriversPages'
import { HomePage } from '@/modules/home/HomePage'
import { NewsArticlePage, NewsListPage } from '@/modules/news/NewsListPage'
import { NotFoundPage } from '@/modules/not-found/NotFoundPage'
import { EventResultsPage, ResultsListPage } from '@/modules/results/ResultsPages'
import { SearchPage } from '@/modules/search/SearchPage'
import { StandingsPage } from '@/modules/standings/StandingsPage'
import { TeamPage, TeamsListPage } from '@/modules/teams/TeamsPages'
import { WatchPage } from '@/modules/watch/WatchPage'

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="busca" element={<SearchPage />} />
            <Route path="circuitos" element={<CircuitsPage />} />
            <Route path="circuitos/:slug" element={<CircuitDetailPage />} />
            <Route path="entrar" element={<LoginPage />} />
            <Route path="perfil" element={<ProfilePage />} />
            <Route path="notificacoes" element={<NotificationsPage />} />
            <Route path=":categoria" element={<CategoryHubPage />} />
            <Route path=":categoria/noticias" element={<NewsListPage />} />
            <Route path=":categoria/noticias/:slug" element={<NewsArticlePage />} />
            <Route path=":categoria/calendario" element={<CalendarPage />} />
            <Route path=":categoria/onde-assistir" element={<WatchPage />} />
            <Route path=":categoria/resultados" element={<ResultsListPage />} />
            <Route path=":categoria/resultados/:evento" element={<EventResultsPage />} />
            <Route path=":categoria/classificacao" element={<StandingsPage />} />
            <Route path=":categoria/pilotos" element={<DriversListPage />} />
            <Route path=":categoria/pilotos/:slug" element={<DriverProfilePage />} />
            <Route path=":categoria/equipes" element={<TeamsListPage />} />
            <Route path=":categoria/equipes/:slug" element={<TeamPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
