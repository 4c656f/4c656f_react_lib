const path = require('path')









module.exports = ({config}) => {



    config.module.rules.push({
        test: /.(png|woff|woff2|eot|ttf|svg)$/,
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


    );

    return config


}
