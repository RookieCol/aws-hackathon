import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toaster'
import { Create, Explore, Layout, Profile } from '@/pages'

export default function App() {
  return (
    <Router>
      <TooltipProvider>
        <Layout>
          <Routes>
            <Route index path="/" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
        <Toaster />
      </TooltipProvider>
    </Router>
  )
}
