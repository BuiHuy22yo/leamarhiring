import { MenuObject } from '@/types/menu'

const FooterGeneral : Array<MenuObject> = [
    {
        path: '/',
        title: 'home.title',
    },
    {
        path: '/services',
        title: 'services.title',
    },
    {
        path: '/blog',
        title: 'blog.title',
    },
    {
        path: '/contact-us',
        title: 'contact-us.title',
    },
]

const FooterServices : Array<MenuObject> = [

    {
        path: '/',
        title: 'employer_of_record.title',
    },
    {
        path: '/',
        title: 'recruitment.title',
    },
    {
        path: '/',
        title: 'payroll_outsourcing.title',
    },
    {
        path: '/',
        title: 'equipment_procurement.title',
    },
    {
        path: '/',
        title: 'remote_office_space_solutions.title',
    },
]

const FooterFollowUs = [
    {
        link: '/',
        title: 'facebook.title',
    },
    {
        link: '/services',
        title: 'instagram.title',
    },
    {
        link: '/blog',
        title: 'linkedin.title',
    },
]

const AppMenuArray: Array<MenuObject> = [
    {
        path: '/',
        title: 'home.title',
    },
    {
        path: '/about-us',
        title: 'about-us.title',
    },
    {
        path: '/services',
        title: 'services.title',
        children: FooterServices
    },
    {
        path: '/blog',
        title: 'blog.title',
    },
    {
        path: '/contact-us',
        title: 'contact-us.title',
    },
]

export { AppMenuArray, FooterGeneral, FooterServices, FooterFollowUs }