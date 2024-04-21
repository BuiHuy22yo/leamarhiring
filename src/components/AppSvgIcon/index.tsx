"use client"

import React, {useEffect} from 'react';
import * as OIcons from '@heroicons/react/24/outline'
import * as SIcons from '@heroicons/react/24/solid'
import AppMenu from "../AppMenu/AppMenu";

interface Props {
    disabled?: boolean,
    name?: string,
    type?: 'outline' | 'solid',
    color?: string,
    isDefaultClass?: boolean,
    className?: string | null,
    rotate?: number | null
}

const defaultProps: Props = {
    disabled: false,
    name: '',
    type: 'outline',
    color: '',
    isDefaultClass: true,
    className: null,
    rotate: null
}

const defaultClassSvg = 'md:w-3 md:h-3 lg:w-5 lg:h-5'
const disabledClassSvg = 'disabled'

const AppSvgIcon: React.FC<Props> = (props) => {
    const { disabled, type, color, className, isDefaultClass, rotate } = { ...props}
    let icons: Record<string, React.ElementType> = { ...OIcons }
    let disCls = ''
    let cls = isDefaultClass ? `${defaultClassSvg}` : ''
    const Style: React.CSSProperties = {
        color: color,
    }

    if(type === 'solid') {
        icons = { ...SIcons }
    } else {
        icons = { ...OIcons }
    }

    const SvgIcon = icons[props.name as keyof typeof icons]

    useEffect(() => {
        if(disabled){
            disCls = disabledClassSvg
        }else {
            disCls = ''
        }
        cls += disCls
    }, [disabled]);

    return (
        <>
            <div className={`app-svg-icon ${className || ''}`}>
                {SvgIcon ? <SvgIcon aria-hidden='true' className={cls} style={Style} rotate={rotate}/> : null}
            </div>
        </>
    )
}

AppSvgIcon.defaultProps = defaultProps;


export default AppSvgIcon
