declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.txt' {
    const content: string;
    export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module "*.svg" {
    import { FC, SVGProps } from "react";
    const content: FC<SVGProps<SVGElement>>;
    export default content;
}

// declare module '*.svg' {
//     import React from 'react';

//     const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
//     export default SVG;
// }

declare const __IS_DEV__: boolean;
