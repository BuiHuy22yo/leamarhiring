import React from "react";
import { Button } from 'antd';

interface Props {
    type?: 'primary' | 'dashed' | 'text' | 'link' | 'default' | undefined;
    children?: React.ReactNode;
    className?: string | null;
}

const defaultProps: Props = {
    type: 'default',
    children: null,
    className: null,
}

const AppButton: React.FC<Props> = (props) => {
    const { type, children, className } = { ...props }

    return (
        <>
            <div className={`app-button ${className || ''}`}>
                {
                    type ? (
                        <Button type={type} className='w-full'>
                            {children}
                        </Button>
                    ) : (
                        <Button className='w-full'>
                            {children}
                        </Button>
                    )
                }
            </div>
        </>
    )
}

AppButton.defaultProps = defaultProps;

export default AppButton;
