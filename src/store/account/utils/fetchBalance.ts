import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from '@solana/web3.js';

type TFetchBalance = {
  connection: Connection
  publicKey: PublicKey
}

const fetchBalance = async ({ connection, publicKey }: TFetchBalance) => {
  try {
    const balanceRaw = await connection.getBalance(publicKey, 'confirmed')

    return balanceRaw / LAMPORTS_PER_SOL
  } catch (e) {
    console.error('Error while fetching balance')

    return 0
  }
}

export { fetchBalance };
