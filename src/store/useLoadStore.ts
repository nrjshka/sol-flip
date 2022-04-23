import { useAccount } from 'store';

import { useToken } from './token';

function useLoadStore() {
  useAccount()
  useToken()
}

export { useLoadStore };
