import React, { useState } from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Loader } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

export default function CreateProfileCard(): JSX.Element {
	const { toast } = useToast()
	const [profile, setProfile] = useState({
		name: '',
		email: '',
		bio: ''
	})
	const [loading, setLoading] = useState(false)

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = event.target
		setProfile(prevProfile => ({
			...prevProfile,
			[id]: value
		}))
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log('Profile Created:', profile)
		try {
			setLoading(true)
			toast({
				title: 'Profile Created',
				description: 'Your profile has been created successfully.'
			})
			setLoading(false)
		} catch (error) {
			console.error(error)
			setLoading(false)
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'Something went wrong.'
			})
		}
	}

	return (
		<Card x-chunk='dashboard-06-chunk-0'>
			<CardHeader>
				<CardTitle>Create Your Profile</CardTitle>
				<CardDescription>
					You need a profile in order to create pools in this dapp.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className='grid gap-4' onSubmit={handleSubmit}>
					<div className='grid grid-cols-2 gap-4'>
						<div className='space-y-2'>
							<Label htmlFor='name'>Name</Label>
							<Input
								id='name'
								placeholder='Enter your name'
								value={profile.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='email'>Email</Label>
							<Input
								id='email'
								placeholder='Enter your email'
								type='email'
								value={profile.email}
								onChange={handleChange}
								required
							/>
						</div>
					</div>
					<div className='space-y-2'>
						<Label htmlFor='bio'>Bio</Label>
						<Textarea
							className='min-h-[100px]'
							id='bio'
							required
							placeholder='Enter your bio'
							onChange={handleChange}
						/>
					</div>
					<Button className='ml-auto' disabled={loading} type='submit'>
						{loading ? (
							<Loader className='mr-2 h-4 w-4 animate-spin' />
						) : (
							'Create Profile'
						)}
					</Button>
				</form>
			</CardContent>
		</Card>
	)
}
