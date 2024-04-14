"use client"

import React from "react";
import {Col, Row} from "antd";
import AppImages from '@/components/AppImages/index'
import {BrandsArray} from "@/router/index";
import urlServicesAll from '@/assets/images/services-all-photo.jpg'
import urlServiceItem from '@/assets/images/service-photo.jpg'
import AppButton from '@/components/AppButton/index'
import AppSvgIcon from '@/components/AppSvgIcon/index'

const PageServices = async () => {

    return (
        <>
            <div className="content-item color-bg-primary">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <Row gutter={[40, 40]} className='pt-10'>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} >
                                <div className="pr-6">
                                    <h1 className="title-large mb-8">
                                        Our Services
                                    </h1>
                                    <p className='mb-8'>Using technology, TalentHero is able to apply a comprehensive,
                                        data-driven approach when sourcing prospects for employers seeking to hire
                                        outstanding offshore talent. Our Employer of Record services provides a path for
                                        companies to manage their new-hires while remaining fully compliant with local
                                        regulations.</p>
                                    <p className='mb-8'>But the work doesn’t stop there.</p>
                                    <p>We provide modular office-space solutions catered to your needs and provide
                                        significant discounts on equipment through strategic partnerships. Think of us
                                        as
                                        your one-stop-shop for all your offshoring needs.</p>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                <AppImages src={urlServicesAll.src}/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="content-item">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <Row gutter={[40, 40]} className='pt-10'>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                <AppImages src={urlServiceItem.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} style={{display: 'flex', alignItems: 'center'}}>
                                <div className="pl-6">
                                    <h1 className="mb-8 color-text-primary">
                                        Employer of Record Services
                                    </h1>
                                    <p className='mb-5'>Our Employer of Record services allow you to have a truly global
                                        workforce, and our diverse team of seasoned, multi-lingual recruiters find you
                                        the best talent from all 7 continents.</p>
                                    <AppButton className='mt-5 app-btn-border-primary'>
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
            <div className="content-item color-bg-primary">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <Row gutter={[40, 40]} className='pt-10'>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} style={{display: 'flex', alignItems: 'center'}}>
                                <div className="pr-6">
                                    <h1 className="mb-8">
                                        Recruitment
                                    </h1>
                                    <p className='mb-5'>Our Employer of Record services allow you to have a truly global
                                        workforce, and our diverse team of seasoned, multi-lingual recruiters find you
                                        the best talent from all 7 continents.</p>
                                    <AppButton className='mt-5 app-btn-border-secondary'>
                                        <div className='flex items-center'>
                                            <span className='mr-3'>Read more</span>
                                            <AppSvgIcon name='ArrowLongRightIcon'/>
                                        </div>
                                    </AppButton>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                <AppImages src={urlServiceItem.src}/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="content-item">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <Row gutter={[40, 40]} className='pt-10'>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                <AppImages src={urlServiceItem.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} style={{display: 'flex', alignItems: 'center'}}>
                                <div className="pl-6">
                                    <h1 className="mb-8 color-text-primary">
                                        Payroll Outsourcing Services
                                    </h1>
                                    <p className='mb-5'>Our Employer of Record services allow you to have a truly global
                                        workforce, and our diverse team of seasoned, multi-lingual recruiters find you
                                        the best talent from all 7 continents.</p>
                                    <AppButton className='mt-5 app-btn-border-primary'>
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
            <div className="content-item color-bg-primary">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <Row gutter={[40, 40]} className='pt-10'>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} style={{display: 'flex', alignItems: 'center'}}>
                                <div className="pr-6">
                                    <h1 className="mb-8">
                                        Equipment Procurement
                                    </h1>
                                    <p className='mb-5'>Our Employer of Record services allow you to have a truly global
                                        workforce, and our diverse team of seasoned, multi-lingual recruiters find you
                                        the best talent from all 7 continents.</p>
                                    <AppButton className='mt-5 app-btn-border-secondary'>
                                        <div className='flex items-center'>
                                            <span className='mr-3'>Read more</span>
                                            <AppSvgIcon name='ArrowLongRightIcon'/>
                                        </div>
                                    </AppButton>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                <AppImages src={urlServiceItem.src}/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="content-item">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <Row gutter={[40, 40]} className='pt-10'>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                <AppImages src={urlServiceItem.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} style={{display: 'flex', alignItems: 'center'}}>
                                <div className="pl-6">
                                    <h1 className=" mb-8 color-text-primary">
                                        On-Demand Office Space
                                    </h1>
                                    <p className='mb-5'>Our Employer of Record services allow you to have a truly global
                                        workforce, and our diverse team of seasoned, multi-lingual recruiters find you
                                        the best talent from all 7 continents.</p>
                                    <AppButton className='mt-5 app-btn-border-primary'>
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
            <div className="content-item">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <h1 className="text-center color-text-primary mb-4">
                            Trusted by Leading Brands
                        </h1>
                        <Row gutter={[40, 40]}>
                            {BrandsArray && BrandsArray.length > 0 && BrandsArray.map((item, index) => (
                                <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                                    <div className='brands-item' key={index}>
                                        <AppImages src={item.src}/>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageServices
