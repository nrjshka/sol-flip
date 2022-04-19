import React from 'react'

import ProLayout, { PageContainer } from '@ant-design/pro-layout'

import styles from './App.module.scss'

import { Header } from '../../ui'
import { Swap } from '../Swap'

const App = () => (
  <div className={styles.appContainer}>
    <ProLayout>
      <PageContainer pageHeaderRender={false}>
        <Header />
        <Swap />
      </PageContainer>
    </ProLayout>
  </div>
)

export { App }
