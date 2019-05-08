# 文本相关


## 文本溢出

```scss
// 多行文本溢出省略号占位
@mixin textOverflow($lineNum: 2) {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: $lineNum;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
}
```

**⚠️注意**: 上面`autofixer` 的注释是为了防止在打包时一些插件的 autofixer 会将 `-webkit-box-orient` 删除，详细分析可以参考这篇文章 -> [多行文本溢出「…」到 autofixer 背锅再到放弃](https://github.com/NoName4Me/yo-FE/issues/3)。