import webpack, { Stats } from "webpack";
import { join } from "path"
import HtmlWebpackPlugin from "html-webpack-plugin";



const rendererConfig: webpack.Configuration = {
    entry: { main: join(__dirname, "./renderer/src/main.ts") },
    output: { 
                path: join(__dirname, "./dist/renderer"),
                filename: "bundle.js"
    },
    module: {
        rules: [
            {
               test: /.ts$/,
               use: "ts-loader"
            },
            {
                test: /.css$/,
                use: "css-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
      },
    plugins: [
        new HtmlWebpackPlugin({ template: join(__dirname, "./renderer/src/index.html")})
    ]
}

const compiler = webpack(rendererConfig);
compiler.run((_: any, stats: Stats)=>{
    console.log(stats.compilation.errors);
});