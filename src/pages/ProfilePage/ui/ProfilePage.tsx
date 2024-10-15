import { profileReducer } from '@/entities/Profile';
import { fetchProfileData } from '@/entities/Profile/model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from '@/entities/Profile/ui/ProfileCard/ProfileCard';
import { useAppDispatch } from '@/features/Store/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from '@/widgets/DynamicModuleLoader';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
