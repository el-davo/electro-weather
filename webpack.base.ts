import { CheckerPlugin } from 'awesome-typescript-loader';
import { join, resolve } from 'path';

export const baseConfig = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          fix: false
        }
      },
      {
        test: /\.tsx?$/,
        loaders: ['react-hot-loader', 'awesome-typescript-loader?useBabel=true&useWebpackText=true&useCache=true'],
        include: [resolve(__dirname, 'app')]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },

  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    modules: ['app', 'node_modules', 'webpack', 'browser', 'web', 'browserify', 'main']
  },

  plugins: [
    new CheckerPlugin()
  ],

  externals: []
};
