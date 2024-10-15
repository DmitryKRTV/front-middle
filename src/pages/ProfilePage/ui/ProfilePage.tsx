import { profileReducer } from '@/entities/Profile';
import { classNames } from '@/shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from '@/widgets/DynamicModuleLoader';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('PROFILE PAGE')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
