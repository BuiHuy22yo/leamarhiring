"use client"

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import AppLogo from '@/components/AppMenu/AppLogo'
import AppMenu from '@/components/AppMenu/AppMenu'
import AppButton from '@/components/AppButton'
import { AppMenuArray } from '@/router/index'
import {Row, Col} from 'antd'
import {calc} from "antd/es/theme/internal";

interface Props {
  visible: boolean
  onChangeVisible: (value: boolean) => void
}

const defaultProps = {
  visible: false,
}


const AppGlobalHeader = ({ ...props }: Props) => {
  const { visible, onChangeVisible } = { ...defaultProps, ...props }

  const handleClickVisible = () => {
    onChangeVisible(!visible)
  }

  return (
    <>
      <div className='header'>
        <div className='app-container-md-header mx-auto px-5'>
          <Row gutter={[40, 40]}>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <div className='inner-header flex items-center'>
                <AppLogo className='app-logo-header mr-auto'/>
              </div>
            </Col>
            <Col xs={18} sm={18} md={18} lg={18} xl={18} xxl={18}>
              <div className='inner-header flex items-center'>
              <AppMenu menu={AppMenuArray} className='app-menu-header lg:mr-4' mode={'horizontal'}/>
                <a href="#contact-us">
                  <AppButton type={'primary'} className='app-btn-header'>Contact now</AppButton>
                </a>
                {/*<div className='app-menu-trigger' onClick={ handleClickVisible }>*/}
                {/*  {visible ? (*/}
                {/*    <MenuUnfoldOutlined className='trigger' />*/}
                {/*  ) : (*/}
                {/*    <MenuFoldOutlined className='trigger' />*/}
                {/*  )}*/}
                {/*</div>*/}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default AppGlobalHeader
