import PoolCard from '@/components/explore/PoolCard'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Explore(): JSX.Element {
  return (
    <main className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Funding Pools</CardTitle>
          <CardDescription>
            View and postulate on available funding pools.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PoolCard
              name="NFT Staking Pool"
              description="Earn rewards by staking your NFTs."
              amount={50000}
              owner="0x789...012"
            />
            <PoolCard
              name="NFT Staking Pool"
              description="Earn rewards by staking your NFTs."
              amount={50000}
              owner="0x789...012"
            />
            <PoolCard
              name="NFT Staking Pool"
              description="Earn rewards by staking your NFTs."
              amount={50000}
              owner="0x789...012"
            />
            <PoolCard
              name="NFT Staking Pool"
              description="Earn rewards by staking your NFTs."
              amount={50000}
              owner="0x789...012"
            />
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
