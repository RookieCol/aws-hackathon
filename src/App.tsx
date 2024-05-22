import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '@/components/Dashboard'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function App() {
  return (
    <Router>
      <TooltipProvider>
        <Routes>
          <Route index path="/" element={<Dashboard />} />
        </Routes>
      </TooltipProvider>
    </Router>
  )
}
