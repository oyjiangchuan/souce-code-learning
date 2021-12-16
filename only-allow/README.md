1. npm 的 `preinstall`钩子在package被install之前执行，`postinstall`钩子在package被install之后执行，顺序为`preinstall` => `install` => `postinstall`

2. process.argv对象为一个数组，第一个参数为当前的node，第二个参数为当前执行文件的路径，之后参数为传入的参数；如执行`node ./bin.js npm`打印的参数如下：
```js
[
  '/Users/ouyangjiangchuan/.nvm/versions/node/v14.16.0/bin/node',
  '/Users/ouyangjiangchuan/demo/souce-code-learning/only-allow/bin.js',
  'npm'
]
```

3. 许多包都有一个或多个可执行文件，它们希望将这些文件安装到PATH中；package.json中的bin字段提供了很好的解决方法；当全局安装依赖包时，会在对应node环境的bin目录中创建一个`symlink(软链接)`命令；当项目中安装依赖包时，会在`./node_modules/.bin/`文件夹下面创建，名称是bin提供的命令名称；使用bin字段有两种情况：

- 对象的方式
```json
"bin": {
	"myapp": "cli.js" // 全局安装会创建一个myapp命令软链接到package/cli.js
}
```

- 字符串
```json
{
  "name": "my-cli",
  "bin": "cli.js"
}
// 全局安装会创建一个my-cli命令软链接到package/cli.js
// 等价于下面
{
  "name": "my-cli",
  "bin": {
    "my-cli": "cli.js"
  }
}
```
> 注意，这些可执行文件都需要以`#!/usr/bin/env node`开始声明

4. which-pm-runs 当前运行的是哪一个包管理器 返回一个{ name: '', version: '' }，原理是根据`process.env.npm_config_user_agent`返回结果类似：`npm/6.14.11 node/v14.16.0 darwin x64`

5. 截取字符串不推荐使用`String.prototype.substr`，推荐使用`slice`方法，[原因](https://github.com/vuejs/vue-next/pull/4699)
