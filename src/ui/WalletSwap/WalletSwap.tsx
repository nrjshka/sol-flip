import {
  Form,
  Input,
  Select,
} from 'antd';

import { TWalletSwap } from './types';

const WalletSwap: React.FC<TWalletSwap> = ({ label, tokens }) => {
  const options = tokens.map((token) => ({
    value: token.name,
  }))

  return (
    <Form.Item label={label}>
      <Input addonBefore={<Select options={options} onSelect={() => {}} />} />
    </Form.Item>
  )
}

export { WalletSwap };
