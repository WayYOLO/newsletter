#Newsletter Template
这是一个简单的模板，我想做这样的东西很久了，用响应式用rem加上合理的css结构去创造一个像样的工程，
显然现在看来还不是很完美。。
###用的技术和想法：
* 项目构建方面使用了glup，为了开发环境和发布环境的分离，构建环境必须的。
* 图标方面使用了阿里的iconfont,移动端表现不错。
* css方面用用到了sass，使用了Normalize.css初始样式，结构上公共和定制分离。

###重点讲下样式吧：
响应式上本来想用bootstrap的栅格的，但是每人标签用类似有`col-**`看起来不是很酷，可能是项目上用吐了；想着定制一套，直到看到[grid](https://github.com/aekaplan/grid)样式代码，发现他的想法很纯粹，与我不谋而合，同时也也想尝试一下rem的优点，就开始构建工程了，断点设置上以简便为原则：

```css
/* 默认根字体 */
html { font-size: 100%; }

/* 小屏640以上 */
@media (min-width: 40rem) {
    html { font-size: 112%; }
}

/* 中屏1024以上 */
@media (min-width: 64rem) {
    html { font-size: 120%; }
}
```
