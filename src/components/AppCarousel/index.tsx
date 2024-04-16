"use client"

import React from "react";
import { Carousel } from 'antd';
import AppImages from '@/components/AppImages/index'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
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
    const { className } = { ...props }

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
            {/*<OwlCarousel className="owl-carousel owl-theme" {...options}>*/}
            {/*    { carouselArray && carouselArray.length > 0 && carouselArray.map((item, index) => (*/}
            {/*        <div className='app-carousel-item' key={index}>*/}
            {/*            <AppImages src={item.src}/>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</OwlCarousel>*/}
        </div>

    )
}

AppCarousel.defaultProps = defaultProps;

export default AppCarousel
