const path = require('path')

const pathToInlineSvg = path.resolve(__dirname, '../src/materials/icons');





module.exports = ({config}) => {




    config.module.rules=[
        ...config.module.rules.map(rule => {
            if (/svg/.test(rule.test)) {
                // Silence the Storybook loaders for SVG files
                return { ...rule, exclude: /\.svg$/i }
            }

            return rule
        }),
        {
            test: /.(png|woff|woff2|eot|ttf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                },
            ],
            include: path.resolve(__dirname, '../'),

        },
        {
            test: /\.module\.scss$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        modules: true,
                    },
                },
                'sass-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", 'sass-loader'],
            exclude: /\.module\.scss$/
        },
        {
            test: /\.svg$/,
            use:[

                {
                    loader: '@svgr/webpack', options: {
                        memo: true
                    }
                },
                {
                    loader: 'new-url-loader'
                }
            ]
        }

    ]


    return config


}
