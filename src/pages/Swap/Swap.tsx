import {
  Col,
  Form,
  Row,
} from 'antd';
import {
  getRawTokensList,
  useTokenStore,
} from 'store';
import { WalletSwap } from 'ui';

const Swap = () => {
  const { official } = useTokenStore(getRawTokensList)

  return (
    <Form layout="vertical" size="large">
      <Row>
        <Col lg="8" offset="4">
          <WalletSwap label="From:" tokens={official} />
        </Col>
        <Col lg="8">
          <WalletSwap label="To:" tokens={official} />
        </Col>
      </Row>
    </Form>
  )
}

export { Swap };
