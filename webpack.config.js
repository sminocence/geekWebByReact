module.exports = {
    entry: __dirname+ "/app/index.js",
    output: {
        path: __dirname + "public",
        filename: "bundle.js"
    },

    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            },
            {
    　　　　　　 test: /\.(png|jpg)$/,
    　　　　　　 use:{
                    loader: 'url-loader?limit=8192'
                }
　　　　     }
        ]
    }
}