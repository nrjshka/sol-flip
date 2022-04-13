import { useWallet } from '@solana/wallet-adapter-react'
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui'

require('@solana/wallet-adapter-react-ui/styles.css')

const WalletButton = () => {
  const { publicKey } = useWallet()

  const isConnected = !!publicKey

  return <WalletModalProvider>{isConnected ? <WalletDisconnectButton /> : <WalletMultiButton />}</WalletModalProvider>
}

export { WalletButton }
