import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { celo, celoAlfajores } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'FoodChain',
  projectId: import.meta.env.VITE_WC_PROJECT_ID,
  chains: [celoAlfajores, celo],
})
