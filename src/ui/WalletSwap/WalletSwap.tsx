import {
  Form,
  Input,
  Select,
} from 'antd';

import { TWalletSwap } from './types';

const WalletSwap: React.FC<TWalletSwap> = ({ label }) => {
  return (
    <Form.Item label={label}>
      <Input.Group compact>
        <Form.Item>
          <Select />
        </Form.Item>
        <Form.Item>
          <Input />
        </Form.Item>
      </Input.Group>
    </Form.Item>
  )
}

export { WalletSwap };
