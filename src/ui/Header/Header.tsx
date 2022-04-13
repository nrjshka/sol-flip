import React from 'react'

import { PageHeader, Button } from 'antd'

const Header: React.FC = () => <PageHeader title="Solana Flip Coins" extra={[<Button>Connect Account</Button>]} />

export { Header }
