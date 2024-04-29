"use client"

import React from "react";
import {Row, Col} from 'antd'
import AppImages from '@/components/AppImages/index'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import AppButton from "../AppButton/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppSvgIcon from '@/components/AppSvgIcon/index'

interface Props {
    carouselArray?: Array<any>
    className?: string | null;
}

const defaultProps: Props = {
    carouselArray: [],
    className: null,
}

const SampleNextArrow = (props: any) => {
    const {className, style, onClick} = props;
    return (
        <div className='app-slick-next' style={{...style}} onClick={onClick}>
            <AppSvgIcon className={className}  name='ChevronRightIcon'
            />
        </div>
    )
}

const SamplePrevArrow = (props: any) => {
    const {className, style, onClick} = props;
    return (
        <div className='app-slick-prev' style={{...style}} onClick={onClick}>
            <AppSvgIcon className={className} name='ChevronLeftIcon'
            />
        </div>
    )
}

const AppCarousel: React.FC<Props> = (props) => {
    // const { type, carouselArray, className } = { ...props }
    const {carouselArray, className} = {...props}

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3.3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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
            <Slider {...settings}>
                {carouselArray && carouselArray.length > 0 && carouselArray.map((item, index) => (
                    <div className='app-carousel-item' key={index}>
                        <AppImages src={item.urlImage}/>
                        <h3 className='title'>{item.title}</h3>
                        <div className='description'>{item.description}</div>
                    </div>
                ))}
            </Slider>
        </div>

    )
}

AppCarousel.defaultProps = defaultProps;

export default AppCarousel
