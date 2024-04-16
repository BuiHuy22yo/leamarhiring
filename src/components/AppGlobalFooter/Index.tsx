"use client"

import { Row, Col } from 'antd'
import AppSvgIcon from '@/components/AppSvgIcon/index'
import AppLogo from '@/components/AppMenu/AppLogo'
import AppMenu from '@/components/AppMenu/AppMenu'
import { FooterGeneral, FooterServices, FooterFollowUs } from '@/router/index'
import {useRouter} from "next/navigation";

const AppGlobalFooter = () => {
  const router = useRouter();

  const handleClick = (url = '') => {
    router.push('/')
  }

  return (
    <>
      <div className='footer'>
        <div className='app-container mx-auto px-5'>
          <div className='inner-footer'>
            <div className='app-footer-top'>
              <Row gutter={[40, 40]}>
                <Col xs={24} sm={24} md={12} lg={8}  xl={8} xxl={8}>
                  <AppLogo className='app-logo-footer' showTitle={false} />
                  <div className='mt-6'>
                    <p>The future of remote work is primed to see continued growth and evolution. We are the solution that brings you at the forefront of this tectonic shift in workforce management.</p>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={3}  xl={3} xxl={3}>
                  <div className='title title-general mb-4'>General</div>
                  <AppMenu menu={FooterGeneral} mode={'vertical'} className='app-menu-footer app-menu-footer-general'/>
                </Col>
                <Col xs={24} sm={24} md={12} lg={7}  xl={7} xxl={7}>
                  <div className='title title-services mb-4'>Services</div>
                  <AppMenu menu={FooterServices} mode={'vertical'} className='app-menu-footer app-menu-footer-services'/>
                </Col>
                <Col xs={24} sm={24} md={12} lg={5}  xl={5} xxl={5}>
                  <div className='title title-follow-us mb-4'>Follow Us</div>
                  <AppMenu menu={FooterFollowUs} mode={'vertical'} className='app-menu-footer app-menu-footer-follow-us'/>
                </Col>
              </Row>
            </div>
            <div className='app-footer-bottom flex items-center justify-center'>Copyright © 2024 LeamarHiring</div>
            <div className='app-footer-back-to-top flex items-center justify-center cursor-pointer' onClick={() => handleClick()}>
              <AppSvgIcon name='ChevronUpIcon'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppGlobalFooter
