"use client"

import url from '@/assets/icons/svg/logo.png'
import { useTranslation } from '@/locales/client'
import {useRouter} from "next/navigation";


interface Props {
    showLogo: boolean,
    showTitle: boolean,
    title: string,
    className: string,
}

const defaultProps = {
    showLogo: true,
    showTitle: true,
    title: null,
    className: null,
}

const AppLogo = ({...props}: Props) => {
    const { showLogo, showTitle, title, className} = { ...defaultProps, ...props }
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

export default AppLogo
