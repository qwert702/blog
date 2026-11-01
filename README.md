# 水水的博客

个人博客源码。站点地址：<https://blog.cbnac.com/blog/>

## 结构

```text
.
├── index.html              首页
├── about.html              关于 / GitHub
├── archive.html            文章归档
├── posts/                  文章
├── assets/                 样式、脚本、图标、封面
├── rss.xml / sitemap.xml
├── robots.txt
└── 404.html
```

## 本地预览

```bash
python -m http.server 8080
# 打开 http://127.0.0.1:8080/
```

## 发布

把仓库内容同步到服务器：

```text
/var/www/cbnac.cn/blog
```

发布前先备份旧目录。静态站没有运行时依赖。

## 约定

- 文章正文优先使用语义化 HTML；需要迁移到 Markdown/Astro 时保持 URL 不变。
- 全站 GitHub 入口：<https://github.com/qwert702>
- 不放置追踪脚本；不自动播放重型视频。
