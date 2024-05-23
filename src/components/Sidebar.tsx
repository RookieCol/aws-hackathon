import { Link, useLocation } from 'react-router-dom'
import { Home, User, Plus } from 'lucide-react'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/components/ui/tooltip'

export default function Sidebar() {
	return (
		<>
			<nav className='flex flex-col items-center justify-center sm:justify-start gap-10 sm:gap-4 px-2 sm:py-5'>
				<TooltipLink to='/' icon={<Home className='h-5 w-5' />} label='Home' />
				<TooltipLink
					to='/profile'
					icon={<User className='h-5 w-5' />}
					label='Profile'
				/>
				<TooltipLink
					to='/create'
					icon={<Plus className='h-5 w-5' />}
					label='Create Pool'
				/>
			</nav>
		</>
	)
}

function TooltipLink({
	to,
	icon,
	label
}: {
	to: string
	icon: React.ReactNode
	label: string
}) {
	const { pathname } = useLocation()

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Link
					to={to}
					className={`flex sm:h-9 sm:w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 gap-3 ${pathname === to ? 'px-3 py-1 sm:p-0 bg-muted text-foreground pointer-events-none' : ''}`}
				>
					{icon}
					<span className='sm:hidden'>{label}</span>
				</Link>
			</TooltipTrigger>
			<TooltipContent side='right'>{label}</TooltipContent>
		</Tooltip>
	)
}
