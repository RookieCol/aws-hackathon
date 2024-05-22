import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import DashboardContent from '@/components/DashboardContent'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Navbar />
        <DashboardContent />
      </div>
    </div>
  )
}
