"use client"

import React from "react";
import { Carousel } from 'antd';
import AppImages from '@/components/AppImages/index'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


interface Props {
    carouselArray?: Array<any>
}

const defaultProps = {
    carouselArray: []
}

const AppCarousel = ({ ...props }: Props)=> {
    const { type, carouselArray, className } = { ...defaultProps, ...props }

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

export default AppCarousel
