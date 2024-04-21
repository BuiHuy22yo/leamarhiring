import {Metadata} from 'next';
// import {useTranslation} from '@/locales/index';

// const {t} = await useTranslation()

export const metadata: Metadata = {
    // title: t('_contact-us.title'),
    title: 'Contact Us',
}

const PageLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            {children}
        </>
    )
}
export default PageLayout

