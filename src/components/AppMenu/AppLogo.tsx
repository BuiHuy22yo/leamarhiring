"use client"

import url from '@/assets/icons/svg/logo_hd_global_career.png'
import { useTranslation } from '@/locales/client'
import {useRouter} from "next/navigation";
import React from "react";
import AppCarousel from "../AppCarousel/index";


interface Props {
    showLogo?: boolean,
    showTitle?: boolean,
    title?: string | null,
    className?: string | null,
    src?: string | null,
}

const defaultProps: Props = {
    showLogo: true,
    showTitle: false,
    title: null,
    className: null,
    src: null,
}

const AppLogo: React.FC<Props> = (props) => {
    const { showLogo, showTitle, title, className, src} = { ...props }
    const { t } = useTranslation('translation')
    const router = useRouter();

    const handleClick = (url = '') => {
        router.push('/')
    }

    return (
        <>
            <div className={`app-logo cursor-pointer ${className || ''}`} onClick={() => handleClick()}>
                {showLogo &&  (
                    <>
                        {src ?  (
                            <>
                                <img src={src} alt='logo' className='logo-images'/>
                            </>
                        ): (
                            <>
                                <img src={url.src} alt='logo' className='logo-images'/>
                            </>
                        )
                        }
                    </>
                )
                }
                {showTitle &&  (
                    <>
                        {/*<h1 className='title'>{ title || t('logo.title') }</h1>*/}
                        <div className='ml-4 title'>
                            <div className='title-top'>global</div>
                            <div className='title-bottom'>career</div>
                        </div>
                    </>
                )
                }
            </div>
        </>
    )
}

AppLogo.defaultProps = defaultProps;

export default AppLogo
