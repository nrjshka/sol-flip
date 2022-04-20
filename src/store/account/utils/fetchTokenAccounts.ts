import {
  AccountLayout,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import {
  Connection,
  PublicKey,
} from '@solana/web3.js';

type TFetchTokenAccountsByOwner = {
  connection: Connection
  publicKey: PublicKey
}

const fetchTokenAccountsByOwner = async ({ connection, publicKey }: TFetchTokenAccountsByOwner) => {
  try {
    const accounts = await connection.getTokenAccountsByOwner(publicKey, {
      programId: TOKEN_PROGRAM_ID,
    })

    return accounts.value.map((account) => AccountLayout.decode(account.account.data))
  } catch (e) {
    console.error('Failed to fetch token accounts by owner')

    return []
  }
}

export { fetchTokenAccountsByOwner };
