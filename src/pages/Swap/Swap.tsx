import { useEffect } from 'react';

import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import {
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react';

import {
  publicKey,
  struct,
  u32,
  u64,
  u8,
} from '../../lib';

const buffer = struct([
  publicKey('mint'),
  publicKey('owner'),
  u64('amount'),
  u32('delegateOption'),
  publicKey('delegate'),
  u8('state'),
  u32('isNativeOption'),
  u64('isNative'),
  u64('delegatedAmount'),
  u32('closeAuthorityOption'),
  publicKey('closeAuthority'),
])

const Swap = () => {
  const { connection } = useConnection()
  const { publicKey } = useWallet()

  console.log('publicKey', publicKey)
  console.log('TOKEN_PROGRAM_ID', TOKEN_PROGRAM_ID)
  console.log(connection)

  useEffect(() => {
    if (publicKey) {
      connection.getAccountInfo(publicKey).then(console.log)
      connection.getTokenAccountsByOwner(publicKey, { programId: TOKEN_PROGRAM_ID }).then((data) => {
        for (let { pubkey, account } of data.value) {
          console.log('pubkey', pubkey)
          console.log('account', account)
          const rawResult = account.data
          console.log('rawResult', rawResult)
          console.log('result', buffer.decode(rawResult))
          // Token.getAssociatedTokenAddress(ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, mint, owner, true)
        }
      })

      // const rawResult = SPL_ACCOUNT_LAYOUT.decode(account.data)
      // const { mint, amount } = rawResult
      // const associatedTokenAddress = await Spl.getAssociatedTokenAccount({ mint, owner })
    }
  }, [connection, publicKey])

  return <div>Swap</div>
}

export { Swap };
