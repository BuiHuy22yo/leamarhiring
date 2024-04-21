"use client"

import React from "react";
import {Row, Col} from 'antd'
import AppImages from '@/components/AppImages/index'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import AppButton from "../AppButton/index";


interface Props {
    carouselArray?: Array<any>
    className?: string | null;
}

const defaultProps: Props = {
    carouselArray: [],
    className: null,
}

const AppCarousel: React.FC<Props> = (props) => {
    // const { type, carouselArray, className } = { ...props }
    const {carouselArray, className} = {...props}

    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    };

    return (
        <div className={`app-carousel ${className || ''}`}>
            {/*<OwlCarousel></OwlCarousel>*/}
            {/*<OwlCarousel className="owl-carousel owl-theme" >*/}
            {/*<div>1</div>*/}
            {/*<div>1</div>*/}
            {/*<div>1</div>*/}
            {/*<div>1</div>*/}
            {/*<div>1</div>*/}
            {/*</OwlCarousel>*/}
            <Row gutter={[20, 20]}>
                {carouselArray && carouselArray.length > 0 && carouselArray.map((item, index) => (
                    <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6} key={index}>
                        <div className='app-carousel-item'>
                            <AppImages src={item.urlImage}/>
                            <h3 className='title'>{item.title}</h3>
                            <div className='description'>{item.description}</div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>

    )
}

AppCarousel.defaultProps = defaultProps;

export default AppCarousel
