import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const createdCssLoader = (isDev: boolean) => ({
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                modules: {
                    auto: (fPath: string) =>
                        Boolean(fPath.includes(".module.scss")),
                    localIdentName: isDev
                        ? "[path][name]__[local]--[hash:base64:6]"
                        : "[hash:base64:8]",
                },
            },
        },
        "sass-loader",
    ],
});


export const scssLoader = (isDev: boolean) => ({
    test: /\.(scss)$/i,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader", 'sass-loader'],
});
