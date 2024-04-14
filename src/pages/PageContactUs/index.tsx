"use client"

import React from "react";
import {Col, Row} from "antd";
import AppSvgIcon from '@/components/AppSvgIcon/index'

const PageContactUs = async () => {

    return (
        <>
            <div className="content-item">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <h1 className="title-large color-text-primary border-bottom-primary pb-8 mb-8">
                            Contact Us
                        </h1>
                        <Row gutter={[40, 40]} className='pt-10'>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                <div className="pr-10">
                                    <p className='mb-5'>Have questions, suggestions, or just want to say hello? We’d
                                        love to hear from you! Our team is here to assist you. Don’t hesitate to reach
                                        out for any reason.</p>
                                    <div className='flex items-center mb-3'>
                                        <AppSvgIcon name='HomeIcon' className='color-text-primary'/>
                                        <p className='ml-2'>Address</p>
                                    </div>
                                    <div className='flex items-center mb-3'>
                                        <AppSvgIcon name='PhoneIcon' className='color-text-primary'/>
                                        <p className='ml-2'>Hotline</p>
                                    </div>
                                    <div className='flex items-center mb-3'>
                                        <AppSvgIcon name='EnvelopeIcon' className='color-text-primary'/>
                                        <p className='ml-2'>contact@leamarhiring.com</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <AppSvgIcon name='GlobeAltIcon' className='color-text-primary'/>
                                        <p className='ml-2'>www.leamarhiring.com</p>
                                    </div>
                                    <div className='social-icons'></div>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>

                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageContactUs
