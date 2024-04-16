import {Metadata} from 'next';
// import {useTranslation} from '@/locales/index';

// const {t} = await useTranslation()

export const metadata: Metadata = {
    // title: t('about-us.title'),
    title: 'About Us',
}

const PageLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            {children}
        </>
    )
}
export default PageLayout

