"use client"

import { Menu } from 'antd'
import {useEffect, useState} from 'react';
import { MenuItem, MenuObject } from '@/types/menu'
import type { MenuProps } from 'antd'
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/locales/client'
import AppSvgIcon from '@/components/AppSvgIcon/index';


interface Props {
    className: string,
    mode?: 'vertical' | 'vertical-right' | 'horizontal' | 'inline',
    theme?: 'light' | 'dark'
}

const defaultProps = {
    className: null,
    mode: 'vertical',
    theme: 'light'
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

const AppMenu = ({...props}: Props) => {
    const { menu, className, mode, theme } = { ...defaultProps, ...props}
    const [MenuItems, setMenuItems] = useState<Array<MenuItem>>([])
    const router = useRouter();
    const [current, setCurrent] = useState<String>('0');
    const { t } = useTranslation('translation')

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
                {MenuItems && (
                    <>
                        <Menu
                            defaultSelectedKeys={[current]}
                            mode={mode}
                            theme={theme}
                            items={MenuItems}
                            onClick={handleClick}
                        />
                    </>
                )}
            </div>
        </>
    )
}

export default AppMenu
