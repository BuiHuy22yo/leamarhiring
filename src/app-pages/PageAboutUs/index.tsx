"use client"

import React from "react";
import {Row, Col} from 'antd'
import AppButton from '@/components/AppButton/index'
import url from '@/assets/images/images-about-us.jpg'
import AppSvgIcon from '@/components/AppSvgIcon/index'
import AppImages from '@/components/AppImages/index'
import { BrandsArray } from "@/router/index";

const PageAboutUs =  () => {

    return (
        <>
            <div className="content-item">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <h1 className="title-large color-text-primary border-bottom-primary pb-8 mb-8">
                            About Us
                        </h1>
                        <Row gutter={[40, 40]} className='pt-10'>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                <div className="pr-10">
                                    <p className='mb-5'>Leamar Hiring is a premier on-demand recruitment service & HR
                                        provider empowering businesses to grow and scale efficiently. With a
                                        comprehensive
                                        suite of top-notch services, we specialize in helping companies navigate the
                                        complexities of talent acquisition, development, and retention. Our tailored
                                        approach ensures clients receive personalized solutions to meet their unique
                                        needs
                                        and goals. Whether you’re a startup looking to build a dynamic team or an
                                        established enterprise seeking to expand your workforce, Leamar Hiring is your
                                        trusted partner every step of the way.</p>
                                    <AppButton type={'primary'} className='pt-5'>
                                        <div className='flex items-center'>
                                            <span className='mr-3'>Contact us</span>
                                            <AppSvgIcon name='ArrowLongRightIcon'/>
                                        </div>
                                    </AppButton>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                <AppImages src={url.src}/>
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
                                <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6} key={index}>
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

export default PageAboutUs
