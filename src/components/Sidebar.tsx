import { Link } from 'react-router-dom'
import {
  Package2,
  Home,
  ShoppingCart,
  Package,
  Users2,
  LineChart,
  Settings,
} from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <TooltipLink
          to="#"
          icon={<Home className="h-5 w-5" />}
          label="Dashboard"
        />
        <TooltipLink
          to="#"
          icon={<ShoppingCart className="h-5 w-5" />}
          label="Orders"
        />
        <TooltipLink
          to="#"
          icon={<Package className="h-5 w-5" />}
          label="Products"
        />
        <TooltipLink
          to="#"
          icon={<Users2 className="h-5 w-5" />}
          label="Customers"
        />
        <TooltipLink
          to="#"
          icon={<LineChart className="h-5 w-5" />}
          label="Analytics"
        />
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipLink
          to="#"
          icon={<Settings className="h-5 w-5" />}
          label="Settings"
        />
      </nav>
    </aside>
  )
}

function TooltipLink({
  to,
  icon,
  label,
}: {
  to: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={to}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          {icon}
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  )
}
