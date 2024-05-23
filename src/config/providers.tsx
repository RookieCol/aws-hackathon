import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { config } from '@/config/RainbowkitConfig'
export default function Providers({
	children
}: {
	children: React.ReactNode
}): JSX.Element {
	const queryClient = new QueryClient()

	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider
					coolMode
					initialChain={config.chains[0]}
					theme={darkTheme({
						borderRadius: 'medium',
						accentColor: '#04aa04',
						fontStack: 'rounded',
						overlayBlur: 'small'
					})}
				>
					{children}
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	)
}
