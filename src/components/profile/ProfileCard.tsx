import { CopyIcon, UserIcon, WalletIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function ProfileCard(): JSX.Element {
  return (
    <Card>
      <CardContent className="grid gap-6">
        <div className="flex items-center gap-4 mt-4">
          <div className="grid gap-1.5">
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Software Engineer
            </p>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <WalletIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">12 Pools</span>
            </div>
            <div className="flex items-center gap-1.5">
              <UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">0x123...456</span>
              <Button className="rounded-full" size="icon" variant="ghost">
                <CopyIcon className="h-4 w-4" />
                <span className="sr-only">Copy owner address</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          John is a software engineer with a passion for building innovative
          products. He has been with the company for 5 years and has contributed
          to the development of several successful projects.
        </div>
      </CardContent>
    </Card>
  )
}
