# react重构geek官网

这段时间在学习React，也了解了React的一些核心思想，比如组件化开发，单向数据流，虚拟DOM等。
所以自己也做个小栗子来练练手，就重构了geek官网

##主要功能

- 工作室简介

- 成员介绍

- 毕业去向

- 加入我们

##项目概述
- React.js，ECMAScript6进行组件开发
- 使用React-Router实现路由管理，实现单页应用
- 构建工具使用Webpack进行打包

##遇到的问题

1.在用React-Router实现路由管理时，react-router安装时，出现npm install Error: EPERM: operation not permitted, symlink ...

解决：百度了很多方法，采纳了删除C:\Users\用户名\下的.npmrc文件,npm start几次也打包失败，然后直接删除目录下的node_modules文件夹，
然后重新install，就搞定了。

2.路由实现中，因为之前安装的React-Router版本过低，使用下面的代码还ok

```
 <Route path="/" component={App}>
        <Route path="/repos" component={Repos}>
            <Route path="/repos/:username/:repoName" component={Repo} />
        </Route>
        <Route path="/about" component={About} />
    </Route>
```
这次项目中安装的React-Router版本是最新的，所以去看了官方文档之后

```
const SliderComponent = () => (
    <Switch>
        <Route exact path='/' component={App} />
        <Route path="/homeIntro" component={App} />
        <Route path="/member" component={Member} />
        <Route path="/graduate" component={GraduateBox} />
        <Route path="/joinUs" component={JoinUs} />
    </Switch>
);
render(<HashRouter history={hashHistory}>
            <SliderComponent />
      </HashRouter>, document.getElementById('root'));

```