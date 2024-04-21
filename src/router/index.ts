import { MenuObject } from '@/types/menu'
import urlCarousell from '@/assets/images/logo-Carousell.png'
import urlLandmark from '@/assets/images/logo-Landmark.png'
import urlMadrelle from '@/assets/images/logo-Madrelle.png'
import urlRemote from '@/assets/images/logo-Remote.png'
import urlSgtech from '@/assets/images/logo-Sgtech.png'
import urlSkuad from '@/assets/images/logo-Skuad.png'
import urlDeel from '@/assets/images/logo-Deel.png'
import urlJago from '@/assets/images/logo-Jago.png'

const FooterGeneral : Array<MenuObject> = [
    {
        path: '/',
        title: 'home.title',
    },
    {
        path: '/about',
        title: 'about.title',
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
        path: '/why-us',
        title: 'why-us.title',
    },
]

const FooterServices : Array<MenuObject> = [

    {
        path: '/services',
        title: 'employer_of_record.title',
    },
    {
        path: '/services',
        title: 'recruitment.title',
    },
    {
        path: '/services',
        title: 'payroll_outsourcing.title',
    },
    {
        path: '/services',
        title: 'equipment_procurement.title',
    },
    {
        path: '/services',
        title: 'remote_office_space_solutions.title',
    },
]

const FooterFollowUs = [
    {
        link: '/',
        title: 'privacy-policy.title',
    },
    {
        link: '/',
        title: 'terms-condition.title',
    },
    {
        link: '/',
        title: 'faq.title',
    },
]

const AppMenuArray: Array<MenuObject> = [
    {
        path: '/',
        title: 'home.title',
    },
    {
        path: '/about',
        title: 'about.title',
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
        path: '/why-us',
        title: 'why-us.title',
    },
]

const BrandsArray = [
    {
        src: urlLandmark.src
    },
    {
        src: urlCarousell.src
    },
    {
        src: urlMadrelle.src
    },
    {
        src: urlRemote.src
    },
    {
        src: urlSgtech.src
    },
    {
        src: urlSkuad.src
    },
    {
        src: urlDeel.src
    },
    {
        src: urlJago.src
    }
]

export { AppMenuArray, FooterGeneral, FooterServices, FooterFollowUs, BrandsArray }