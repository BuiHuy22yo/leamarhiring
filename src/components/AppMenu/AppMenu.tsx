"use client"

import {Col, Menu} from 'antd'
import React, {useEffect, useState} from 'react';
import {MenuItem, MenuObject} from '@/types/menu'
import type {MenuProps} from 'antd'
import {useParams, useRouter} from 'next/navigation';
import {useTranslation} from '@/locales/client'
import AppSvgIcon from '@/components/AppSvgIcon/index';
import AppLogo from "./AppLogo";

interface Props {
    className?: string | null;
    mode?: 'vertical' | 'horizontal' | 'inline' | undefined;
    theme?: 'light' | 'dark';
    menu?: Array<any>;
}

const defaultProps: Props = {
    className: null,
    mode: 'vertical',
    theme: 'light',
    menu: []
}

const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem => {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem
}

const AppMenu: React.FC<Props> = (props) => {
    const {menu, className, mode, theme} = {...props}
    const [MenuItems, setMenuItems] = useState<Array<MenuItem>>([])
    const router = useRouter();
    const [current, setCurrent] = useState<string>('1');
    const {t} = useTranslation('translation')

    const params = useParams()
    console.log('params', params)

    const getMenu = () => {
        if (MenuItems && MenuItems.length === 0) {
            const items: Array<MenuItem> = getListItem(menu)
            setMenuItems(items)
        }
    }

    const getListItem = (menu: MenuObject[] | undefined) => {
        const items: MenuItem[] = []

        if (menu && menu.length) {
            menu.forEach((obj, index) => {
                let label = t(obj.title)
                let Icon: JSX.Element | null = obj.icon ? <AppSvgIcon name={obj.icon}/> : null
                const item = getItem(label, (index + 1).toString(), Icon)
                items.push(item)
            })
        }
        return items
    }

    const handleClick: MenuProps['onClick'] = (e) => {
        const obj: MenuObject[] | undefined = menu && menu.slice(parseInt(e.key) - 1, parseInt(e.key))
        if (obj && obj[0]) {
            const url: string | undefined = obj[0]?.path
            router.push(url || '')
        }
    }

    getMenu()

    return (
        <>
            <div className={`app-menu ${className || ''}`}>
                {/*{MenuItems && (*/}
                {/*    <>*/}
                {/*        <Menu*/}
                {/*            defaultSelectedKeys={[current]}*/}
                {/*            mode={mode}*/}
                {/*            theme={theme}*/}
                {/*            items={MenuItems}*/}
                {/*            onClick={handleClick}*/}
                {/*        />*/}

                {/*    </>*/}
                {/*)}*/}
                 <div className='ant-menu'>
                    {menu && menu.length > 0 && menu.map((item, index) => (
                        <div className='ant-menu-item' key={index}>
                            <a href={item.name !== 'home' ? `#${item.name}` : item.path}>
                                <div className='ant-menu-title-content'>{
                                    t(item.title)
                                }</div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

AppMenu.defaultProps = defaultProps;

export default AppMenu
