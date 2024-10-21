import path from 'path';
import { DefinePlugin, RuleSetRule } from 'webpack';
import { createdCssLoader } from '../build/loaders/createCssLoader';
import { createFileLoader } from '../build/loaders/createFileLoader';
import { createSVGLoader } from '../build/loaders/createSVGLoader';
import { BuildPaths } from '../build/types/config';

// export default ({ config }: { config: webpack.Configuration }) => {
export default ({ config }) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src'),
        build: '',
        entry: '',
        html: '',
        locales: '',
        buildLocales: '',
        // version: ''
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('ts', 'tsx');
 
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });


    config.module.rules.push(createdCssLoader(true));
    config.module!.rules.push(createFileLoader());
    config.module.rules.push(createSVGLoader());

    config.resolve.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };

    config.plugins.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('http://localhost:8000'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
