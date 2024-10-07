import {ReactNode} from 'react';

interface MainPageProps {
    children?: ReactNode
}

export const MainPage = (props: MainPageProps) => {
    const {children} = props

    return (
        <div>
                MainPage
            {children}
        </div>
    );
};

export default MainPage

