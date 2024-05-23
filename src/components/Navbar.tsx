import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { PanelLeft } from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Navbar() {
	return (
		<header className='sticky top-0 z-30 flex h-14 items-center justify-between sm:justify-end gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
			<Sheet>
				<SheetTrigger asChild>
					<Button size='icon' variant='outline' className='sm:hidden'>
						<PanelLeft className='h-5 w-5' />
						<span className='sr-only'>Toggle Menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='left' className='sm:max-w-xs flex justify-center'>
					<Sidebar />
				</SheetContent>
			</Sheet>
			<div className='justify-self-end'>
				<ConnectButton />
			</div>
		</header>
	)
}
