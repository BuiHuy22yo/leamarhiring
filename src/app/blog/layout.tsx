import {Metadata} from 'next';
// import {useTranslation} from '@/locales/index';

// const {t} = await useTranslation()

export const metadata: Metadata = {
    // title: t('blog.title'),
    title: 'Blog'
}

const PageLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            {children}
        </>
    )
}
export default PageLayout

