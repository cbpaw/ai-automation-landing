/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next',
                        name: 'static/images/[name].[hash].[ext]',
                    },
                },
            ],
        })

        return config
    },
};

export default nextConfig;
