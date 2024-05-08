"use client"

import {Row, Col} from 'antd'
import AppSvgIcon from '@/components/AppSvgIcon/index'
import AppLogo from '@/components/AppMenu/AppLogo'
import AppMenu from '@/components/AppMenu/AppMenu'
import {FooterGeneral, FooterServices, FooterFollowUs} from '@/router/index'
import {useRouter} from "next/navigation";
import url from '@/assets/icons/svg/logo_hd_global_career_footer.png'

const AppGlobalFooter = () => {
    const router = useRouter();

    const handleClick = (url = '') => {
        router.push('/')
    }

    return (
        <>
            <div className='footer'>
                <div className='inner-footer'>
                    <div className='app-footer-top'>
                        <div className='app-container-md mx-auto px-5'>
                            <div className='inner-footer-top'>
                                <Row gutter={[40, 40]}>
                                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                        <AppLogo className='app-logo-footer' showTitle={false} src={url.src}/>
                                        <div className='mt-6'>
                                            <p>Remote work opens the doors to a worldwide talent pool, allowing
                                                businesses to recruit top professionals regardless of their physical
                                                location. This newfound flexibility fosters diversity and high
                                                performance within teams. We are here to bring you to the forefront of
                                                accessing a global talent pool</p>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                        <div className='title title-general mb-4'>Quick Links</div>
                                        <AppMenu menu={FooterGeneral} mode={'vertical'}
                                                 className='app-menu-footer app-menu-footer-general'/>
                                    </Col>
                                    <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                                        <div className='title title-follow-us mb-4'>Information</div>
                                        <AppMenu menu={FooterFollowUs} mode={'vertical'}
                                                 className='app-menu-footer app-menu-footer-follow-us'/>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className='app-footer-bottom '>
                        <div className='app-container-md mx-auto px-5'>
                            <div className='inner-footer-bottom flex items-center'>
                                <span>Copyright © 2024</span>
                                <span className='color-text-primary mx-2'>HD Global Career</span>
                                <span className='ml-auto'>All Rights Reserved</span>
                            </div>
                        </div>
                    </div>
                    {/*<div className='app-footer-back-to-top flex items-center justify-center cursor-pointer'*/}
                    {/*     onClick={() => handleClick()}>*/}
                    {/*    <AppSvgIcon name='ChevronUpIcon'/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}

export default AppGlobalFooter
