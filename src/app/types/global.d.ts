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

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

/* eslint-disable  @typescript-eslint/no-explicit-any */
type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
