import React from 'react';

import { useLoadStore } from 'store';
import { Header } from 'ui';

import ProLayout, { PageContainer } from '@ant-design/pro-layout';

import { Swap } from '../Swap';
import styles from './App.module.scss';

const App = () => {
  useLoadStore()

  return (
    <div className={styles.appContainer}>
      <ProLayout>
        <PageContainer pageHeaderRender={false}>
          <Header />
          <Swap />
        </PageContainer>
      </ProLayout>
    </div>
  )
}

export { App };
