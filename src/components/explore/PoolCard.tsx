import { DollarSignIcon, UserIcon } from 'lucide-react'
import PostulateModal from './PostulateModal'

export default function PoolCard({
	name,
	description,
	amount,
	owner
}: {
	name: string
	description: string
	amount: number
	owner: string
}) {
	return (
		<div className='grid grid-cols-[1fr_auto] items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950'>
			<div>
				<h4 className='text-lg font-semibold'>{name}</h4>
				<p className='text-sm text-gray-500 dark:text-gray-400'>
					{description}
				</p>
				<div className='flex items-center gap-2 mt-2'>
					<UserIcon className='h-4 w-4 text-gray-500 dark:text-gray-400' />
					<span className='text-sm text-gray-500 dark:text-gray-400'>
						{owner}
					</span>
					<DollarSignIcon className='h-4 w-4 text-gray-500 dark:text-gray-400' />
					<span className='text-sm text-gray-500 dark:text-gray-400'>
						${Number(amount).toLocaleString()}
					</span>
				</div>
			</div>
			<PostulateModal />
		</div>
	)
}
