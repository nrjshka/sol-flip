import {
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react';

// const buffer = struct([
//   publicKey('mint'),
//   publicKey('owner'),
//   u64('amount'),
//   u32('delegateOption'),
//   publicKey('delegate'),
//   u8('state'),
//   u32('isNativeOption'),
//   u64('isNative'),
//   u64('delegatedAmount'),
//   u32('closeAuthorityOption'),
//   publicKey('closeAuthority'),
// ])

const Swap = () => {
  const { connection } = useConnection()
  const { publicKey } = useWallet()

  // const data = useSwap()

  // console.log('data', data)

  // console.log('publicKey', publicKey)
  // console.log('TOKEN_PROGRAM_ID', TOKEN_PROGRAM_ID)
  // console.log(connection)

  // useEffect(() => {
  //   if (publicKey) {
  //     connection.getAccountInfo(publicKey).then(console.log)
  //     connection.getTokenAccountsByOwner(publicKey, { programId: TOKEN_PROGRAM_ID }).then((data) => {
  //       for (let { pubkey, account } of data.value) {
  //         console.log('pubkey', pubkey)
  //         console.log('account', account)
  //         const rawResult = account.data
  //         console.log('rawResult', rawResult)

  //         const { mint, owner, amount } = buffer.decode(rawResult)
  //         const associatedTokenAddress = getAssociatedTokenAddress(mint, owner, true, TOKEN_PROGRAM_ID)

  //         associatedTokenAddress.then((data) => {
  //           console.log({
  //             publicKey: pubkey,
  //             mint,
  //             isAssociated: data.equals(pubkey),
  //             amount,
  //             isNative: false,
  //           })
  //         })
  //       }
  //     })
  //   }
  // }, [connection, publicKey])

  return <div>Swap</div>
}

export { Swap };
