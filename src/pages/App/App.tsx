import React from 'react'

import ProLayout, { PageContainer } from '@ant-design/pro-layout'

import styles from './App.module.scss'

import { Header } from '../../ui'

const App = () => (
  <div className={styles.appContainer}>
    <ProLayout>
      <PageContainer pageHeaderRender={false}>
        <Header />
      </PageContainer>
    </ProLayout>
  </div>
)

export { App }
