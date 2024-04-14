"use client"

import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import AppGlobalHeader from '@/components/AppGlobalHeader/Index'
import AppGlobalFooter from '@/components/AppGlobalFooter/Index'
import { Background, Colors, LayoutHeight } from '@/assets/style/variables'
import { usePathname, useRouter } from 'next/navigation'

const { Header, Footer, Sider, Content } = Layout

const Style: React.CSSProperties = {
  backgroundColor: Colors.secondary_1,
  color: Colors.primary,
}

const headerStyle: React.CSSProperties = {
  backgroundColor: Background.primary,
  color: Colors.secondary_1,
  height: 'auto',
  lineHeight: 'normal'
}

const contentStyle :React.CSSProperties = {
  backgroundColor: Colors.secondary_1,
  color: Colors.secondary,
}

const footerStyle: React.CSSProperties = {
  backgroundColor: Background.secondary,
  color: Colors.secondary_1,
}

interface Props {
  children: React.ReactNode
}

const AppLayout = ({ children }: Props)=> {
  const [visible, setVisible] = useState<boolean>(false)

  const handleChangeVisible = (visible: boolean) => {
    setVisible(visible)
  }

  return (
      <>
        <div className='app-page'>
          <Layout style={Style} className='app-layout'>
            <Header style={headerStyle} className='p-0'>
              <AppGlobalHeader visible={visible} onChangeVisible={handleChangeVisible} />
            </Header>
            <Content style={contentStyle}>
              <div className='content'>
                { children }
              </div>
            </Content>
            <Footer style={footerStyle} className='p-0'>
              <AppGlobalFooter />
            </Footer>
          </Layout>
        </div>
      </>
  )
}

export default AppLayout
