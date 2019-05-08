# 定位

## 父有 transform 的 fixed 降级问题

如果某个 `fixed` 定位的元素，祖先里有 `transform` 元素，那么就会降级为 `absolute` 定位。

解决: 从有 `transform` 的元素中抽取出来。

相关文章: https://www.cnblogs.com/coco1s/p/7358830.html

