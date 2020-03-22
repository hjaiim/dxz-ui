const path = require('path')
module.exports = {
    // 修改 pages 入口
    pages: {
        index: {
            entry: 'examples/main.js', // 入口
            template: 'public/index.html', // 模板
            filename: 'index.html' // 输出文件
        }
    },
    lintOnSave: false,
    // 扩展 webpack 配置
    chainWebpack: config => {
        // @ 默认指向 src 目录，这里要改成 examples
        // 另外也可以新增一个 ~ 指向 packages
        config.resolve.alias
            .set('@', path.resolve('examples'))
            .set('~', path.resolve('packages'))

        // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
        config.module
            .rule('js')
            .include.add(/packages/).end()
            .include.add(/examples/).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })

        config.module
            .rule("md")
            .test(/\.md$/)
            .use("vue-loader")
            .loader("vue-loader")
            .end()
            .use("vue-markdown-loader")
            .loader("vue-markdown-loader/lib/markdown-compiler")
            .options({
                raw: true,
                use: [
                    [
                        require("markdown-it-container"),
                        "demo",
                        {
                            validate: function (params) {
                                return params.trim().match(/^demo\s*(.*)$/);
                            },
                            render: function (tokens, idx) {
                                // nesting === 1表示标签开始
                                if (tokens[idx].nesting === 1) {
                                    // 获取正则捕获组中的描述内容,即::: demo 
                                    let demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
                                    let description =
                                        demoInfo && demoInfo.length > 1 ? demoInfo[1] : "";
                                    // 是否有描述需要渲染
                                    let descriptionHTML = description
                                        ? markdownRender.render(description)
                                        : "";
                                    // 2.获取代码块内的html和js代码
                                    let content = tokens[idx + 1].content;
                                    // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染代码示例
                                    return `<demo-block>
                    <div class="source" slot="source">${content}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`;
                                } else {
                                    // 闭合标签
                                    return "</div></demo-block>\n";
                                }
                            }
                        }
                    ]
                ]
            });
    }
}