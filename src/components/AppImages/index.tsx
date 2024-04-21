"use client"

import React from "react";
import { Image } from 'antd';
import AppMenu from "../AppMenu/AppMenu";

interface Props {
    src: string | null
    preview?: boolean
    className?: string | null,
}

const defaultProps:Props = {
    src: null,
    preview: false,
    className: null,
}

const AppImages: React.FC<Props> = (props) => {
    const {src,preview, className} = { ...props}

    return (
        <div className={`app-image ${className || ''}`}>

            {src &&  (
                <>
                    <Image
                        className='w-full'
                        src={src}
                        preview={preview}
                    />
                </>
            )
            }
        </div>
    )
}

AppImages.defaultProps = defaultProps;

export default AppImages
