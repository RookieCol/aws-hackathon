import CreateProfileCard from '@/components/profile/CreateProfile'
import ProfileCard from '@/components/profile/ProfileCard'

export function Profile(): JSX.Element {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      {/* // TODO: Profile ? <Profile /> : <CreateProfileCard /> */}
      <CreateProfileCard />

      {/* Sample profile */}
      <ProfileCard />
    </main>
  )
}
