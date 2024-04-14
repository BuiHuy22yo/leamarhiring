import {Metadata} from 'next';
import {useTranslation} from '@/locales/index';

const {t} = await useTranslation()

export const metadata: Metadata = {
    title: t('services.title'),
}

const PageLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            {children}
        </>
    )
}
export default PageLayout

