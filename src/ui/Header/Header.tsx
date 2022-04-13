import React from 'react'

import { PageHeader } from 'antd'
import { WalletButton } from '../WalletButton'

const Header: React.FC = () => <PageHeader title="Solana Flip Coins" extra={[<WalletButton />]} />

export { Header }
