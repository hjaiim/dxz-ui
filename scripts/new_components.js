// 参数校验
if (!process.argv[2]) {
    console.error('[组件名]必填 - Please enter new component name');
    process.exit(1);
}

const path = require('path');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');

// 组件名(英文)
const componentname = process.argv[2];
// 组件名(中文)
const chineseName = process.argv[3] || componentname;
// 转成驼峰表示
const ComponentName = uppercamelcase(componentname);

// 组件所在的目录文件
const PackagePath = path.resolve(__dirname, '../packages', componentname);

// 检查是否已经存在同名组件

// 定义创建文件信息
const Files = [
    // 组件文档/demo
    {
        filename: `../../examples/docs/${componentname}.md`,
        content: `# ${chineseName}`
    },
    // 组件模板
    {
        filename: `index.vue`,
        content: `组件相关模板`
    }
]

// 生成组件必要的文件
Files.forEach(file => {
    fileSave(path.join(PackagePath, file.filename))
        .write(file.content, 'utf8')
        .end('\n');
});


