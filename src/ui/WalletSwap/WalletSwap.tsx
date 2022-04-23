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
      <Input.Group compact>
        <Form.Item>
          <Select options={options} />
        </Form.Item>
        <Form.Item>
          <Input />
        </Form.Item>
      </Input.Group>
    </Form.Item>
  )
}

export { WalletSwap };
