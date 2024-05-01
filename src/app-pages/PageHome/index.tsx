"use client"

import React from "react";
import {Form, Row, Col} from 'antd'
import type {CollapseProps} from 'antd';
import {Collapse} from 'antd';
import AppButton from '@/components/AppButton/index'
import AppSvgIcon from '@/components/AppSvgIcon/index'
import AppImages from '@/components/AppImages/index'
import AppInput from '@/components/AppInput/index'
import url from '@/assets/images/home-1.png'
import AppCarousel from '@/components/AppCarousel/index'
import urlIcon1 from '@/assets/images/icon1.png'
import urlIcon2 from '@/assets/images/icon2.png'
import urlIcon3 from '@/assets/images/icon3.png'
import urlIcon4 from '@/assets/images/icon4.png'
import AppLogo from '@/components/AppMenu/AppLogo'
import {BrandsArray} from "@/router/index";
import urlAbout from '@/assets/images/about.png'
import urlAbout_1 from '@/assets/images/about-1.png'
import urlAbout_2 from '@/assets/images/about-2.png'
import urlAboutDecorate_1 from '@/assets/images/about-decorate-1.png'
import urlAboutDecorate_2 from '@/assets/images/about-decorate-2.png'
import urlServices_1 from '@/assets/images/services-1.png'
import urlServices_2 from '@/assets/images/services-2.png'
import urlServices_3 from '@/assets/images/services-3.png'
import urlWhyUs from '@/assets/images/why-us.png'
import urlBrands from '@/assets/images/brands.png'
import urlPhone from '@/assets/images/phone.png'
import urlEmail from '@/assets/images/email.png'
import urlBackground from '@/assets/images/background-contact.png'
import urlEmployment from '@/assets/images/employment.png'
import urlCarouselItem_1 from '@/assets/images/carouselItem-1.png'
import urlCarouselItem_2 from '@/assets/images/carouselItem-2.png'
import urlCarouselItem_3 from '@/assets/images/carouselItem-3.png'
import urlCarouselItem_4 from '@/assets/images/carouselItem-2.png'
import urlEllipse from '@/assets/images/ellipse.png'
import urlContactDecorate_1 from '@/assets/images/contact-decorate-1.png'
import urlContactDecorate_2 from '@/assets/images/contact-decorate-2.png'

