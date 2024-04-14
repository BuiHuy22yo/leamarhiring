"use client"

import React from "react";
import { Image } from 'antd';

interface Props {
    src: null
    preview?: boolean
}

const defaultProps = {
    preview: false
}

const AppImages = ({...props}: Props) => {
    const {src,preview, className} = {...defaultProps, ...props}
    console.log('src', props.src)

    return (
        <div className={`app-image ${className || ''}`}>
            <Image
                width='w-full'
                src={src}
                preview={preview}
            />
        </div>
    )
}

export default AppImages
