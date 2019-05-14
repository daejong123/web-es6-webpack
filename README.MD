## web-es6-webapck

**背景**
浏览器是不支持commonjs中的require/module.export语法的，更别提目前很流行的es6中export/import语法。那么如果我们写了一些
高级语法 如面向对象，async，await，const语法时，如何在浏览器中运行呢。

**做法**
1. babel工具
    * 将高级语法转为(稳定的、低版本语法)es5语法(基本es6之前的语法统称为es5)
    * babel就是这样的一个工具，提供了许多转码器presents
    * 这里我整理了一些babel的使用说明 [babel使用](http://dottie.microbits.cn/2018/12/10/babel%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8/#more)

2. 再借助webpack打包工具，解决require，export等问题。
    * webpack本质就是在使用一些loader和plugin来解决问题
    ```javascript
    const webpack = require('webpack');
    module.exports = {
        mode: "development",
        entry: {
            index: path.join(__dirname, 'modules', 'index.js'),
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'js/[name].[hash].js'
        },
        module: {
            rules: []
        },
        plugins: [],
        devServer: {}
    };
    ```
3. 然后就可以使用了，详细内容看代码。
```javascript
    npm run dev
```
