"use client"

import {Button} from 'antd';

interface Props {
    type?: 'primary' | 'dashed' | 'text' | 'link' | 'default'
}

const defaultProps = {
    type: 'default',
}

const AppButton = ({ ...props }: Props)=> {
    const { type, children, className } = { ...defaultProps, ...props }

    return (
        <>
            <div className={`app-button ${className || ''}`}>
                {
                    type ? (
                        <Button { ...props } type={type} className='w-full'>
                            { children }
                        </Button>
                    ) : (
                        <Button { ...props } className='w-full'>
                            { children }
                        </Button>
                    )
                }
            </div>
        </>
    )
}

export default AppButton
