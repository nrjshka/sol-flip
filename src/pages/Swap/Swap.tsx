import {
  Col,
  Form,
  Row,
} from 'antd';
import { WalletSwap } from 'ui';

const Swap = () => {
  return (
    <Form layout="vertical">
      <Row>
        <Col lg="3">
          <WalletSwap label="From:" />
        </Col>
        <Col lg="3">
          <WalletSwap label="To:" />
        </Col>
      </Row>
    </Form>
  )
}

export { Swap };
