"use client"

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import AppLogo from '@/components/AppMenu/AppLogo'
import AppMenu from '@/components/AppMenu/AppMenu'
import AppButton from '@/components/AppButton'
import { AppMenuArray } from '@/router/index'

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
        <div className='app-container mx-auto px-5'>
          <div className='inner-header flex items-center justify-center'>
            <AppLogo className='app-logo-header mr-auto'/>
            <AppMenu menu={AppMenuArray} className='app-menu-header lg:mr-4' mode={'vertical-right'}/>
            <AppButton>Apply as Talent</AppButton>
            {/*<div className='app-menu-trigger' onClick={ handleClickVisible }>*/}
            {/*  {visible ? (*/}
            {/*    <MenuUnfoldOutlined className='trigger' />*/}
            {/*  ) : (*/}
            {/*    <MenuFoldOutlined className='trigger' />*/}
            {/*  )}*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default AppGlobalHeader
