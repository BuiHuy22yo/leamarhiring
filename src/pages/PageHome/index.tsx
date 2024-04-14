"use client"

import React from "react";
import {Row, Col} from 'antd'
import AppButton from '@/components/AppButton/index'
import AppSvgIcon from '@/components/AppSvgIcon/index'
import AppImages from '@/components/AppImages/index'
import url from '@/assets/images/images-home.png'
import AppCarousel from '@/components/AppCarousel/index'
import urlIcon1 from '@/assets/images/icon1.png'
import urlIcon2 from '@/assets/images/icon2.png'
import urlIcon3 from '@/assets/images/icon3.png'
import urlIcon4 from '@/assets/images/icon4.png'
import AppLogo from '@/components/AppMenu/AppLogo'
import {BrandsArray} from "@/router/index";

const PageHome = async () => {

    return (
        <>
            <div className="content-item">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <Row gutter={[40, 40]}>
                            <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
                                <h1 className="title-large color-text-primary border-bottom-primary pb-4 mb-4">
                                    Grow and scale up your company with our suite of world's top HR services.
                                </h1>
                                <p className='mb-5'>Harness the power of global talent to drive your company’s growth.
                                    Grow and scale up your
                                    company with our suite of world’s top HR services.</p>
                                <AppButton type={'primary'} className='pt-5'>
                                    <div className='flex items-center'>
                                        <span className='mr-3'>Contact us</span>
                                        <AppSvgIcon name='ArrowLongRightIcon'/>
                                    </div>
                                </AppButton>
                            </Col>
                            <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
                                <AppImages src={url.src}/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="content-item color-bg-primary">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <h1 className=" text-center mb-4">
                            Trusted by start-ups and companies worldwide.
                        </h1>
                        <AppCarousel carouselArray={BrandsArray}/>
                    </div>
                </div>
            </div>
            <div className="content-item color-bg-secondary">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <Row gutter={[24, 24]}>
                            <Col xs={24} sm={24} md={12} lg={4} xl={5} xxl={5}>
                                <div className="content-item-inner p-10 bg-white">
                                    <AppImages src={urlIcon1.src} className="max-w-[80px]"/>
                                    <h3 className='my-3'>Recruitment</h3>
                                    <p>Need top-tier talent with only 1/2 the budget you are doing? Leamar Hiring’s
                                        on-demand recruitment delivers excellence tailored to your needs.</p>
                                    <AppButton type={'primary'} className='mt-5'>
                                        <div className='flex items-center'>
                                            <span className='mr-3'>Read more</span>
                                            <AppSvgIcon name='ArrowLongRightIcon'/>
                                        </div>
                                    </AppButton>
                                </div>
                                <div className="content-item-inner mt-10 p-10 bg-white">
                                    <AppImages src={urlIcon2.src} className="max-w-[80px]"/>
                                    <h3 className='my-3'>Employer of Record Services</h3>
                                    <p>Leamar Hiring’s flexible hiring agreements enable you to match the ideal
                                        candidates to roles that suit your business requirements perfectly.</p>
                                    <AppButton type={'primary'} className='mt-5'>
                                        <div className='flex items-center'>
                                            <span className='mr-3'>Read more</span>
                                            <AppSvgIcon name='ArrowLongRightIcon'/>
                                        </div>
                                    </AppButton>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={4} xl={5} xxl={5}>
                                <div className="content-item-inner p-10 bg-white">
                                    <AppImages src={urlIcon3.src} className="max-w-[80px]"/>
                                    <h3 className='my-3'>Equipment Procedurement</h3>
                                    <p>Equip your global workforce for success with our tailored Equipment Procurement
                                        service. Our preferred pricing with leading retailers makes equipment
                                        procurement easy for both you and your team members.</p>
                                    <AppButton type={'primary'} className='mt-5'>
                                        <div className='flex items-center'>
                                            <span className='mr-3'>Read more</span>
                                            <AppSvgIcon name='ArrowLongRightIcon'/>
                                        </div>
                                    </AppButton>
                                </div>
                                <div className="content-item-inner mt-10 p-10 bg-white">
                                    <AppImages src={urlIcon4.src} className="max-w-[80px]"/>
                                    <h3 className='my-3'>On-demand Office Space</h3>
                                    <p>Need top-tier talent with only 1/2 the budget you are doing? Leamar Hiring’s
                                        on-demand recruitment delivers excellence tailored to your needs.</p>
                                    <AppButton type={'primary'} className='mt-5'>
                                        <div className='flex items-center'>
                                            <span className='mr-3'>Read more</span>
                                            <AppSvgIcon name='ArrowLongRightIcon'/>
                                        </div>
                                    </AppButton>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={16} xl={14} xxl={14} style={{display: 'flex'}}>
                                <div className="content-item-inner p-10 color-bg-primary">
                                    <AppLogo className='app-image--ur-featured-services max-w-[250px]' showTitle={false} />
                                    <h1 className='title-large my-9 pb-9 border-bottom-secondary'>Our featured services.</h1>
                                    <p className='mb-5'>We specialize in providing tailored solutions to meet your unique recruitment and
                                        HR needs. From sourcing top-tier talent to ensuring seamless HR and payroll
                                        management, our services are designed to empower your business while maintaining
                                        compliance and efficiency. Experience the Leamar Hiring difference today.</p>
                                    <AppButton className='pt-5'>
                                        <div className='flex items-center'>
                                            <span className='mr-3'>Read more</span>
                                            <AppSvgIcon name='ArrowLongRightIcon'/>
                                        </div>
                                    </AppButton>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="content-item color-bg-primary min-h-[400px]">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageHome
