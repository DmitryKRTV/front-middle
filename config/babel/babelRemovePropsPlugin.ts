import { PluginItem } from '@babel/core';

// выпиливает из продакшена заданные штуки за счет чего
// уменьшает размер бандла

export default (): PluginItem => {
    return {
        visitor: {
            Program(path, state) {
                const forbidden = state.opts.props || [];
                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;
                        if (forbidden.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
};
