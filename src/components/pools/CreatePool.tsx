import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function CreatePool(): JSX.Element {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Create Funding Pool</CardTitle>
        <CardDescription>
          Fill out the form to create a new funding pool.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pool-name">Pool Name</Label>
              <Input id="pool-name" placeholder="Enter pool name" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="pool-description">Description</Label>
            <Textarea
              className="min-h-[100px]"
              id="pool-description"
              placeholder="Enter a description for the pool"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pool-owner">Owner</Label>
              <Input id="pool-owner" placeholder="Enter pool owner" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pool-amount">Amount</Label>
              <Input id="pool-amount" placeholder="Enter pool amount" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit">Create Pool</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
