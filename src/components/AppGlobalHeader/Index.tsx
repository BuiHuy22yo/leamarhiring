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
        <div className='app-container-header mx-auto px-5'>
          <Row gutter={[40, 40]}>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
              <div className='inner-header flex items-center'>
                <AppLogo className='app-logo-header mr-auto'/>
              </div>
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
              <div className='inner-header flex items-center'>
              <AppMenu menu={AppMenuArray} className='app-menu-header lg:mr-4' mode={'horizontal'}/>
              <AppButton type={'primary'} className='app-btn-header'>Contact now</AppButton>
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
