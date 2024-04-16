"use client"

import url from '@/assets/icons/svg/logo.png'
import { useTranslation } from '@/locales/client'
import {useRouter} from "next/navigation";
import React from "react";
import AppCarousel from "../AppCarousel/index";


interface Props {
    showLogo?: boolean,
    showTitle?: boolean,
    title?: string | null,
    className?: string | null,
}

const defaultProps: Props = {
    showLogo: true,
    showTitle: true,
    title: null,
    className: null,
}

const AppLogo: React.FC<Props> = (props) => {
    const { showLogo, showTitle, title, className} = { ...props }
    const { t } = useTranslation('translation')
    const router = useRouter();

    const handleClick = (url = '') => {
        router.push('/')
    }

    return (
        <>
            <div className={`app-logo flex items-center cursor-pointer ${className || ''}`} onClick={() => handleClick()}>
                {showLogo &&  (
                    <>
                        <img src={url.src} alt='logo' className='logo-images'/>
                    </>
                )
                }
                {showTitle &&  (
                    <>
                        <h1 className='title'>{ title || t('logo.title') }</h1>
                    </>
                )
                }
            </div>
        </>
    )
}

AppLogo.defaultProps = defaultProps;

export default AppLogo