const PageHome = () => {
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Unlocking Your Workforce Potential with HD Global Career',
            children: <p>Whether you’re a small startup or a global corporation, HD Global Career is here to help you
                unlock the full potential of your workforce. Let’s embark on this journey together and redefine what’s
                possible for your business.</p>
        },
        {
            key: '2',
            label: 'Top Headhunters: Bridging Talent and Global Companies',
            children: <p>Whether you’re a small startup or a global corporation, HD Global Career is here to help you
                unlock the full potential of your workforce. Let’s embark on this journey together and redefine what’s
                possible for your business.</p>
        },
        {
            key: '3',
            label: `Contact Us to Elevate Your Organization's Success Today`,
            children: <p>Whether you’re a small startup or a global corporation, HD Global Career is here to help you
                unlock the full potential of your workforce. Let’s embark on this journey together and redefine what’s
                possible for your business.</p>
        }
    ]
    const carouselArray = [
        {
            urlImage: urlCarouselItem_1.src,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit1',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...'
        },
        {
            urlImage: urlCarouselItem_2.src,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit1',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...'
        },
        {
            urlImage: urlCarouselItem_3.src,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit1',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...'
        },
        {
            urlImage: urlCarouselItem_4.src,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit1',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...'
        }
    ]

    const [form] = Form.useForm()

    const onFinish = async (values: any) => {
        const params = {
            ...values,
        }
        console.log('params', params)
    }

    return (
        <>
            <div className="content-item color-bg-primary">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <Row gutter={[40, 40]}>
                            <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11}
                                 style={{display: 'flex', alignItems: 'center'}}>
                                <div className="">
                                    <h1 className="title-large pb-4 mb-4 relative">
                                        HD Global Career helps people connect the world.
                                        <AppImages src={urlEllipse.src} className='ellipse ellipse-home'/>
                                    </h1>
                                    <p className='description-large mb-4'>Our personalized approach ensures tailored
                                        solutions for each
                                        individual, fostering success on a global scale. Join us to unlock your
                                        potential
                                        and connect with the world.
                                    </p>
                                    <a href='#about-us'>
                                    <AppButton className='pt-4 app-btn-border-primary'>
                                        <div className='flex items-center'>
                                            <span className='mr-3'>Get Started</span>
                                            <AppSvgIcon name='ChevronDownIcon'/>
                                        </div>
                                    </AppButton>
                                    </a>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={13} xl={13} xxl={13} style={{textAlign: 'end'}}>
                                <AppImages src={url.src}/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div id='about-us' className="content-item">
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper content-item-wrapper-relative">
                        <Row gutter={[40, 40]}>
                            <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
                                <h1 className="mb-3 mt-3 relative">
                                    About us
                                    <AppImages src={urlEllipse.src} className='ellipse ellipse-about'/>
                                </h1>
                                <p className='mb-10'>HD Global Career is a headhunting agency to help
                                    global organizations increase employee engagement and quickly hire top talent in the
                                    tech market
                                </p>
                                <div className='about-wrapper pt-7'>
                                    <div className='about-wrapper-item flex mb-8'>
                                        <div className='item-images mr-6'>
                                            <AppImages src={urlAbout_1.src} className='w-[30px] h-[30px]'/>
                                        </div>
                                        <div className='inner-item'>
                                            <h3 className='mb-2 font-medium color-primary-title'>Understanding
                                                Organizational Success</h3>
                                            <p>At HD Global Career, we acknowledge that the essence of every thriving
                                                organization lies within its people.</p>
                                        </div>
                                    </div>
                                    <div className='about-wrapper-item flex'>
                                        <div className='item-images mr-6'>
                                            <AppImages src={urlAbout_2.src} className='w-[30px] h-[30px]'/>
                                        </div>
                                        <div className='inner-item'>
                                            <h3 className='mb-2 font-medium color-primary-title'>Empowering
                                                Organizational Vitality</h3>
                                            <p>As your dedicated Human Resources partner, we strive to enhance your
                                                company’s vitality by providing tailored solutions that empower your
                                                workforce and drive organizational success.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14} style={{textAlign: 'end'}}>
                                <AppImages src={urlAbout.src}/>
                            </Col>
                        </Row>
                        <AppImages src={urlAboutDecorate_1.src} className='decorate-1-about'/>
                        <AppImages src={urlAboutDecorate_2.src} className='decorate-2-about'/>
                    </div>
                </div>
            </div>
            <div id='services' className="content-item" style={{marginTop: '0'}}>
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <h1 className="text-center mb-3 mt-2 ">
                            <span className='relative'>Our Services
                            <AppImages src={urlEllipse.src} className='ellipse ellipse-service'/>
                            </span>
                        </h1>
                        <Row gutter={[29, 29]} style={{marginTop: '84px'}}>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}
                                 style={{display: 'flex'}}>
                                <div className='services-wrapper'>
                                    <div className='item-images'>
                                        <AppImages src={urlServices_1.src} className='w-[40px] h-[40px]'/>
                                    </div>
                                    <h2 className='mt-9 font-semibold color-primary-title'>Recruitment and Staffing</h2>
                                    <p style={{marginTop: '18px'}}>From sourcing top-tier talent to conducting rigorous
                                        screening and assessments,
                                        we handle every aspect of the recruitment process to ensure you find the right
                                        fit for your team.</p>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}
                                 style={{display: 'flex'}}>
                                <div className='services-wrapper'>
                                    <div className='item-images'>
                                        <AppImages src={urlServices_2.src} className='w-[40px] h-[40px]'/>
                                    </div>
                                    <h2 className='mb-8 mt-9 font-semibold color-primary-title'>Employee Engagement and
                                        Development:</h2>
                                    <p>We design and implement strategies to enhance employee engagement, foster a
                                        positive company culture, and invest in the professional development of your
                                        workforce.</p>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}
                                 style={{display: 'flex'}}>
                                <div className='services-wrapper'>
                                    <div className='item-images'>
                                        <AppImages src={urlServices_3.src} className='w-[40px] h-[40px]'/>
                                    </div>
                                    <h2 className='mb-8 mt-9 font-semibold color-primary-title'>Outplacement
                                        Services</h2>
                                    <p>In times of transition, we offer compassionate outplacement services to support
                                        employees through career transitions while safeguarding your employer’s brand
                                        and reputation.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div id='why-us' className="content-item" style={{marginTop: '0'}}>
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <h1 className="text-center mb-3 mt-3">
                            <span>Why you choose</span>
                            <span className='ml-2 color-text-primary'>HD Global Career</span>
                        </h1>
                        <p className='text-center mb-10'>Let’s Transform Your HR Experience Together
                        </p>
                        <Row gutter={[40, 40]}>
                            <Col xs={24} sm={24} md={24} lg={14} xl={12} xxl={12} style={{textAlign: 'start'}}>
                                <AppImages src={urlWhyUs.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={10} xl={12} xxl={12}>

                                <Collapse className='app-collapse' accordion items={items} expandIconPosition={'end'}
                                          expandIcon={({isActive}) => <AppSvgIcon className='color-text-primary'
                                                                                  name='ChevronDownIcon'
                                                                                  rotate={isActive ? 90 : 0}/>}/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div id='blog' className="content-item color-bg-primary" style={{marginTop: '0'}}>
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <h1 className="mb-10 relative">
                            Latest Blog
                            <AppImages src={urlEllipse.src} className='ellipse ellipse-blog'/>
                        </h1>
                        <AppCarousel carouselArray={carouselArray}/>
                    </div>
                </div>
            </div>
            <div id='brands' className="content-item" style={{marginTop: '0'}}>
                <div className='app-container-fluid mx-auto px-5'>
                    <div className="content-item-wrapper">
                        <h1 className="text-center mb-4">
                            Trusted by Leading Brands
                        </h1>
                        <Row gutter={[40, 40]} style={{marginTop: '90px'}}>
                            <Col xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
                                <AppImages src={urlBrands.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
                                <AppImages src={urlBrands.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
                                <AppImages src={urlBrands.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
                                <AppImages src={urlBrands.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
                                <AppImages src={urlBrands.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
                                <AppImages src={urlBrands.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
                                <AppImages src={urlBrands.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
                                <AppImages src={urlBrands.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
                                <AppImages src={urlBrands.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
                                <AppImages src={urlBrands.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
                                <AppImages src={urlBrands.src}/>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
                                <AppImages src={urlBrands.src}/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div id='contact-us' className="content-item" style={{marginTop: '0'}}>
                <div className='app-container mx-auto px-5'>
                    <div className="content-item-wrapper color-bg-primary content-item-wrapper-relative">
                        <div className="inner-text">
                            <h1 className="mt-3 mb-12 relative">
                                <span>Let’s discuss on something</span>
                                <span className='ml-2 mr-2 color-text-primary'>cool</span>
                                <span>together</span>
                                <AppImages src={urlEllipse.src} className='ellipse ellipse-contact'/>
                            </h1>
                            <div className='flex info-wrapper'>
                                <div className='flex items-center mr-8 item-phone'>
                                    <AppImages src={urlPhone.src} className='w-[28px] h-[28px]'/>
                                    <div className='ml-2'>
                                        <div className='mb-1 text'>Phone</div>
                                        <div className='color-text-primary info'>0364703790</div>
                                    </div>
                                </div>
                                <div className='flex items-center item-email'>
                                    <AppImages src={urlEmail.src} className='w-[28px] h-[28px]'/>
                                    <div className='ml-2'>
                                        <div className='mb-1 text'>Email</div>
                                        <div className='color-text-primary info'>ha.dao@hdglobalcareer.com</div>
                                    </div>
                                </div>
                            </div>
                            <Form form={form} className='form-contact' layout='vertical' autoComplete='off'
                                  onFinish={onFinish}>
                                <Row gutter={16}>
                                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                        <Form.Item name='name'>
                                            <AppInput placeholder="Enter your name"/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                        <Form.Item name='email'>
                                            <AppInput placeholder="Enter your email"/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                        <Form.Item name='message'>
                                            <AppInput type={'textarea'} placeholder="Enter your message" rows={4}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col xs={24} md={24} lg={24}>
                                        <Form.Item className='app-last-form-item'>
                                            <AppButton type={'primary'} className='btn-w-full'
                                                       >Submit</AppButton>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="group-images">
                            <AppImages src={urlBackground.src} className='background-contact'/>
                            <AppImages src={urlEmployment.src} className='employment-contact'/>
                            <AppImages src={urlContactDecorate_1.src} className='decorate-1-contact'/>
                            <AppImages src={urlContactDecorate_2.src} className='decorate-2-contact'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageHome
