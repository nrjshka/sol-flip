import {
  Col,
  Form,
  Row,
} from 'antd';
import {
  getTokensList,
  useTokenStore,
} from 'store';
import { WalletSwap } from 'ui';

const Swap = () => {
  const tokensListSet = useTokenStore(getTokensList)
  const tokensList = Array.from(tokensListSet)

  return (
    <Form layout="vertical" size="large">
      <Row>
        <Col lg="8" offset="4">
          <WalletSwap label="From:" tokens={tokensList} />
        </Col>
        <Col lg="8">
          <WalletSwap label="To:" tokens={tokensList} />
        </Col>
      </Row>
    </Form>
  )
}

export { Swap };
