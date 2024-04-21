"use client"

import { Input } from 'antd';
import AppButton from "../AppButton/index";
import React from "react";

interface Props {
    type?: 'text' | 'password' | 'textarea' | 'number',
    placeholder?: string | null
    className?: string | null
    rows: number | null
}

const defaultProps: Props = {
    type: 'text',
    placeholder: null,
    className: null,
    rows: 4
}

const { TextArea } = Input

const AppInput: React.FC<Props> = (props) => {
    const { type, value, placeholder, rows } = { ...props }
    const classType = 'app-input-' + type

    return (
        <div className={'app-input ' +classType +` ${props?.className || ''}`}>
            {
                (type === 'text' || type === 'number') && (
                    <Input value={value} placeholder={placeholder}/>
                )
            }
            {
                type === 'password' && (
                    <Input.Password value={value} placeholder={placeholder}/>
                )
            }
            {
                type === 'textarea' && (
                    <TextArea value={value} placeholder={placeholder} row={4}/>
                )
            }
        </div>
    )
}

AppInput.defaultProps = defaultProps;

export default AppInput
