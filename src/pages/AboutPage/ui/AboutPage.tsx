import {ReactNode} from 'react';

interface AboutPageProps {
    children?: ReactNode
}

export const AboutPage = (props: AboutPageProps) => {
    const {children} = props

    return (
        <div>
            AboutPage
            {children}
        </div>
    );
};

export default AboutPage